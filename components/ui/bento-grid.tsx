import { cn } from "@/utils/cn";
import Link from 'next/link'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[50vh] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link 
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link : string;
}) => {
  return (
    
    <Link href={link}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-md transition-all duration-[400ms] ease-in-out transform shadow-input dark:shadow-none p-4 dark:bg-primary_dark dark:border-white/[0.2]  hover:shadow-accent  border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-accent mb-2 mt-2">
          {title}
        </div>
        <div className="font-clash text-primary text-md font-medium">
          {description}
        </div>
      </div>
    </Link>
  );
};
