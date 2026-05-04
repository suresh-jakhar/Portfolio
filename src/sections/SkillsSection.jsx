import SectionTitle from '../components/SectionTitle';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Your University Name',
    duration: '2021 — 2025',
    status: 'Current',
  },
  {
    degree: 'Senior Secondary Education',
    institution: 'District Level Schooling',
    duration: '2019 — 2021',
    status: 'Completed (District Rank 1)',
  },
];

const skills = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'SQL'],
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    category: 'Development',
    items: ['React', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    category: 'Machine Learning',
    items: ['scikit-learn', 'Embeddings', 'NLP', 'RAG', 'LangChain', 'Clustering'],
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    category: 'Tools & Infra',
    items: ['Git', 'AWS', 'PostgreSQL', 'MongoDB', 'pgvector'],
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
];

const EducationSkillsSection = () => (
  <section className="pt-6 pb-20 bg-[#0a0a0a]" id="education">
    <div className="container">
      <SectionTitle title="Education & Skills" isLight={true} />

      {/* Education Section */}
      <div className="mb-20">
        <div className="h-4 mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div key={edu.degree} className="flex gap-6 p-6 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-sm transition-transform hover:-translate-y-1">
              <div className="bg-white/5 p-4 rounded-full h-fit border border-white/10">
                <FaGraduationCap className="text-2xl text-white/70" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <p className="text-gray-400 font-medium">{edu.institution}</p>
                <div className="mt-3 flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {edu.duration}
                  </span>
                  <span className="px-2 py-0.5 bg-white/10 text-[10px] font-black uppercase text-gray-300 rounded border border-white/5">
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-8">
          Technical Expertise
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="bg-[#1a1a1a] rounded-xl p-6 shadow-sm border border-white/10 transition-all hover:shadow-md">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs font-bold px-3 py-1.5 rounded-md border bg-white/5 text-white border-white/10 hover:bg-white/10 transition-colors`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSkillsSection;
