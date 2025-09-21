const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-12 md:mt-16 px-6 max-w-6xl mx-auto">
      <div className="flex-1 max-w-[660px]">
        <h1 className="text-hero mb-6 text-gray-800">
          Hello! <br />
          <span className="text-blue-600">I am Jani!</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
          A {" "}
          <span className="font-semibold text-gray-800">
            Junior Marketing Technology Developer
          </span>{" "}
          with background in full-stack web development and a Bachelor's in Information
          Technology. I love learning and working with new technologies and my
          superpower as a developer is my{" "}
          <span className="font-semibold text-blue-600">can-do attitude</span>.
        </p>
      </div>
      <div className="shrink-0">
        <img
          src="/cartoon_portrait.png"
          alt={"self portrait"}
          className="w-auto h-96 rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Introduction;
