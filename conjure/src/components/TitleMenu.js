import  Interactive  from "./Interactive";

export const TitleMenu = () => {
  const textStyle = "text-white mt-10 md:text-[50px]"
  return (
    <>
      <div className="absolute top-[20px] left-[20px] md:top-[60px] md:left-[100px]">
        <h1 className="drop-shadow-md text-primary md:text-[120px]">
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
      <Interactive />
    </>
  );
};
