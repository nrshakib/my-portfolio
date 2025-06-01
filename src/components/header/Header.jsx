import Action from "./action";
import Me from "../../../public/resources/images/me-4.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header className="pt-10 relative h-auto md:h-[68vh] sm:h-[120vh]">
      <div className="text-center h-full relative">
        <p className="text-2xl">Hello I'm</p>
        <h1>MD Nadim Rijvi Shakib</h1>
        <h5 className="text-gray-400">Full Stack Developer</h5>

        <div className="mt-10 flex gap-5 justify-center">
          <Action />
        </div>

        <div className="header-socials flex flex-col items-center gap-2 absolute left-0 bottom-12 before:content-[''] before:block before:w-px before:h-8 before:bg-primary">
          <HeaderSocial />
        </div>

        <div
          className="me bg-gradient-to-t from-primary to-transparent w-[22rem] h-[21.8rem] absolute left-1/2 -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden p-8"
          style={{ paddingRight: '1.5rem', paddingLeft: '1.5rem', paddingBottom: '1.5rem' }}
        >
          <img src={Me} alt="Me" />
        </div>

        <a
          href="#contact"
          className="scroll-down absolute bottom-20 -right-9 rotate-90 font-light text-sm"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
