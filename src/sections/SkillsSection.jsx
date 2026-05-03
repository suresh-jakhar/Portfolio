import SectionTitle from '../components/SectionTitle';
import { BsAwardFill } from 'react-icons/bs';

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

const awards = [
  {
    title: 'AWS Certified Machine Learning Engineer — Associate',
    link: 'https://www.credly.com/badges/b60c0951-deaa-4551-ba0b-9d92211d5aff/public_url',
  },
  {
    title: 'IBM Statistics for Data Science with Python',
    link: 'https://www.credly.com/badges/fecb0725-c78b-4588-a66c-084c566877f3/public_url',
  },
  {
    title: 'First Rank in Senior Secondary at District Level',
    link: null,
  },
];

const SkillsSection = () => (
  <section className="pt-6 pb-[80px] bg-white" id="skills">
    <div className="container">
      <SectionTitle title="Skills &amp; Awards" />

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {skills.map((group) => (
          <div key={group.category} className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${group.color}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Awards */}
      <div className="mt-12">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-4">
          Awards &amp; Certifications
        </h3>
        <ul className="space-y-3">
          {awards.map((award) => (
            <li key={award.title} className="flex items-start gap-3">
              <BsAwardFill className="mt-0.5 text-amber-500 shrink-0 text-lg" />
              {award.link ? (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-black hover:underline transition-colors"
                >
                  {award.title}
                </a>
              ) : (
                <span className="text-gray-700">{award.title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default SkillsSection;
