import SectionTitle from '../components/SectionTitle';
import SocialIcons from '../components/SocialIcons';

const AboutSection = () => (
  <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="about">
    <div className="container">
      {/* Mobile title */}
      <SectionTitle title="About Me" className="lg:hidden" />

      <div className="md:grid grid-cols-12 items-center">
        {/* Left: photo */}
        <div className="col-span-4 sm:text-center md:text-left">
          <div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white/20 sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
            <img
              src="https://placehold.co/350x470/1a1a2e/ffffff?text=Suresh+Jakhar"
              alt="Suresh Jakhar"
              width={350}
              height={470}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right: bio */}
        <div className="col-start-6 col-end-13">
          <div className="bio mt-5 sm:mt-10 md:mt-0">
            {/* Desktop title */}
            <SectionTitle title="About Me" className="hidden lg:block" />

            <div className="bio-text space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm a Software Engineer and AWS Certified Machine Learning Engineer with hands-on
                experience building full-stack applications and ML-based systems. Currently pursuing
                a B.Tech in Computer Science at Bennett University (Expected August 2027).
              </p>
              <p>
                I enjoy working across the stack — from designing efficient REST APIs and database
                schemas to building intuitive React frontends. I have a particular interest in search
                systems, retrieval-augmented generation (RAG), and data-driven applications.
              </p>
              <p>
                I secured First Rank in Senior Secondary at the District level with 98.40%, and hold
                certifications from AWS and IBM in machine learning and data science.
              </p>

              {/* Education highlights */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-gray-800">B.Tech, Computer Science</span>
                  <span className="text-gray-500">Bennett University · Expected Aug 2027</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-gray-800">Senior Secondary (XII)</span>
                  <span className="text-gray-500">JPP Jain International Sr Sec School · 98.40%</span>
                </div>
              </div>
            </div>

            <SocialIcons className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
