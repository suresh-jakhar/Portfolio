import SectionTitle from '../components/SectionTitle';
import SocialIcons from '../components/SocialIcons';
import CircularGallery from '../components/CircularGallery';
import Hammer from '../components/icons/Hammer';
import MindSpace from '../components/icons/MindSpace';
import MindMap from '../components/icons/MindMap';
import BuildTool from '../components/icons/BuildTool';
import Details from '../components/icons/Details';
import Backend from '../components/icons/Backend';
import Iteration from '../components/icons/Iteration';
import Problem from '../components/icons/Problem';
import WorkSatisfaction from '../components/icons/WorkSatisfaction';

import DecayCard from '../components/DecayCard';
import awsCert from '../assets/images/aws_ml_associate.png';

const AboutSection = () => (
  <section className="bg-[#0a0a0a] pt-4 pb-0 text-white overflow-hidden" id="about">
    <div className="container px-4 sm:px-6 lg:px-8 max-w-[1400px]">
      {/* Bio section */}
      <div className="md:grid grid-cols-12 items-center gap-8 lg:gap-16">
        {/* Bio Text - Shifted Left */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-1">
          <div className="bio mt-5 sm:mt-10 md:mt-0">
            {/* Desktop title */}
            <SectionTitle title="About Me" className="hidden lg:block mb-6" isLight={true} />

            <div className="bio-text space-y-6 text-gray-300 leading-relaxed text-center lg:text-left">
              <p className="text-lg md:text-xl font-medium">
                As a Software Engineer, my interests include the development of highly scalable web applications and machine learning-based software systems. My skills span from designing highly optimized back-end APIs and databases to developing front-end UIs
              </p>
              <p className="hidden md:block text-base md:text-lg opacity-80">
                I am currently enrolled in B.Tech in Computer Science Engineering and have experience with cutting-edge web technologies and application-based software solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - AWS Certificate with Decay Effect */}
        <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative group">
            {/* Glow effect background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <DecayCard 
              width={280} 
              height={180} 
              image={awsCert}
              baseFrequency={0.015}
              numOctaves={6}
              maxDisplacement={200}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Full-width Circular Gallery */}
    <div className="-mt-8 relative w-full h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden">
      <CircularGallery 
        bend={2} 
        textColor="#ffffff" 
        borderRadius={0.05} 
        scrollEase={0.02}
        items={[
          { text: 'Breaking Things', icon: Hammer, description: ['I like taking complex systems', 'apart until they feel', 'simple and logical'] },
          { text: 'Learning Style', icon: MindSpace, description: ['I don’t move on until I truly', 'understand how something', 'works underneath'] },
          { text: 'Building Habit', icon: BuildTool, description: ['I prefer creating real projects', 'over just consuming', 'tutorials'] },
          { text: 'Backend Curiosity', icon: Backend, description: ['I’m always interested in', 'what happens behind', 'the UI'] },
          { text: 'Iteration Loop', icon: Iteration, description: ['I keep refining things until', 'they feel clean', 'and reliable'] },
          { text: 'Problem First', icon: Problem, description: ['I focus more on solving', 'the problem than chasing', 'tools or trends'] },
          { text: 'Work Satisfaction', icon: WorkSatisfaction, description: ['The best part is seeing', 'something I built actually', 'work in real use'] },
          { text: 'Detail Oriented', icon: Details, description: ['I notice small things early', 'so they don’t become', 'big problems later'] },
          { text: 'System View', icon: MindMap, description: ['I try to see how everything', 'connects, not just the', 'part I’m building'] }
        ]}
      />
    </div>
  </section>
);

export default AboutSection;
