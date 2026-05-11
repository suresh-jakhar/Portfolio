const projects = [
  {
    id: 1,
    title: 'Quitio',
    subtitle: 'Graph-Based Content Clustering & Retrieval System',
    categories: ['Web', 'AI-ML'],
    tech: ['Python', 'FastAPI', 'LangChain', 'Sentence Transformers', 'NetworkX', 'pgvector', 'React', 'Node.js'],
    points: [
      'Built a system to organize content (docs, notes, links) into connected topics using sentence embeddings',
      'Constructed a similarity-based graph (embeddings + metadata) and used Louvain clustering to group related content',
      'Combined vector search (pgvector) with BM25 keyword search for improved retrieval',
      'Developed a RAG-based query engine using LangChain with semantic similarity and multi-hop graph traversal',
      'Represented content as a knowledge graph and applied PageRank to identify important topics'
    ],
    thumb: 'https://placehold.co/800x800/1a1a2e/1a1a2e',
    githubLink: 'https://github.com/suresh-jakhar/Quitio',
    liveLink: null
  },
  {
    id: 2,
    title: 'Finance Agent',
    subtitle: 'Finance Email Follow-up Agent',
    categories: ['AI-ML'],
    tech: ['Python', 'LangChain', 'LangGraph', 'LLM', 'APScheduler', 'Streamlit'],
    points: [
      'Built an agent to automate invoice follow-ups using a 5-stage escalation workflow based on overdue duration',
      'Developed a deterministic processing pipeline using LangGraph and Python orchestration to process invoices sequentially without skips',
      'Integrated Groq LLaMA 3.1 LLM for generating personalized collection emails with structured prompt templates and validation checks',
      'Implemented security guardrails including regex-based prompt sanitization, PII masking, and output validation',
      'Built automated scheduling workflows using APScheduler and developed a Streamlit dashboard for monitoring invoice aging and audit logs'
    ],
    thumb: 'https://placehold.co/800x800/0f172a/0f172a',
    githubLink: 'https://github.com/suresh-jakhar/finance-email-followup-agent',
    liveLink: null
  },
  {
    id: 3,
    title: 'Machine Translation',
    subtitle: 'Transformer-based English–French Translator',
    categories: ['AI-ML'],
    tech: ['Python', 'PyTorch', 'SentencePiece', 'Flask', 'Hugging Face', 'GitHub Actions', 'pytest'],
    points: [
      'Built a Transformer-based NMT model using PyTorch for English–French translation',
      'Designed a SentencePiece tokenizer for subword tokenization and handling out-of-vocabulary words',
      'Applied training techniques including learning rate scheduling, AdamW, and gradient accumulation',
      'Developed a full pipeline for tokenization, model inference, and decoding',
      'Deployed a Flask API for serving translations with testing (pytest) and CI/CD via GitHub Actions'
    ],
    thumb: 'https://placehold.co/800x800/0f2027/0f2027',
    githubLink: 'https://github.com/suresh-jakhar/seq2seq-neural-machine-translation',
    liveLink: 'https://huggingface.co/spaces/sureshjakhar/seq2seq-neural-machine-translation'
  },
  {
    id: 4,
    title: 'Course-Commons',
    subtitle: 'E-learning Platform',
    categories: ['Web'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    points: [
      'Built a full-stack platform with separate roles for instructors and learners, supporting course creation, enrollment, and progress tracking',
      'Implemented JWT-based auth with role-based access control for secure API access',
      'Designed enrollment system handling conditional flows and validation',
      'Implemented progress tracking using atomic database operations (upsert) to avoid race conditions and ensure data consistency',
      'Reduced redundant db queries by using batch fetching and optimized query patterns, improving API efficiency',
      'Structured backend using modular route-based architecture, improving code organization and maintainability'
    ],
    thumb: 'https://placehold.co/800x800/2c3e50/2c3e50',
    githubLink: 'https://github.com/suresh-jakhar/CourseCommons',
    liveLink: null
  },
  {
    id: 5,
    title: 'Talk-Time',
    subtitle: 'Real-Time Multi-Room Chat System',
    categories: ['Web'],
    tech: ['React', 'Node.js', 'WebSockets', 'Express', 'PieSocket', 'TypeScript'],
    points: [
      'Built a full-stack real-time chat app using React, Node.js, and WebSockets for low-latency bidirectional messaging',
      'Implemented multi-room architecture with live participant synchronization and persistence',
      'Developed a "Registry Room" pattern with PieSocket for real-time broadcasting of room occupancy across clients',
      'Integrated spatial audio and micro-interactions to enhance UX',
      'Engineered a secure Express backend managing room lifecycles and participant tracking',
      'Optimized state management with TypeScript for robust handling of message feeds and auto-reconnection'
    ],
    thumb: 'https://placehold.co/800x800/1e293b/1e293b',
    githubLink: 'https://github.com/suresh-jakhar/websocket-chat-application',
    liveLink: 'https://chat-room-phi-flax.vercel.app/'
  },
  {
    id: 6,
    title: 'AmEx Analysis',
    subtitle: 'Customer Offer Performance Analysis at American Express',
    categories: ['Data Analysis'],
    tech: ['Python', 'Pandas', 'NumPy', 'Statistical Analysis', 'Business Analytics', 'Jupyter Notebook'],
    points: [
      'Processed and analysed 2 million + AmEx customer offer events, performing large scale cleaning, normalization, and anomaly handling',
      'Engineered engagement, spend, interest, and offer value features to evaluate offer conversion behaviour across categories',
      'Quantified exposure bias using impression and CTR deciles and validated true engagement signals via statistical comparisons',
      'Built customer spend segments and evaluated reward efficiency, offer participation, and email campaign performance per segment',
      'Constructed top converting offer and customer profiles using conversion rate thresholds and channel normalized metrics'
    ],
    thumb: 'https://placehold.co/800x800/1e293b/1e293b',
    githubLink: 'https://github.com/suresh-jakhar/Customer-Offer-Performance-Analysis-at-American-Express',
    liveLink: null
  },
  {
    id: 7,
    title: 'Market Forecasts',
    subtitle: 'Restaurant Seasonality Forecasts',
    categories: ['Data Analysis'],
    tech: ['Python', 'Pandas', 'NumPy', 'Statistical Analysis', 'Data Cleaning', 'Feature Engineering'],
    points: [
      'Cleaned and structured 40,000+ rows of restaurants transaction data using pandas, handling inconsistent and missing values',
      'Aggregated monthly revenue for 230+ restaurants across Australia, calculated seasonality indices',
      'Engineered a seasonality scoring system (1–5) using the coefficient of variation and quantile binning to classify venues by revenue volatility',
      'Forecasted six-month future revenue for all 230+ restaurants using Holt-Winters Exponential Smoothing',
      'Structured Excel outputs with dynamic charts, summarized findings and highlighted venue-specific insights for operations or promotions'
    ],
    thumb: 'https://placehold.co/800x800/020617/020617',
    githubLink: 'https://github.com/suresh-jakhar/Supply-Chain-Analysis',
    liveLink: null
  }
];

export default projects;
