// Summary And Greeting Section

const greeting = {
  /* Summary And Greeting Section */
  title: "Hi all I'm Han",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 Experienced in building Web applications with Java / JavaScript / React / Nodejs / SQL and some other cool libraries and frameworks",
  resumeLink: "https://drive.google.com/file/d/1JDm1nuHts1uqfLwWyTkuBk2wg6ECXBxI/view"
};

// Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Han-Lin-zc",
  linkedin: "https://www.linkedin.com/in/hannlin/",
  gmail: "hlin04@gmail.com"
};

// Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
    "⚡ Integration of third party services such as AWS"
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
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
    }
  ]
};

// Top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  
      progressPercentage: "70%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

// Open Source Section to View Github Pinned Projects 

const openSource = {
  githubConvertedToken: "YmY2ZGVjYzZhMjY0MjExNWQ1MDlmMGE0NzYwZDllZGY5NzIyZWRiZg==",
  githubUserName: "Han-Lin-zc"
};


const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "215-289-8950",
  email_address: "hlin04@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, techStack, openSource, contactInfo };
