import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'Secondary Education',
    school: 'Jpp jain international school',
    grade: 'Grade : 89.00%',
    year: '2019',
    status: 'COMPLETED'
  },
  {
    degree: 'Senior Secondary (Class XII)',
    school: 'JPP Jain International Sr. Sec. School',
    grade: 'Grade : 98.40%',
    year: '2021',
    status: 'COMPLETED'
  },
  {
    degree: 'B.Tech, Computer Science (Data Science)',
    school: 'Bennett University',
    grade: 'Grade : 7.5 CGPA',
    year: '2027',
    status: 'EXPECTED'
  }
];

const skills = [
  {
    category: 'Languages',
    items: ['Java (Primary)', 'Python', 'TypeScript/JavaScript', 'SQL'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST API Design', 'Microservices Architecture', 'OAuth', 'JWT Authentication'],
  },
  {
    category: 'Frontend',
    items: ['React', 'React Router', 'TanStack Query', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'pgvector', 'Redis', 'Drizzle ORM', 'Database Schema Design & Migrations'],
  },
  {
    category: 'AI/ML',
    items: ['PyTorch', 'scikit-learn', 'LangChain', 'LangGraph', 'Sentence-Transformers', 'RAG', 'Embeddings', 'NetworkX'],
  },
  {
    category: 'Cloud & Tools',
    items: ['AWS', 'Docker', 'Docker Compose', 'Git/GitHub', 'Unit & Integration Testing'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP', 'System Design', 'DBMS', 'Asynchronous Programming'],
  },
];

const Arrow = () => (
  <div className="hidden lg:flex items-center justify-center w-full max-w-[60px]">
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
      <motion.div 
        initial={{ left: '-100%' }}
        animate={{ left: '100%' }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
      />
    </div>
  </div>
);

const EducationSkillsSection = () => (
  <section className="pt-20 pb-20 bg-[#0a0a0a]" id="education">
    <div className="container max-w-[1200px]">
      <SectionTitle title="Education" isLight={true} />

      {/* Education Flow Section */}
      <div className="mb-24 mt-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
          {education.map((edu, index) => (
            <React.Fragment key={edu.degree}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group w-full lg:w-[280px]"
              >
                {/* Bright white shadow effect */}
                <div className="absolute -inset-0.5 bg-white/5 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                
                <div className="relative p-6 bg-[#111] rounded-xl border border-white/5 flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/5 mb-3 mx-auto">
                      <FaGraduationCap className="text-xl text-white/60" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 leading-tight">{edu.degree}</h4>
                    <p className="text-gray-500 text-xs">{edu.school}</p>
                    {edu.status === 'EXPECTED' && (
                      <p className="text-gray-600 text-[10px] mt-1 uppercase tracking-tighter">Expected : {edu.year}</p>
                    )}
                  </div>

                  <div className="mt-2 pt-3 border-t border-white/5 w-full">
                    <span className="text-lg font-bold text-white/90">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </motion.div>
              {index < education.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-24">
        <SectionTitle title="Skills" isLight={true} />
        
        <div className="flex flex-col gap-6 mt-12">
          {skills.map((group, index) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col md:flex-row md:items-center gap-6 group hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-500"
            >
              {/* Category Title */}
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-1 group-hover:text-blue-400 transition-colors">
                  {group.category}
                </h3>
                <div className="h-[2px] w-8 bg-blue-500/20 group-hover:w-12 transition-all duration-500" />
              </div>

              {/* Skill Tags */}
              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg text-xs font-bold bg-white/[0.03] text-gray-400 border border-white/5 hover:bg-white/[0.08] hover:text-white hover:border-white/10 transition-all cursor-default"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSkillsSection;
