
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


interface SkillItemProps {
  name: string;
  description: string;
  imgSrc?: string; // Optional, if there's an image associated with the skill
}

const SkillItem: React.FC<SkillItemProps> = ({ name, description, imgSrc }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center md:items-start">
        {imgSrc && (
          <div className="w-24 h-24">
            <Image
              src={imgSrc}
              width="100"
              height="100"
              alt={name}
              className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid"
            />
          </div>
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
