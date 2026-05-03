import heroImg from '../assets/images/suresh-hero.jpg';
import WaveDivider from '../components/WaveDivider';

const HeroSection = () => (
  <section
    id="hero"
    style={{ backgroundImage: `url(${heroImg})` }}
    className="relative bg-cover bg-no-repeat bg-[center_top] h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center"
  >
    <div className="container flex justify-end">
      <div className="mt-8 font-light text-right pr-4 md:pr-10">
        <h1 className="text-white font-light text-3xl sm:text-[45px] md:text-[55px] leading-none">
          I'M SURESH JAKHAR
        </h1>
        <h2 className="text-white font-light text-md sm:text-lg tracking-[0.25rem] mt-2 sm:mt-4">
  SOFTWARE ENGINEER | AI/ML & WEB
</h2>
      </div>
    </div>
    <WaveDivider className="hidden md:block" fillColor="#ffffff" />
  </section>
);

export default HeroSection;
