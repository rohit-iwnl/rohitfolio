import React from "react";
import Skill from "./Skill";
import Marquee from "react-fast-marquee";

type Props = {};

const skills = [
  { imagePath: "java", altText: "Java", skillName: "Java" },
  { imagePath: "c", altText: "C", skillName: "C++" },
  { imagePath: "python", altText: "Python", skillName: "Python" },
  { imagePath: "javascript", altText: "javascript", skillName: "Javascript" },
  { imagePath: "typescript", altText: "typescript", skillName: "Typescript" },
  { imagePath: "kotlin", altText: "Kotlin", skillName: "Kotlin" },

  { imagePath: "html5", altText: "HTML", skillName: "HTML" },
  { imagePath: "css3", altText: "css", skillName: "Css3" },
  { imagePath: "php", altText: "php", skillName: "Php" },
  { imagePath: "tailwind", altText: "tailwindcss", skillName: "Tailwindcss" },
  { imagePath: "react", altText: "React", skillName: "React" },
  { imagePath: "nextjs", altText: "Nextjs", skillName: "Nextjs" },
  { imagePath: "angular", altText: "Angular", skillName: "Angular" },
  {
    imagePath: "reactnative",
    altText: "reactnative",
    skillName: "React Native",
  },
  { imagePath: "flutter", altText: "Flutter", skillName: "Flutter" },
  { imagePath: "dart", altText: "Dart", skillName: "Dart" },
  { imagePath: "swift", altText: "Swift", skillName: "Swift" },
  { imagePath: "node", altText: "Nodejs", skillName: "Nodejs" },
  { imagePath: "express", altText: "Express", skillName: "Express" },
  { imagePath: "mongo", altText: "MongoDB", skillName: "MongoDB" },
  { imagePath: "mysql", altText: "MySQL", skillName: "MySQL" },
  { imagePath: "postgres", altText: "Postgres", skillName: "Postgres" },
  { imagePath: "firebase", altText: "Firebase", skillName: "Firebase" },
  { imagePath: "mysql", altText: "SQL", skillName: "SQL" },
  { imagePath: "git", altText: "Git", skillName: "Git" },
];

const languages = [
  { imagePath: "java", altText: "Java", skillName: "Java" },
  { imagePath: "c", altText: "C", skillName: "C++" },
  { imagePath: "python", altText: "Python", skillName: "Python" },
  { imagePath: "javascript", altText: "javascript", skillName: "Javascript" },
  { imagePath: "typescript", altText: "typescript", skillName: "Typescript" },
  { imagePath: "kotlin", altText: "Kotlin", skillName: "Kotlin" },
  { imagePath: "dart", altText: "Dart", skillName: "Dart" },
  { imagePath: "swift", altText: "Swift", skillName: "Swift" },
  { imagePath: "html5", altText: "HTML", skillName: "HTML" },
  { imagePath: "css3", altText: "css", skillName: "Css3" },
  { imagePath: "php", altText: "php", skillName: "Php" },
];

const frameworks = [
  { imagePath: "tailwind", altText: "tailwindcss", skillName: "Tailwindcss" },
  { imagePath: "react", altText: "React", skillName: "React" },
  { imagePath: "nextjs", altText: "Nextjs", skillName: "Nextjs" },
  { imagePath: "swiftui", altText: "SwiftUI", skillName: "SwiftUI" },

  {
    imagePath: "reactnative",
    altText: "reactnative",
    skillName: "React Native",
  },
  { imagePath: "flutter", altText: "Flutter", skillName: "Flutter" },
  { imagePath: "node", altText: "Nodejs", skillName: "Nodejs" },
];

const databases = [
  { imagePath: "mongo", altText: "MongoDB", skillName: "MongoDB" },
  { imagePath: "mysql", altText: "MySQL", skillName: "MySQL" },
  { imagePath: "postgres", altText: "Postgres", skillName: "Postgres" },
  { imagePath: "firebase", altText: "Firebase", skillName: "Firebase" },
  { imagePath: "git", altText: "Git", skillName: "Git" },
  { imagePath: "figma", altText: "Figma", skillName: "Figma" },
];

export default function Toolbox({}: Props) {
  return (
    <div
      className="w-screen min-h-[90vh] pb-[5vh] relative"
      id="toolboxContainer"
    >
      <div className="flex items-center justify-center">
        <h1
          id="skillSectionHeading"
          className="text-tertiary text-center font-bold text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
        >
          My digital Toolbox
        </h1>
      </div>
      {/* Bottom Div */}
      {/* <div className="my-10 px-5 relative text-center w-screen grid text-tertiary grid-cols-4 grid-rows-6 md:grid-cols-8 gap-5 md:grid-rows-4"> */}
      <div className="space-y-5">
        {/* {skills.map((skill, idx) => (
              <Skill
              key={idx}
              imagePath={skill.imagePath}
              altText={skill.altText}
              skillName={skill.skillName}
              />
            ))} */}
        <p className="text-2xl text-primary_dark p-3 md:p-5" id="languagesh2">
          Languages
        </p>
        <div>
          <Marquee speed={65} className="w-screen" autoFill>
            {languages.map((language, idx) => (
              <Skill
                key={idx}
                imagePath={language.imagePath}
                altText={language.altText}
                skillName={language.skillName}
              />
            ))}
          </Marquee>
        </div>
        <p className="text-2xl text-primary_dark p-3 md:p-5" id="frameworksh2">
          Frameworks
        </p>
        <div className="">
          <Marquee
            autoFill
            className="w-screen"
            direction="right"
            delay={2}
            speed={65}
          >
            {frameworks.map((framework, idx) => (
              <Skill
                key={idx}
                imagePath={framework.imagePath}
                altText={framework.altText}
                skillName={framework.skillName}
              />
            ))}
          </Marquee>
        </div>
        <p className="text-2xl text-primary_dark p-3 md:p-5" id="devh2">
          Database & Developer Tools
        </p>
        <div className="">
          <Marquee
            autoFill
            className="w-screen"
            direction="left"
            delay={2}
            speed={65}
          >
            {databases.map((database, idx) => (
              <Skill
                key={idx}
                imagePath={database.imagePath}
                altText={database.altText}
                skillName={database.skillName}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
    // </div>
  );
}
