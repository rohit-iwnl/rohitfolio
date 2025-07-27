import React from 'react';

type Props = {};

interface WorkExperienceItem {
  years: string;
  title: string;
  company: string;
  companyType?: string;
}

const workExperiences: WorkExperienceItem[] = [
  {
    years: "2024 - Present",
    title: "Product Design on",
    company: "Apple",
    companyType: "Macbook Pro"
  },
  {
    years: "2022 - 2024", 
    title: "Researcher at",
    company: "Google",
    companyType: "Chrome Browser"
  },
  {
    years: "2020 - 2022",
    title: "Product Seller at", 
    company: "Shopify",
    companyType: ""
  }
];

export default function WorkExperience({}: Props) {
  return (
    <div
      className="relative min-h-screen w-screen p-[3vh] pt-[2vh] md:pt-[4vh]"
      id="workExperienceContainer"
    >
      {/* Section Heading */}
      <div className="flex items-center justify-center">
        <h1
          id="workExperienceSectionHeading"
          className="text-tertiary text-center font-bold text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
        >
          Work Experience
        </h1>
      </div>

      {/* Work Experience Timeline */}
      <div className="pt-8 md:pt-12 lg:pt-16 max-w-4xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          {workExperiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8"
            >
              {/* Years */}
              <div className="md:w-1/3">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-500">
                  {experience.years}
                </h3>
              </div>

              {/* Job Title and Company */}
              <div className="md:w-2/3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className="text-xl md:text-2xl lg:text-3xl text-primary_dark">
                  {experience.title}
                </span>
                
                {/* Company Badge */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 md:px-4 md:py-2">
                    {/* Company Icon/Logo placeholder */}
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-400 rounded mr-2"></div>
                    <span className="font-medium text-sm md:text-base">
                      {experience.company}
                    </span>
                    {experience.companyType && (
                      <span className="text-gray-600 text-sm md:text-base ml-1">
                        {experience.companyType}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 