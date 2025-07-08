// portfolio.js — rebuilt to match your new HTML homepage structure

const splashScreen = {
  enabled: false,
  animation: null,
  duration: 0
};

const greeting = {
  username: "Crohn's Journal",
  title: "Welcome",
  subTitle:
    "Hi! I noticed that there aren't too many Crohn's support/advice pages online, and I felt baffled and stressed during my healing process. I created this website to spread information on what works for me, so I hope I can help you if you're going through similar issues. Please feel free to contact me anytime.",
  disclaimer:
    "DISCLAIMER: I am not a medically licensed doctor; I am simply sharing what worked for me in hopes it can help you. Please consult your doctor for any specific medical advice.",
  resumeLink: "", // Optional
  displayGreeting: true
};

const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "sivasduddem@gmail.com",
  display: false
};

const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Feel free to reach out with any questions or advice!",
  email_address: "sivasduddem@gmail.com"
};

const isHireable = false;

export {
  splashScreen,
  greeting,
  socialMediaLinks,
  blogSection,
  contactInfo,
  isHireable
};
