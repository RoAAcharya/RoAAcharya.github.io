export type Venue = {
  label: string;
  href?: string;
  kind?: "conference" | "journal" | "preprint" | "other";
};

export type PublicationStatus = "preprint" | "published";

export type Publication = {
  title: string;
  authors: string[];
  year: number;
  status: PublicationStatus;
  venues?: Venue[];
  links?: {
    label: string;
    href: string;
  }[];
  abstract?: string;
};

export const publications: Publication[] = [
  {
    title: "Flips in colorful triangulations",
    authors: ["Rohan Alfred Acharya", "Torsten Mütze", "Francesco Verciani"],
    year: 2024,
    status: "published",
    venues: [
      {
        label: "JoCG 2025",
        href: "https://jocg.org/index.php/jocg/article/view/4982",
        kind: "journal",
      },
      {
        label: "GD 2024",
        href: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.GD.2024.30",
        kind: "conference",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2406.03783",
        kind: "preprint",
      },
    ],
    links: [
      { label: "JoCG", href: "https://jocg.org/index.php/jocg/article/view/4982" },
      { label: "GD", href: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.GD.2024.30" },
      { label: "arXiv", href: "https://arxiv.org/abs/2406.03783" },
    ],
    abstract: "The associahedron is the graph G_N that has as nodes all triangulations of a convex N-gon, and an edge between any two triangulations that differ in a flip operation. A flip removes an edge shared by two triangles and replaces it by the other diagonal of the resulting 4-gon. In this paper, we consider a large collection of induced subgraphs of G_N obtained by Ramsey-type colorability properties. Specifically, coloring the points of the N-gon red and blue alternatingly, we consider only colorful triangulations, namely triangulations in which every triangle has points in both colors, i.e., monochromatic triangles are forbidden. The resulting induced subgraph of G_N on colorful triangulations is denoted by F_N. We prove that F_N has a Hamilton cycle for all N ≥ 8, resolving a problem raised by Sagan, i.e., all colorful triangulations on N points can be listed so that any two cyclically consecutive triangulations differ in a flip. In fact, we prove that for an arbitrary fixed coloring pattern of the N points with at least 10 changes of color, the resulting subgraph of G_N on colorful triangulations (for that coloring pattern) admits a Hamilton cycle. We also provide an efficient algorithm for computing a Hamilton path in F_N that runs in time O(1) on average per generated node. This algorithm is based on a new and algorithmic construction of a tree rotation Gray code for listing all n-vertex k-ary trees that runs in time O(k) on average per generated tree.",
  },
  {
    title: "Lookahead Games and Efficient Determinisation of History-Deterministic Büchi Automata",
    authors: ["Rohan Alfred Acharya", "Marcin Jurdziński", "Aditya Prakash"],
    year: 2024,
    status: "published",
    venues: [
      {
        label: "ICALP 2024",
        href: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ICALP.2024.124",
        kind: "conference",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2404.17530",
        kind: "preprint",
      },
    ],
    links: [
      { label: "ICALP", href: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ICALP.2024.124" },
      { label: "arXiv", href: "https://arxiv.org/abs/2404.17530" },
    ],
    abstract: "Our main technical contribution is a polynomial-time determinisation procedure for history-deterministic Büchi automata, which settles an open question of Kuperberg and Skrzypczak, 2015. A key conceptual contribution is the lookahead game, which is a variant of Bagnol and Kuperberg’s token game, in which Adam is given a fixed lookahead. We prove that the lookahead game is equivalent to the 1-token game. This allows us to show that the 1-token game characterises history-determinism for semantically-deterministic Büchi automata, which paves the way to our polynomial-time determinisation procedure.",
  },
  {
    title: "Complexity Results Coming To You Soon!",
    authors: ["Rohan Alfred Acharya"],
    year: 2026,
    status: "preprint",
    venues: [
      
    ],
    links: [],
  },
];