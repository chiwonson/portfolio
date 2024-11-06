import SectionTitle from "../SectionTitle";
import { SkillProps } from "@/types";

// 기술을 카테고리별로 그룹화하는 함수
const groupByCategory = (skills: SkillProps[]) => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillProps[]>);
};

const Skill = ({ skills }: { skills: SkillProps[] }) => {
  // 기술을 카테고리별로 그룹화
  const groupedSkills = groupByCategory(skills);

  return (
    <div>
      <SectionTitle>Skills</SectionTitle>

      {Object.keys(groupedSkills).map((category, index) => (
        <div key={category} className="mb-12">
          {/* 카테고리 이름을 표시 */}
          <h2 className="text-2xl font-bold mb-6">{category}</h2>

          {/* 카테고리 내의 기술들을 2개씩 한 행에 배치 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groupedSkills[category].map((skill) => (
              <div key={skill.id} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{skill.name}</h3>

                {/* 설명 부분 */}
                {skill.description && (
                  <blockquote className="whitespace-pre-wrap text-sm leading-snug">
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

          {/* 카테고리들 사이에 구분선을 추가 */}
          {index < Object.keys(groupedSkills).length - 1 && (
            <div className="category-divider"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Skill;
