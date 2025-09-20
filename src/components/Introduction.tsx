const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 px-6 max-w-6xl mx-auto">
      <div className="flex-1 max-w-3xl">
        <h1 className="mb-4">Hello! I am Jani</h1>
        <p className="text-base md:text-lg leading-relaxed">
          A Junior Marketing Technology Developer with background in web
          development and a Bachelor's in Information Technology. I love
          learning and working with new technologies and my superpower as a
          developer is my can-do attitude.
        </p>
      </div>
      <div className="shrink-0">
        <img src="/cartoon_portrait.png" alt={"self portrait"} className="w-auto h-96 rounded-lg shadow-lg object-cover" />
      </div>
    </div>
  );
};

export default Introduction;
