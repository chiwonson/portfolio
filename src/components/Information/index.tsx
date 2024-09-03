import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import profileImage from "/images/information/myphoto.JPG";


import { DataProps } from "@/types";

const information = {
  name: "손치원",
};

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        {/* 이미지 부분 */}
        <img
          src="/images/information/myphoto.JPG"
          alt={`${information.name}의 프로필 이미지`}
          className="w-32 h-32 rounded-full object-cover"
        />

        {/* 텍스트 부분 */}
        <h1 className="leading-[1.15]">
          안녕하세요.
          <br /> 신입개발자{" "}
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
