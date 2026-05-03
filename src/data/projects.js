const projects = [
  {
    id: 1,
    title: 'Quitio',
    subtitle: 'Knowledge Retrieval System',
    categories: ['ml', 'fullstack'],
    tech: ['Node.js', 'FastAPI', 'PostgreSQL', 'pgvector', 'React', 'Python'],
    thumb: 'https://placehold.co/600x400/1a1a2e/a78bfa?text=Quitio',
    githubLink: 'https://github.com/suresh-jakhar/Quitio',
    bullets: [
      'Store and search documents (PDFs, notes, links) using embeddings and keyword search',
      'Combined vector search (pgvector) with BM25 keyword search to improve result quality',
      'Graph-based approach with PageRank and clustering to connect related content',
      'Multi-step query handling for complex search queries',
      'Batched DB queries to eliminate N+1 problems',
      'Background processing for embedding generation to keep API responses fast',
    ],
  },
  {
    id: 2,
    title: 'CourseCommons',
    subtitle: 'E-learning Platform',
    categories: ['fullstack', 'web'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    thumb: 'https://placehold.co/600x400/0f2027/38bdf8?text=CourseCommons',
    githubLink: null,
    bullets: [
      'Full-stack platform with separate roles for instructors and learners',
      'JWT-based auth with role-based access control and protected routes',
      'Enrollment system supporting free and paid courses with conditional flows',
      'Progress tracking using atomic upsert operations to avoid race conditions',
      'Batch DB fetching with optimized query patterns for API efficiency',
      'Modular route-based backend architecture for maintainability',
    ],
  },
];

export default projects;
