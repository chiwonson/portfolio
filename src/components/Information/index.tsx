import React from "react";

import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import { DataProps } from "@/types";
import profileImage from "../../public/images/information/myphoto.jpg";

// SectionTitle 컴포넌트는 현재 사용되지 않으므로 제거합니다
// const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <h2>{children}</h2>;
// };

// `Information` 컴포넌트의 prop 타입을 명시합니다
interface InformationProps {
  information: DataProps["information"];
}

const Information: React.FC<InformationProps> = ({ information }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        {/* 이미지 부분 */}
        <img
          src="/images/information/myphoto.jpg"
          alt={`${information.name}의 프로필 이미지`}
          className="w-32 h-32 rounded-full object-cover"
        />


        {/* 텍스트 부분 */}
        <h1 className="leading-[1.15]">
          안녕하세요.
          <br /> PLM개발자{" "}
          <span className="text-PRIMARY font-semibold">{information.name}</span>
          입니다.
        </h1>
      </div>

      {/* 연락처 및 기타 내용 */}
      <div className="flex gap-1">
        {information.contact?.map((contact) => (
          <ContactItem
            key={contact.id}
            className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
            {...contact}
          >
            {contact.name}
          </ContactItem>
        ))}
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
