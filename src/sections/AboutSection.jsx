// Use a placeholder for the about photo since no real image is available yet
// Replace about-placeholder with your own photo at src/assets/images/about-photo.jpg
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
              src="https://placehold.co/350x470/34495E/ffffff?text=Your+Photo"
              alt="About me"
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
                For instance, whenever I go back to the guest house during the morning to copy out the
                contract, these gentlemen are always still sitting there eating their breakfasts. I
                ought to just try that with my boss; I&apos;d get kicked out on the spot.
              </p>
              <p>
                But who knows, maybe that would be the best thing for me. He&apos;d fall right off
                his desk! And it&apos;s a funny sort of business to be sitting up there at your desk,{' '}
                <br />
                talking down at your subordinates. I ought to just try that with my boss;
                I&apos;d get kicked out on the spot. But who knows, maybe that would be the best
                thing for me. He&apos;d fall right off his desk! And it&apos;s a funny sort of
                business to be sitting up there at your desk, talking down at your subordinates.
              </p>
            </div>

            <SocialIcons className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
