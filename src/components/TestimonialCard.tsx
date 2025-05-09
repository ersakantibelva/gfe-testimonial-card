import { TestimonialCardProps } from "../types";

const TestimonialCard = ({ imgSrc, name, username, description }: TestimonialCardProps) => {
  return (
    <div className="w-[340px] bg-white p-6 rounded-lg flex flex-col gap-4 text-neutral-600 drop-shadow-xs">
      <div className="flex gap-4">
        <img width={48} height={48} src={imgSrc} alt="avatar" />
        <div className="max-w-[240px]">
          <p className="text-lg text-neutral-900 font-semibold truncate">{name}</p>
          <p className="text-sm">@{username}</p>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default TestimonialCard;
