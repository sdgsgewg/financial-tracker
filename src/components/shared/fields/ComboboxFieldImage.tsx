import ImageWrapper from "../ImageWrapper";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
}

const ComboboxFieldImage = ({ src, alt }: Props) => {
  return (
    <ImageWrapper
      src={src}
      alt={alt}
      className={{
        container: cn("shadow-sm", "w-6 h-6 rounded-sm"),
        image: cn("w-full h-full", "object-cover"),
      }}
    />
  );
};

export default ComboboxFieldImage;
