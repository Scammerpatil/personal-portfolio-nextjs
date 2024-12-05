const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-accent text-gradient bg-clip-text shadow-2xl py-24">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
