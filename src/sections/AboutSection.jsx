import SectionTitle from '../components/SectionTitle';
import SocialIcons from '../components/SocialIcons';
import CircularGallery from '../components/CircularGallery';

const AboutSection = () => (
  <section className="bg-white pt-16 pb-[60px] lg:pb-[125px]" id="about">
    <div className="container">
      {/* Bio section */}
      <div className="md:grid grid-cols-12 items-center">
        {/* Centered bio */}
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <div className="bio mt-5 sm:mt-10 md:mt-0">
            {/* Desktop title */}
            <SectionTitle title="About Me" className="hidden lg:block" />

            <div className="bio-text space-y-4 text-gray-700 leading-relaxed text-center lg:text-left">
              <p>
                As a Software Engineer, my interests include the development of highly scalable web applications and machine learning-based software systems. My skills span from designing highly optimized back-end APIs and databases to developing front-end UIs
              </p>
              <p>
                I am currently enrolled in B.Tech in Computer Science Engineering and have experience with cutting-edge web technologies and application-based software solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Full-width Circular Gallery */}
    <div className="-mt-8 relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
      <CircularGallery bend={2} textColor="#1a1a1a" borderRadius={0.05} scrollEase={0.02} />
    </div>
  </section>
);

export default AboutSection;
