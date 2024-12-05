import { Feature } from "@/types/feature";
import axios from "axios";
import SingleFeature from "./SingleFeature";

let languagePromise: Promise<Feature[]> | null = null;
let cachedLanguages: Feature[] | null = null;

const fetchLanguages = () => {
  if (cachedLanguages) {
    return cachedLanguages;
  }
  if (!languagePromise) {
    languagePromise = axios.get("/api/getLanguages").then((res) => {
      cachedLanguages = res.data;
      return res.data;
    });
  }
  throw languagePromise;
};

const FeatureMapping = ({ filter }: { filter: string }) => {
  const language = fetchLanguages();
  return (
    <>
      {language.length > 0 &&
        language
          .filter((feature) => feature.tag === filter)
          .map((feature) => (
            <>
              <SingleFeature key={feature._id} feature={feature} />
            </>
          ))}
    </>
  );
};

export default FeatureMapping;
