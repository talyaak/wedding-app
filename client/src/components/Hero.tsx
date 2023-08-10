import styles from "../style";
import { HeroIcon, discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col py-2`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className="flex flex-row justify-between items-end mb-2">
                    <img src={HeroIcon} alt="billing" className="w-[40%] md:w-[50%] h-auto md:h-[70%] relative mr-5 md:mr-5 md:ml-5" />
                    <h1 className="flex-1 font-reborn font- sm:text-[42px] text-[32px] text-black xs:leading-[60px] ss:leading-[70px] sm:mb-5">
                        We're <br />{" "}
                        Getting <br />{" "}
                        Married
                    </h1>
                </div>

                <h1 className=" font-baloo text-center ss:text-[24px] text-[18px] text-black w-full tracking-widest">
                    AGAIN LOL
                </h1>

            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                {/* <GetStarted /> */}
            </div>
        </section>
    );
};

export default Hero;