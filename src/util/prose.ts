import type { Heading } from '@/types/prose';

/**
 * Taken from https://medium.com/@rezahedi/how-to-build-table-of-contents-in-astro-and-sectionize-the-markdown-content-78bee84e6a7f
 *
 * @param headings
 * @returns
 */
export function buildHierarchy(headings: any) {
  const toc: Heading[] = [];
  const parentHeadings: Map<number, Heading> = new Map();

  if (!headings) return toc;

  headings.forEach((h: any) => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);
    // Change 2 to 1 if your markdown includes your <h1>
    if (heading.depth === 1) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1)?.subheadings.push(heading);
    }
  });
  return toc;
}
