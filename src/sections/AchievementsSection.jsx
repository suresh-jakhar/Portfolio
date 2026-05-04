import SectionTitle from '../components/SectionTitle';
import { BsAwardFill } from 'react-icons/bs';

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

const AchievementsSection = () => (
  <section className="pt-20 pb-[100px] bg-[#0a0a0a]" id="achievements">
    <div className="container">
      <SectionTitle title="Achievements" isLight={true} />

      <div className="mt-8 max-w-3xl">
        <p className="text-gray-400 mb-10 leading-relaxed">
          Throughout my academic and professional journey, I've focused on continuous learning and excellence. 
          Here are some of the key certifications and awards I've earned.
        </p>

        <ul className="space-y-6">
          {awards.map((award) => (
            <li key={award.title} className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-white/10 shadow-sm transition-transform hover:-translate-y-1">
              <div className="bg-white/5 p-3 rounded-full border border-white/10">
                <BsAwardFill className="text-amber-500 text-2xl" />
              </div>
              <div>
                {award.link ? (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-bold text-white hover:text-white/80 hover:underline transition-colors block"
                  >
                    {award.title}
                  </a>
                ) : (
                  <span className="text-lg font-bold text-white block">{award.title}</span>
                )}
                <span className="text-sm text-gray-500 uppercase tracking-widest mt-1 block">
                  Credential / Honor
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
