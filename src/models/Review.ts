import mongoose, { mongo, Schema } from "mongoose";
interface ReviewInterface {
  name: string;
  email: string;
  github: string;
  content: string;
  designation: string;
  image: string;
  star: number;
}

const ReviewSchema = new Schema<ReviewInterface>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  github: { type: String, unique: true, required: true },
  designation: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  star: { type: Number, required: true },
});

const Review =
  mongoose.models.Review ||
  mongoose.model<ReviewInterface>("Review", ReviewSchema);

export default Review;
