import  Interactive  from "./Interactive";

export const TitleMenu = () => {
  return (
    <>
      <div className="absolute top-[20px] left-[20px] md:top-[60px] md:left-[100px]">
        <h1 className="drop-shadow-md text-primary md:text-[90px]">
          <span className="text-[30px] font-normal">Welcome to</span>
          <br />
          <br/>
          Conjure
        </h1>
        <br/>
        <br/>
        <p className="text-white mt-8 text-[40px]">Solo</p>
        <p className="text-white mt-8 text-[40px]">Multiplayer</p>
        <p className="text-white mt-8 text-[40px]">Tutorial</p>
      </div>
      <Interactive />
    </>
  );
};
