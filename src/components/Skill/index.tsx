import SectionTitle from "../SectionTitle";
import { SkillProps } from "@/types";

const Skill = ({ skills }: { skills: SkillProps[] }) => {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-col gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{skill.name}</h3>

            {/* 설명 부분 */}
            {skill.description && (
              <blockquote className="whitespace-pre-wrap">
                {skill.description}
              </blockquote>
            )}

            {/* 기술 태그 부분 */}
            {skill.stack && skill.stack.length > 0 && (
              <div className="flex gap-1 flex-wrap">
                {skill.stack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-BLACK dark:bg-white py-[2px] px-1.5 rounded-md text-xs font-medium font-mono whitespace-nowrap text-white dark:text-BLACK"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
