import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section5 from './section5';
import Section6 from './section6';
import Section7 from './section7';
import WhereCreators from './where-creators';
import WhyCreators from './why-creators';
import AvatarIpSection from './avatar-ip';
import FAQSection from './faq';

export default function Main() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <AvatarIpSection />
      <WhyCreators />
      <WhereCreators />
      <Section5 />
      <Section6 />
      <FAQSection />
      <Section7 />
    </>
  );
}
