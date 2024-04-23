/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/singleLine"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "胡明宇",
    title: "Hi all, I'm Mingyu",
    subTitle: emoji(
        "A highly skilled 👨‍💻 Software Engineer 🐸 with a strong foundation in programming languages and software development. I have diverse experience of web development, embedded system and software development in Java / Angular / Spring / Javascript and so on"
    ),
    resumeLink:
        "https://drive.google.com/file/d/1E4s0WtrAf5UQ2wv92Xl0L1xu9tOBf371/view?usp=sharing", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/Lethairgo",
    linkedin: "www.linkedin.com/in/mingyu-hu1",
    gmail: "mingyu.hu00@gmail.com",
    gitlab: "",
    facebook: "",
    medium: "",
    stackoverflow: "",
    instagram: "https://instagram.com/nnnnnnick0731?igshid=YmMyMTA2M2Y=",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "Passionate Software Developer who believes technology brings progress",
    skills: [
        emoji(
            "⚡ Design, develop, test, deploy, maintain, and enhance function, scalable, reliable and maintainable software solutions "
        ),
        emoji("⚡ Manage project priorities, deadlines, and deliverables"),
        emoji(
            "⚡ Collaborate with cross-functional teams throughout the entire software lifecycle"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "Java",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "HTML-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "CSS3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "Angular",
            fontAwesomeClassname: "fab fa-angular"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        // {
        //   skillName: "C/C++",
        //   fontAwesomeClassname: "fab fa-c"
        // },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "php",
            fontAwesomeClassname: "fab fa-php"
        },
        {
            skillName: "git",
            fontAwesomeClassname: "fab fa-git"
        },
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Carnegie Mellon University",
            logo: require("./assets/images/cmu-seal-r.png"),
            subHeader: "Master of Science in Electrical and Computer Engineering",
            duration: "January 2023 - now",
        },
        {
            schoolName: "University of Georgia",
            logo: require("./assets/images/ugaLogo.png"),
            subHeader: "Bachelor of Science in Computer Science",
            duration: "August 2019 - December 2022",
            desc: "Graduate with Magna Cum Laude",
            descBullets: [
                "Dean's List(Spring 2020)",
                "Dean's List(Spring 2022)",
                "Dean's List(Fall 2022)",
                "Presidential Scholar(Summer 2022)",
            ]
        },
    ]
};

// Your top proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend/Design", //Insert stack or technology you have experience in
            progressPercentage: "60%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "85%"
        },
        {
            Stack: "Programming",
            progressPercentage: "95%"
        },
        {
            Stack: "Algorithm",
            progressPercentage: "80%"
        },
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Web Developer Intern",
            company: "Hisun Union",
            website: "http://www.hn-hisun.com/",
            companylogo: require("./assets/images/hisun-logo.png"),
            date: "June 2021 – July 2021",
            desc: "Personnel information management system",
            descBullets: [
                "Participated in development a personnel information management system utilizing Spring and Hibernate frameworks.",
                "Maintained data integrity across the platform through regular maintenance and updates."
            ]
        },
        {
            role: "Software Engineer Intern Remote",
            company: "Guanjia",
            website: "http://www.guanjia.com.hk/",
            companylogo: require("./assets/images/guanjiaLogo.png"),
            date: "January 2022 – July 2022",
            descBullets: [
                "Worked as part-time software engineer remotely to complete tasks of device software development",
                "Participated in the development of automated testing and production line for Apple Power, which was applied in Apple Power CM, such as Flex, Salcomp and Foxlink."
            ]
        },
        {
            role: "Embedded System Developer Intern Remote",
            company: "WeelSense",
            website: "http://www.weelsense.net/?_l=en",
            // companylogo: require("./assets/images/.png"),
            date: "June 2022 – August 2022",
            descBullets: [
                "Participated in development of underlying pressure sensor driver of electric toothbrush, such as designing and implementing embedded software using C, C++ and assembly, and assisted int the design of hardware architectures for embedded systems"
            ]
        },
        {
            role: "Database Developer",
            company: "Nano Lab, UGA",
            website: "",
            // companylogo: require("./assets/images/.png"),
            date: "August 2022 – December 2022",
            descBullets: [
                "Developed web library for SERS spectra for comparing and visualizing spectra",
                "Designed responsive and interactive UI using Angular.",
                "Developed RESTful microservices using Django and Spring."
            ]
        },
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/saayaHealthLogo.webp"),
            projectName: "Saayahealth",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://saayahealth.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "Nextu",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://nextu.se/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle:
                "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle:
                "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [
                {
                    name: "View Google Assistant Action",
                    url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                }
            ]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [
                {name: "Certification", url: ""},
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        emoji("Feel free to say hi! 🐸"),
    email_address: "mingyu.hu00@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable
};
