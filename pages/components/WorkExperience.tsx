import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Props = {};

interface WorkExperienceItem {
  years: string;
  title: string;
  company: string;
  companyType?: string;
  logoPath: string;
  description: string[];
  achievements: string[];
}

const workExperiences: WorkExperienceItem[] = [
  {
    years: "May 2024 - Present",
    title: "Software Engineer at",
    company: "Decision Theater",
    companyType: "",
    logoPath: "/assets/images/work/asu.png",
    description: [
      "Leading product design initiatives for MacBook Pro line",
      "Collaborating with cross-functional teams to deliver user-centered solutions",
      "Conducting user research and usability testing",
      "Creating high-fidelity prototypes and design systems"
    ],
    achievements: [
      "Improved user satisfaction by 25%",
      "Launched 3 major product features",
      "Led design for award-winning interface"
    ]
  },
  {
    years: "Feb 2022 - May 2024", 
    title: "Customer Success Engineer at",
    company: "Rubrik",
    companyType: "Data Security & Management",
    logoPath: "/assets/images/work/rubrik.png",
    description: [
      "Researched and developed new browser performance optimizations",
      "Analyzed user behavior patterns and browsing habits",
      "Collaborated with engineering teams on Chrome features",
      "Published research on web performance metrics"
    ],
    achievements: [
      "Reduced page load times by 30%",
      "Published 5 research papers",
      "Contributed to 12 Chrome releases"
    ]
  }
];

export default function WorkExperience({}: Props) {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperienceItem | null>(null);

  const handleExperienceClick = (experience: WorkExperienceItem) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div
      className="relative min-h-[60vh] max-h-screen w-screen p-[3vh] pt-[2vh] md:pt-[4vh]"
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
              <div className="md:w-2/3 flex flex-row items-center gap-2 md:gap-4 flex-wrap">
                <span className="text-lg md:text-2xl lg:text-3xl text-primary_dark whitespace-nowrap">
                  {experience.title}
                </span>
                
                {/* Company Badge with Read More Button */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 md:px-4 md:py-2">
                    {/* Company Logo */}
                    <div className="w-5 h-5 md:w-6 md:h-6 mr-2 relative">
                      <Image
                        src={experience.logoPath}
                        alt={`${experience.company} logo`}
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                    <span className="font-medium text-sm md:text-base">
                      {experience.company}
                    </span>
                    {experience.companyType && (
                      <span className="text-gray-600 text-sm md:text-base ml-1">
                        {experience.companyType}
                      </span>
                    )}
                  </div>
                  
                  {/* Read More Button */}
                  <motion.button
                    onClick={() => handleExperienceClick(experience)}
                    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Read more about this experience"
                  >
                    <svg 
                      className="w-4 h-4 md:w-5 md:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={handleCloseModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Modal Header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {selectedExperience.title} {selectedExperience.company}
                </h2>
                <p className="text-lg text-gray-600">{selectedExperience.years}</p>
                {selectedExperience.companyType && (
                  <p className="text-gray-500">{selectedExperience.companyType}</p>
                )}
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What I Did</h3>
                <ul className="space-y-2">
                  {selectedExperience.description.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 