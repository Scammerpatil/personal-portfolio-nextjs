import mongoose, { Schema } from "mongoose";

interface ContactInformation {
  name: string;
  titles: { title: string }[];
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
}

interface InternshipExperience {
  company: string;
  location: string;
  role: string;
  duration: string;
  details: string[];
}

interface Education {
  institution: string;
  location: string;
  degree: string;
  CGPA?: string;
  percentage?: string;
  duration: string;
}

interface CertificationsAndTraining {
  certifications: string[];
  training: string[];
}

interface Skills {
  programmingLanguagesAndDatabases: string[];
  webDevelopmentAndFrameworks: string[];
  toolsAndTechnologies: string[];
  softSkills: string[];
}

interface Achievements {
  description: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

const contactInformationSchema = new Schema({
  name: { type: String, required: true },
  titles: [{ title: { type: String, required: true } }],
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  links: {
    LinkedIn: { type: String, required: true },
    GitHub: { type: String, required: true },
    PersonalPortfolio: { type: String, required: true },
    CodeChef: { type: String, required: true },
    LeetCode: { type: String, required: true },
  },
});

// Internship Experience Schema
const internshipExperienceSchema = new Schema({
  company: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, required: true },
  duration: { type: String, required: true },
  details: [{ type: String, required: true }],
});

// Education Schema
const educationSchema = new Schema({
  institution: { type: String, required: true },
  location: { type: String, required: true },
  degree: { type: String, required: true },
  CGPA: { type: String }, // Optional
  percentage: { type: String }, // Optional
  duration: { type: String, required: true },
});

// Certifications and Training Schema
const certificationsAndTrainingSchema = new Schema({
  certifications: [{ type: String, required: true }],
  training: [{ type: String, required: true }],
});

// Skills Schema
const skillsSchema = new Schema({
  programmingLanguagesAndDatabases: [{ type: String, required: true }],
  webDevelopmentAndFrameworks: [{ type: String, required: true }],
  toolsAndTechnologies: [{ type: String, required: true }],
  softSkills: [{ type: String, required: true }],
});

// Achievements Schema
const achievementsSchema = new Schema({
  achievements: [{ type: String, required: true }],
});

// Project Schema
const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String, required: true }],
});

// Tech Stack Schema
const techStackSchema = new Schema({
  General: {
    projects: [projectSchema],
  },
  FrontendDeveloper: {
    projects: [projectSchema],
  },
  BackendDeveloper: {
    projects: [projectSchema],
  },
  FullStackWebDeveloper: {
    projects: [projectSchema],
  },
  NextJSDeveloper: {
    projects: [projectSchema],
  },
  JavaFullStackDeveloper: {
    projects: [projectSchema],
  },
  SpringFrameworkDeveloper: {
    projects: [projectSchema],
  },
  PythonDjangoDeveloper: {
    projects: [projectSchema],
  },
});

interface TechStack {
  General: { projects: Project[] };
  FrontendDeveloper: { projects: Project[] };
  BackendDeveloper: { projects: Project[] };
  FullStackWebDeveloperMERN: { projects: Project[] };
  NextJSDeveloper: { projects: Project[] };
  JavaFullStackDeveloper: { projects: Project[] };
  SpringFrameworkDeveloper: { projects: Project[] };
  PythonDjangoDeveloper: { projects: Project[] };
}

interface ResumeSchema {
  contactInformation: ContactInformation;
  internshipExperience: InternshipExperience[];
  education: Education[];
  certificationsAndTraining: CertificationsAndTraining;
  skills: Skills;
  achievements: string[];
  techstack: TechStack;
}

const resumeSchema = new Schema({
  contactInformation: contactInformationSchema,
  internshipExperience: [internshipExperienceSchema],
  education: [educationSchema],
  certificationsAndTraining: certificationsAndTrainingSchema,
  skills: skillsSchema,
  achievements: achievementsSchema,
  techstack: techStackSchema,
});

const Resume = mongoose.models.Resume || mongoose.model("Resume", resumeSchema);
export default Resume;
