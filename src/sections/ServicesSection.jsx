import services from '../data/services';
import ServiceCard from '../components/ServiceCard';
import WaveDivider from '../components/WaveDivider';

const ServicesSection = () => (
  <section className="service-area relative pb-[100px] lg:pb-[200px]" id="services">
    <div className="container md:grid md:grid-cols-3 lg:gap-7">
      {services.map((s) => (
        <ServiceCard key={s.id} title={s.title} desc={s.desc} Icon={s.Icon} color={s.color} />
      ))}
    </div>
    <WaveDivider fillColor="#F9FAFB" />
  </section>
);

export default ServicesSection;
