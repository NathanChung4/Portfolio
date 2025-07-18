import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    console.log('Email-only test - Received form data:', { name, email, message });

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email via Nodemailer (skip MongoDB)
    let emailSent = false;
    let emailError = null;

    try {
      console.log('Attempting to send email...');
      console.log('Gmail config:', { 
        user: process.env.GMAIL_USER, 
        hasPassword: !!process.env.GMAIL_APP_PASSWORD 
      });
      
      // Create transporter using Gmail
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // Email content
      const mailOptions = {
        from: `"${name}" <${process.env.GMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Sent from your portfolio website</em></p>
        `,
        replyTo: email,
      };

      console.log('Sending email...');
      await transporter.sendMail(mailOptions);
      emailSent = true;
      console.log('Email sent successfully!');
    } catch (emailErr: any) {
      console.error('Email sending failed:', emailErr);
      emailError = emailErr.message || 'Failed to send email';
    }

    return NextResponse.json({
      success: true,
      message: 'Message received and email processed',
      emailSent,
      emailError: emailError || undefined,
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
