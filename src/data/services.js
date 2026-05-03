import { FaCode, FaServer, FaBrain } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Full-Stack Development',
    desc: 'Building scalable web applications with React on the frontend and Node.js / FastAPI on the backend, backed by PostgreSQL and MongoDB.',
    Icon: FaCode,
    color: '#4A90D9',
  },
  {
    id: 2,
    title: 'Backend & API Design',
    desc: 'Designing modular REST APIs with role-based access control, JWT auth, atomic DB operations, and optimized query patterns to eliminate N+1 problems.',
    Icon: FaServer,
    color: '#E8A838',
  },
  {
    id: 3,
    title: 'Machine Learning & Search',
    desc: 'Building ML-powered systems using embeddings, BM25, pgvector, RAG pipelines, and graph-based ranking (PageRank) to deliver intelligent search experiences.',
    Icon: FaBrain,
    color: '#6C5CE7',
  },
];

export default services;
