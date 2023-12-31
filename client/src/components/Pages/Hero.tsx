import styles from "../../style";
import { NavButton } from "..";
import { navLinks } from "../../constants";

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col justify-start py-2 xs:h-[80%] ss:h-full`}>
            <div id="logo" className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 xs:mt-0 md:mt-0 md:mb-0 px-6`}>

                <div className="flex flex-row justify-between items-end md:h-[30%]">
                    <img src={`src/assets/HeroIcon.png`} alt="hero" className="w-[40%] md:w-[50%] md:h-[100%] relative mr-4 ml-4" />
                    <h1 className="flex-1 font-reborn xs:text-[28px] sm:text-[32px] text-black xs:leading-[60px] ss:leading-[70px] ss:mb-5">
                        We're <br />{" "}
                        Getting <br />{" "}
                        Married
                    </h1>
                </div>

                <h1 className=" font-baloo text-center text-[20px] my-2 md:mb-14 text-black w-full tracking-widest">
                    AGAIN LOL
                </h1>

            </div>

            <div id="nav" className={`flex-1 flex ${styles.flexCenter}`}>
                <div
                    id="button-container"
                    className={`${styles.flexColEvenly} bg-[#F1EBE5]/75 border-2 border-[#000000]/25 md:h-[60%] xs:h-[350px] ss:h-[450px] w-[80%] rounded-sm md:my-0 my-2 md:mr-28`}>
                    {navLinks.map(link => (
                        <NavButton key={link.id} title={link.title} id={`${link.id}`} />
                    ))}
                </div>
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
            </div>
        </section>
    );
};

export default Hero;