export type Feature = {
  _id: number;
  icon: JSX.Element;
  languageName: string;
  description: string;
  imgURL?: string;
  levelOfExpertise?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  tag?:
    | "Programming"
    | "WebDev"
    | "Framework"
    | "MachineLearning"
    | "MobileDev"
    | "Tools";
  uploadedAt?: Date;
};
