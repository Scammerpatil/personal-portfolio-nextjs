import mongoose, { Schema } from "mongoose";

// Define the Programming Language schema
const programmingLanguageSchema = new Schema({
  languageName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imgURL: { type: String, required: true },
  levelOfExpertise: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
    required: true,
  },
  tag: {
    type: String,
    enum: [
      "Programming",
      "WebDev",
      "Framework",
      "Tools",
      "Database",
      "MachineLearning",
      "MobileDev",
    ],
    required: true,
  },
  uploadedAt: { type: Date, default: Date.now },
});

const ProgrammingLanguage =
  mongoose.models.ProgrammingLanguage ||
  mongoose.model("ProgrammingLanguage", programmingLanguageSchema);

export default ProgrammingLanguage;
