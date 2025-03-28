// blog data
import Devspace from "../assets/Images/Devspace.png";
import slotSavant from "../assets/Images/Slot-Savant.png";
import QRStay from "../assets/Images/QRStay.png";

export const Blogs = [
  {
    id: 1,
    heading: "QR Stay",
    name: "Developed a role-based Guest Onboarding System for hotel management, bookings, and QR code generation.",
    tags: ["Reactjs", "Express js", "Nodejs", "MongoDB", "tailwindCSS"],
    imgSrc: QRStay,
    link: "https://github.com/ishitajain-30/QRStay",
  },
  {
    id: 2,
    heading: "Devspace",
    name: "Developed a centralized content platform to provide intuitive tech related information and responsive UI. ",
    tags: ["reactjs", "tailwindCSS"],
    // date: "13 May, 2021",
    imgSrc: Devspace,
    link: "https://github.com/ishitajain-30/DevSpace",
  },
  {
    id: 3,
    heading: "Slot Savant",
    name: "A Vehicle Movement Analysis System designed to manage and analyze the entry and exit of vehicles in a parking lot",
    tags: ["reactjs", "python", "mongoDB", "styled-components"],
    // date: "6 July, 2021",
    imgSrc: slotSavant,
    link: "https://github.com/ishitajain-30/Slot-savant",
  },
  {
    id: 4,
    heading: "Fake News Detection",
    name: "Designed a system to classify news as true or false based on veracity of given news articles.",
    tags: ["python", "NLP"],
    link: "https://github.com/ishitajain-30/Fake-News-Detection",
  },
];
