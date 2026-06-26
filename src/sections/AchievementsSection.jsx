import SectionTitle from '../components/SectionTitle';
import { BsAwardFill } from 'react-icons/bs';

const awards = [
  {
    title: 'AWS Certified Machine Learning Engineer — Associate (Score: 969/1000)',
    link: 'https://www.credly.com/users/suresh-jakhar',
  },
  {
    title: 'Open-Source Contributions — Merged a React rendering fix to github.com/kubetail-org and added UI component test coverage to github.com/shep-ai.',
    link: 'https://github.com/kubetail-org',
  },
  {
    title: 'District First Rank — Senior Secondary (Class XII) board examination.',
    link: null,
  },
];

const AchievementsSection = () => (
  <section className="pt-20 pb-[100px] bg-[#0a0a0a]" id="achievements">
    <div className="container">
      <SectionTitle title="Achievements" isLight={true} />

      <div className="mt-8 max-w-3xl">
        

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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
