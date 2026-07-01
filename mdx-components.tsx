import type { MDXComponents } from "mdx/types";

// Required by @next/mdx in the App Router. Article-level styling is handled by
// Tailwind Typography (`prose`) on the wrapping <article>, so this is a simple
// passthrough — override elements here only if a component needs custom markup.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
