import fsPromises from "fs/promises";
import path from "path";

import { NextPage } from "next";
import { DataProps, WorkExperienceProps, ProjectProps, SkillProps } from "@/types";

import Activity from "@/components/Activity";
import Certificate from "@/components/Certificate";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Information from "@/components/Information"; // 올바른 import
import Layout from "@/components/Layout";
import Project from "@/components/Project";
import ResumeTitle from "@/components/ResumeTitle";
// import ScrollProgress from "@/components/ScrollProgress";
import WorkExperience from "@/components/WorkExperience";
//import Award from "@/components/Award";
import Skill from "@/components/Skill";

const Home: NextPage<DataProps> = ({
  resumeTitle,
  information,
  workExperience,
  project,
  activity,
  education,
  certificate,
  award,
  skill,
}) => {
  return (
    <>
      {/* <ScrollProgress /> */}
      <ResumeTitle resumeTitle={resumeTitle} />
      <Layout>
        <Information information={information} /> {/* 올바른 사용 */}
        <Education education={education} />
        <Project project={project} />
        <Skill skills={skill} />
        <WorkExperience workExperience={workExperience} />
        {/* <Activity activity={activity} /> */}
        <Certificate certificate={certificate} />
        {/* <Award award={award} /> */}
      </Layout>
      <Footer contact={information.contact} name={information.name} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const objectData: DataProps = JSON.parse(jsonData);

  const informationWithData = await getImgSrc({
    section: "information",
    item: await getMd({ section: "information", item: { ...objectData.information } }),
  });

  const workExperienceWithData = await Promise.all(
    objectData.workExperience.map(async (item: WorkExperienceProps) => {
      return getImgSrc({
        section: "workExperience",
        item: await getMd({ section: "workExperience", item }),
      });
    })
  );

  const projectWithData = await Promise.all(
    objectData.project.map(async (item: ProjectProps) => {
      return getImgSrc({ section: "project", item: await getMd({ section: "project", item }) });
    })
  );

  const skillWithData = await Promise.all(
    objectData.skill.map(async (item: SkillProps) => {
      return getImgSrc({ section: "skill", item: await getMd({ section: "skill", item }) });
    })
  );

  return {
    props: {
      ...objectData,
      information: informationWithData,
      workExperience: workExperienceWithData,
      project: projectWithData,
      skill: skillWithData,
    },
  };
};

const getMd = async ({
  section,
  item,
}: {
  section: string;
  item: DataProps["information"] | ProjectProps | WorkExperienceProps | SkillProps;
}) => {
  try {
    const markdownModule = await import(
      `../../public/markdown/${section}/${"id" in item ? item.id : "introduce"}.md`
    );
    return { ...item, markdown: markdownModule.default as string };
  } catch {
    console.log("no markdown");
    return item;
  }
};

const getImgSrc = async ({
  section,
  item,
}: {
  section: string;
  item: DataProps["information"] | ProjectProps | WorkExperienceProps | SkillProps;
}) => {
  const imgSrc = `/images/${section}/${"id" in item ? item.id : "profile"}.png`;
  const filePath = path.join(process.cwd(), "public", imgSrc);
  try {
    await fsPromises.stat(filePath);
    return { ...item, imgSrc: imgSrc };
  } catch {
    console.log("no img");
    return item;
  }
};
