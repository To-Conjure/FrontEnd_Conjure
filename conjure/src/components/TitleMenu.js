export const TitleMenu = () => {
  const textStyle = "text-white mt-10 md:text-[50px] font-bold		"
  return (
    <>
      <div className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[50px]">
        <h1 className="drop-shadow-md text-white md:text-[120px]">
          <br />
          <br/>
          Conjure
        </h1>
        <br/>
        <br/>
        <br/>
        <section>
        <p className={textStyle}>Solo</p>
        <p className={textStyle}>Multiplayer</p>
        <p className={textStyle}>Tutorial</p>
        </section>
      </div>
    </>
  );
};
