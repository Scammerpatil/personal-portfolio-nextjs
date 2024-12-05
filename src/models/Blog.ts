import mongoose, { model, Schema } from "mongoose";

interface IBlog extends Document {
  title: string;
  paragraph: string;
  author: string;
  github: string;
  tags: string[];
  publishDate: Date;
  slug: string;
  imageURL: string;
}

const BlogSchema: Schema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  tags: {
    type: [String],
    default: [],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  imageURL: {
    type: String,
    default: "",
  },
  publishDate: {
    type: Date,
    default: Date.now(),
  },
});

const Blog = mongoose.models.Blog || model<IBlog>("Blog", BlogSchema);

export default Blog;
