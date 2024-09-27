/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shrey Gulati",
  title: "Hi all, I'm Shrey",
  subTitle: emoji(
    "A passionate Business Analyst 🔍 with experience in data-driven decision making, strategic insights, and process optimization, utilizing tools like Excel, SQL, Tableau, and Python to drive business success and uncover growth opportunities."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WrQU01Ue4tf4a7eQB1hyWPdW_IJhM9gJ/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/shreygulati/",
  gmail: "gulati.shrey21@gmail.com",
  instagram: "https://www.instagram.com/shrey.gulati/",
  facebook: "https://www.facebook.com/shrey.gulati21",
  twitter: "https://x.com/shrey_gulati",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEDICATED BUSINESS ANALYST DRIVEN BY DATA-INSPIRED DECISIONS",
  skills: [
    emoji(
      "⚡ Analyze complex datasets to uncover actionable insights and drive business growth"
    ),
    emoji("⚡ Create interactive dashboards using tools like Tableau, Power BI, and Excel"),
    emoji(
      "⚡ Partner with teams to streamline operations, elevate productivity, and fuel strategic success"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "power bi",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "far fa-file-excel"
    },
    {
      skillName: "r-programming",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-atlassian"
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "alteryx",
      fontAwesomeClassname: "fas fa-server"
    },
  
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/Northeastern.png"),
      subHeader: "Master of Science in Business Analytics",
      duration: "September 2023 - December 2024",
      desc: "Specialized in data analytics, predictive modeling, and business intelligence.",
      descBullets: [
        "Coursework: Statistical Analysis, Machine Learning, Predictive Modeling, Data Visualization",
        "Leadership: Advisory Board Member, Graduate Career Center,D'Amore-McKim School of Business"
      ]
    },
    {
      schoolName: "Amity University",
      logo: require("./assets/images/Amity.png"),
      subHeader: "Bachelor of Business Administration in International Business with Artificial Intelligence",
      duration: "September 2020 - May 2023",
      desc: "Graduated with a focus on utilizing Data Analytics, Business Intelligence and AI to drive innovative strategies in international business.",
      descBullets: ["Research Assistant : Co-authored the paper 'Metaverse and Fintech: Pathway for Innovation and Development'"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & Data Modelling", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL & Databases",
      progressPercentage: "85%"
    },
    {
      Stack: "Business Intelligence Tools (Tableau, Power BI)",
      progressPercentage: "80%"
    },
    {
      Stack: "Statistical Analysis & Predictive Modeling",
      progressPercentage: "85%"
    },
    {
      Stack: "Excel and Advanced Functions",
      progressPercentage: "90%"
    },
    {
      Stack: "Project Management & Agile Methodologies",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Capstone Project- Business Analytics & Customer Segmentation",
      company: "Linxup",
      companylogo: require("./assets/images/linxup.png"),
      date: "September 2024 – Present",
      desc: "Leading segmentation analysis, churn analysis, and dashboard development to drive customer engagement and profitability.",
      descBullets: [
        "Analyzing customer usage patterns and purchasing behavior using machine learning and clustering",
        "Working to Deliver insights with interactive dashboards, improving customer engagement for 200,000+ fleet assets"
      ]
    },
    {
      role: "Project Manager Intern",
      company: "Co-x3 Family Foundation",
      companylogo: require("./assets/images/co-x3.png"),
      date: "June 2024 – August 2024",
      desc: "Managed cross-functional projects, optimizing processes and driving efficient project execution.",
      descBullets: [
        "Defined and tracked KPIs for cross-functional projects using Confluence",
        "Increased project success rates by 30% through Agile practices and Jira"
      ]
    },
    {
      role: "Data Analytics using Deep Learning: Academic Intern",
      company: "National University of Singapore & Hewlett Packard Enterprise",
      companylogo: require("./assets/images/NUS3.png"),
      date: "June 2022 – July 2022",
      desc: "Developed machine learning models to analyze vulnerabilities in Captchas and led data-driven collaborations.",
      descBullets: [
        "Engineered a custom CNN model, achieving 95% accuracy in detecting text-based Captcha vulnerabilities",
        "Collaborated with interdisciplinary teams to apply machine learning techniques for data-driven solutions"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A Collection of Personal and Academic Projects Showcasing My Skills and Expertise",
  projects: [
    {
      projectName: "Data Transformation and Automation for IMDb",
      skills: "Python, Pandas, Alteryx",
      projectDesc: "Developed an automated pipeline for a movie streaming client to enrich their dataset using IMDb data. Scraped top 500 movies (2018-2020) and transformed the data into structured formats. Integrated IMDb data with the client’s dataset to deliver enriched insights. Automated the entire process in Alteryx, including data cleansing, merging, and reformatting, creating a streamlined workflow for future transformations."
    },
    {
      projectName: "Sentiment Analysis & Product Recommendations for Amazon",
      skills: "Python, NLTK, Machine Learning, Sentiment Analysis, Regression Models",
      projectDesc: "Developed a machine learning pipeline to analyze customer sentiment on Amazon reviews, linking satisfaction to pricing strategies. The ensemble model achieved a significant improvement, reducing prediction errors (RMSE = 0.152) and enhancing discount decision accuracy by 85%. This helps e-commerce sellers refine promotions, leading to increased customer satisfaction and profitability."
    },
    {
      projectName: "Aid Across Borders: Analyzing U.S. Defense Aid and Military Support",
      skills: "Tableau, Python, Data Visualization, Data Analysis, Geopolitical Strategies",
      projectDesc: "Explored how the U.S. channels defense funds to provide aid across regions, focusing on the Middle East. Analyzed trends in Foreign Military Sales (FMS) and grants, revealing key geopolitical strategies and military equipment distributions. Insights into U.S. defense aid highlighted how tailored military support aligns with regional needs, driving foreign policy and security strategies."
    },
    {
      projectName: "Enhancing Influencer Marketing on Twitter",
      skills: "Python, Data Mining, Social Media Analytics, Machine Learning",
      projectDesc: "Developed a new metric, Information Spreadability (IS), to assess true influence beyond follower count. Analyzed Twitter tech influencers by IS, showing that influencers with high engagement significantly outperform those chosen by follower count alone. The project highlighted the importance of genuine engagement in influencer marketing strategies, helping tech companies better target their campaigns and maximize outreach."
    },
    {
      projectName: "Assortment Planning in Fashion Retail",
      skills: "Python, Heuristics, Data Modelling, Operations Research",
      projectDesc: "Developed an optimization model for assortment planning in fashion retail, addressing demand estimation, product mix selection, and cost constraints. Implemented a two-phase heuristic solution, achieving a less than 1% gap from the upper bound across 240 datasets. Applied the model to a real-world retailer, optimizing product assortment for a women's dress catalog, leading to more informed inventory and budget decisions."
    },
    {
      projectName: "Optimizing Product Placement in Retail with Data Mining",
      skills: "Machine Learning, Algorithms, Python",
      projectDesc: "Developed a product assignment model using association rule mining to enhance cross-selling in retail environments. Implemented the nearest neighbor method for optimal product placement, resulting in a 37% increase in sales potential. Iteratively updated the model based on real-time sales data, achieving an additional 18% boost in cross-selling opportunities. This project highlights the value of data-driven retail strategies for maximizing sales."
    },
    {
      projectName: "Remote Work Impact on Productivity & Work-Life Balance",
      skills: "R, Statistical Modelling, Data Analysis, Survey Research",
      projectDesc: "Conducted empirical research on remote work's effect on employee productivity and work-life balance in the tech industry. Utilized survey data and performed polynomial regression to explore non-linear relationships between remote work hours and key outcomes. Results indicated that moderate levels of remote work optimized productivity and work-life balance, while excessive remote work led to diminishing returns. The findings contribute to shaping flexible, employee-friendly remote work policies."
    },
    {
      projectName: "Product Assignment Optimization in Warehouse",
      skills: "Genetic Algorithm (GA), Linear Programming (LP), Gurobi, Data Modelling, Optimization",
      projectDesc: "Optimized warehouse layout by strategically assigning products to minimize handling time and improve storage efficiency. Integrated GA for diverse initial layouts, refined using LP for global optimality under operational constraints. Analyzed historical product-picking data to reduce travel distance and enhance productivity. The solution demonstrated significant reductions in operational costs and improved inventory management, paving the way for further research in dynamic warehouse optimization with real-time data."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 617-580-7220",
  email_address: "gulati.shrey21@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "shrey_gulati", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
