import SectionTitle from "../Common/SectionTitle";
import AboutSectionOne from "./AboutSectionOne";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="px-[1rem] pt-16 md:py-20 lg:py-28 bg-base-200"
      >
        <div className="container">
          <SectionTitle title="About Me!" paragraph="" center />
          <AboutSectionOne />
        </div>
      </section>
    </>
  );
};

export default About;
