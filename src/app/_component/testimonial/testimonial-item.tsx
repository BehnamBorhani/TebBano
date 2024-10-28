import Image from "next/image";
import { TestimonialProps } from "./testimonial.types";

const TestimonialItem: React.FC<TestimonialProps> = ({
  testimonial: { image, name, skills, description },
}) => {
  return (
    <div className="rounded-2xl border border-mayBe-800 p-4 text-sm ">
      <div className="flex items-center gap-2">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          width="48"
          height="48"
          className="pointer-events-none rounded-full"
        />
        <div className="flex flex-col items-start font-semibold">
          <div className="text-icon-700">{name}</div>
          <div className="text-mayBe-800">{skills}</div>
        </div>
      </div>
      <p className="mt-3 leading-6 ">{description}</p>
    </div>
  );
};

export default TestimonialItem;
