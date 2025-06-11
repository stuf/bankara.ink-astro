export interface Heading {
  text: string;
  slug: string;
  depth: number;
  subheadings: Heading[];
}
