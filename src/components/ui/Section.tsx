const Section = ({ section, link }: { section: string; link: string }) => {
  return (
    <div className="flex flex-col md:items-end items-center">
      <a href={link}>
        <h2 className="mb-0 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-detail transition-colors duration-300 hover:scale-110">
          {section}
        </h2>
      </a>
      <hr className="h-[2px] w-24 bg-light-primary dark:bg-dark-primary border-0 rounded-full" />
    </div>
  );
};

export default Section;
