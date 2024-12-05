import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({
    year,
    degree,
    college,
    info,
  }: {
    year: string;
    degree: string;
    college: string;
    info: string;
  }) => (
    <p className="mb-5 text-lg font-medium text-body-color">
      <span className="flex mb-4">
        <span className="mr-4 flex h-[30px] w-[40px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>{" "}
        <strong>{year}</strong> <br />
      </span>
      <span className="mb-2">{degree}</span>
      <br />
      <span className=" text-lg">{college}</span> <br />
      <span className="text-sm">{info}</span>
    </p>
  );

  return (
    <section id="about" className="">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex lg:flex-row items-center md:flex-col">
            <div className="w-full px-4 lg:w-2/3">
              <SectionTitle
                title="Education"
                paragraph="A snapshot of my academic journey, highlighting key milestones and the institutions where I've gained my knowledge and skills."
                mb="44px"
              />
              <div className="mb-12 lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] w-full flex flex-wrap">
                  <div className="w-full px-3 sm:w-full md:w-1/2 lg:w-full xl:w-1/2">
                    <List
                      year="2021 - Present"
                      degree="B.Tech Computer Engineering"
                      college="R. C. Patel Institute of Technology, Shirpur"
                      info="Pursuing a degree in Computer Engineering, I am dedicated to expanding my knowledge and skills in the field of technology and engineering, laying the foundation for a promising future."
                    />
                    <List
                      year="2018 - 2019"
                      degree="SSC"
                      college="Shri N.T Mundada Global View School, Amalner"
                      info="Completed my 10th grade education at Shri N.T. Mundada Global View School, marking an important milestone in my academic journey."
                    />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List
                      year="2019 - 2021"
                      degree="HSC in Electronics and Telecommunication"
                      college="Pratap College, Amalner"
                      info="Holding an HSC degree in Electronics and Telecommunication Engineering (ENTC), I'm eager to further my education and expertise in this field."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 py-5 lg:w-1/3">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  <li>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">2018 - 2019</time>
                      <div className="text-lg font-black">SSC</div>
                    </div>
                    <hr className="bg-primary" />
                  </li>
                  <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end mb-10">
                      <time className="font-mono italic">2019 - 2021</time>
                      <div className="text-lg font-black">
                        HSC in Electronics and Telecommunication
                      </div>
                    </div>
                    <hr className="bg-primary" />
                  </li>
                  <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">2021 - Present</time>
                      <div className="text-lg font-black">
                        B.Tech Computer Engineering
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
