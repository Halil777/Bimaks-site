const HomeHero = () => {
  return (
    <div className="relative h-[70vh]  px-[10%] flex flex-col justify-center overflow-hidden">
      <video
        src="/video/Видео-фон-с-водой.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col gap-2">
        {/* <h1 className="text-[120px] sm:text-[120px] md:text-[120px] lg:text-[120px] xl:text-[120px]">
          bimaks
        </h1> */}

        <img src="/logo/bimaks-logo.png" style={{ width: "400px" }} alt="" />
        <h2
          style={{ color: "#7D93DC" }}
          className="text-[15px] sm:text-[27px] mt-[-20px] sm:mt-[10px] md:mt-[-20px] md:tracking-[10px] lg:tracking-[17px] sm:tracking-[5.5px]"
        >
          TURKMENISTAN
        </h2>
      </div>
    </div>
  );
};

export default HomeHero;
