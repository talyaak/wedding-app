import { } from "../assets";
export interface ButtonProps {
    id: string;
    title: string;
}

export const navLinks: ButtonProps[] = [

    {
        id: "schedule",
        title: "What's The Move? (Schedule)",
    },
    {
        id: "location",
        title: "Location Info",
    },
    {
        id: "faq",
        title: "FAQ",
    },
    {
        id: "food",
        title: "Food Menu",
    },
    {
        id: "cocktails",
        title: "Cocktails Menu",
    },
    {
        id: "rsvp",
        title: "RSVP",
    },


];

export interface MenuInterface {
    id: string;
    title: string;
    imgArr: string[];
}

export interface MenuHolder {
    food: MenuInterface;
    cocktails: MenuInterface;
    faq: MenuInterface;
}

export const menuConst: MenuHolder = {
    food: {
        id: "food",
        title: "Food Menu",
        imgArr: ["food_0", "food_1", "food_2", "food_3", "food_4", "food_5"]
    },
    cocktails: {
        id: "cocktails",
        title: "Cocktails Menu",
        imgArr: ["cocktails_0", "cocktails_1", "cocktails_2", "cocktails_3", "cocktails_4", "cocktails_5"]
    },
    faq: {
        id: "faq",
        title: "FAQ",
        imgArr: ["faq_0", "faq_1", "faq_2", "faq_3", "faq_4", "faq_5"]
    }
}

export const stats = [
    {
        id: "stats-1",
        title: "User Active",
        value: "3800+",
    },
    {
        id: "stats-2",
        title: "Trusted by Company",
        value: "230+",
    },
    {
        id: "stats-3",
        title: "Transaction",
        value: "$230M+",
    },
];

export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Content",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Create",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        title: "Community",
        links: [
            {
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestions",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Newsletters",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        title: "Partner",
        links: [
            {
                name: "Our Partner",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Become a Partner",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];
