interface ResumeDetails {
  contactInformation: {
    name: string;
    titles: [
      {
        title: string;
        description: string;
      }
    ];
    address: string;
    phone: string;
    email: string;
    links: {
      LinkedIn: string;
      GitHub: string;
      PersonalPortfolio: string;
      CodeChef: string;
      LeetCode: string;
    };
  };
  internshipExperience: {
    company: string;
    location: string;
    role: string;
    duration: string;
    details: string[];
  }[];
  education: {
    institution: string;
    location: string;
    degree: string;
    CGPA?: string;
    percentage?: string;
    duration: string;
  }[];
  certificationsAndTraining: {
    certifications: string[];
    training: string[];
  };
  skills: {
    programmingLanguagesAndDatabases: string[];
    webDevelopmentAndFrameworks: string[];
    toolsAndTechnologies: string[];
    softSkills: string[];
  };
  achievements: string[];
  techstack: {
    General: {
      projects: {
        name: string;
        description: string;
        technologies: string[];
      }[];
    };
    [key: string]: {
      projects: {
        name: string;
        description: string;
        technologies: string[];
      }[];
    };
  };
}

export default ResumeDetails;
