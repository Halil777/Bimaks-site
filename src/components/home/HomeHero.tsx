const HomeHero = () => {
  return (
    <div className="relative h-[60vh] text-blue-400 px-[10%] flex flex-col justify-center overflow-hidden">
      <video
        src="/video/Видео-фон-с-водой.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px]">
          bimaks
        </h1>
        <h2 className="text-[15px] sm:text-[17px] mt-[-20px] sm:mt-[10px] md:mt-[-20px] md:tracking-[10px] lg:tracking-[17px] sm:tracking-[5.5px]">
          TURKMENISTAN
        </h2>
      </div>
    </div>
  );
};

export default HomeHero;