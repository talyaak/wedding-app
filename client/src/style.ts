const styles = {
    boxWidth: "xl:max-w-[100%]",

    heading2: "font-reborn font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-reborn font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexColEvenly: "flex flex-col justify-evenly items-center",

    navButton: "flex justify-center items-center border-x border-y font-garamond xs:text-xl ss:text-2xl border-[#423f32]/50 rounded-sm w-[87.5%] h-[8%] transition duration-300 ease-in-out hover:bg-[#F1EBE5]/100 cursor-pointer",
    rsvpButton: "flex justify-center items-center border-x border-y rtl font-assistant xs:text-xl ss:text-2xl border-[#423f32]/50 rounded-sm w-[87.5%] h-[10%] transition duration-300 ease-in-out hover:bg-[#F1EBE5]/100 cursor-pointer",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;