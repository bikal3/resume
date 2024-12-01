const data = {
  experience: [
    {
      post: "Business Analyst Intern",
      company: "Maritz Consulting Group DBA Ledelsea",
      link: "#",
      dates: "Jan 2022 - May 2022",
      span: "5 Month",
      stack: "Tableau, Excel, Google Sheet, Powerpoint",
      description: ` Provided support to projects related with business requirement and technology. Built and tested applications,
      as well as trouble-shoot and resolved routine and less-complex problems.Designed, test and debugged applications with assistance
      from others.Assisted with gathering requirements across business partners and develop test plans and execution.`,
    },
    {
      post: "Data Analyst/Backend Developer",
      company: "Softwarica College of IT and E-commerce",
      link: "#",
      dates: "July 2020 - July 2021",
      span: "1 Year",
      stack: "Tableau, Flutter, Dart, UI/UX",
      description: `Under this role, I Cleaned millions of data from 250 different table source of Moodle database 
      using SQL and Tableau Prep. Developed executive, marketing, ticketing, and performance dashboard using Tableau.
      Conducted workshop on UI/UX designing.Design and developed Android Application and Backend API’s using
       Flutter and Nodejs for Campus4.`,
    },
    {
      post: "Teacher Assistant",
      company: "Softwarica College of IT and E-commerce",
      link: "#",
      dates: "June 2019 - July 2020",
      span: "1 Years",
      stack: "Research,Arduino,Nodejs,Java",
      description: ` Supervised about 40 undergraduate students at assigned project per semester. 
      Performed research work and executed valuable innovative projects like building three-
      wheel electric car, online transaction vending machine. Conducted a UI/UX workshop. `,
    },
    {
      post: "Staff Manager",
      company: "Hotel Pokhara Peace",
      link: "#",
      dates: "Jan 2017 - Sept 2019",
      span: "2 years 9 months",
      stack: "HTML5, CSS, JavaScript, jQuery, Flutter",
      description: `Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.

`,
    },
  ],
};

const experienceContainer = document.querySelector(".experience-container");
const achievementsContainer = document.querySelector(".achievements-container");

function experienceFetch(experience) {
  const result = `
            <div class="company">
                <h2>${experience.post} &nbsp;<a target="_blank" rel="noopener" href="${experience.link}"><small>@ ${experience.company}</small></a></h2>
                <div class="timespan"><span class="fa fa-calendar blue"></span> &nbsp; ${experience.dates},<small> ${experience.span}</small></div>
                <div class="experience-description">
                    <span class="stack blue">Stack: ${experience.stack}</span><br>
                    ${experience.description}
                </div>
            </div>
            `;

  return result;
}

// function achievementFetch(achievement) {
//   const result = `
//             <div class="achievement">
//                 <span class="achievement-ico fa ${achievement.fa} w3-xlarge dblue" style="${
//     achievement.css || "left: -6px"
//   };"></span>
//                 <h2> ${achievement.title}</h2>
//                 <span class="link">${achievement.linkTitle}: <a class="blue" href="${achievement.link}">${
//     achievement.link
//   }</a></span><br/>
//                 ${
//                   achievement.link2
//                     ? `<span class="link">${achievement.link2Title}: <a class="blue" href="${achievement.link2}">${achievement.link2}</a></span>`
//                     : ""
//                 }
//             </div>
//             `;

//   return result;
// }

// achievementsContainer.innerHTML = data.achievements.map(achievementFetch).join("");
experienceContainer.innerHTML = data.experience.map(experienceFetch).join("");

// MIGHT ADD THIS SOMTIME IN THE FUTURE

// function skillsFetch(skill) {
//   const result = `
//             <div class="skill" style="padding:5px 15px; position:relative">
//                 <h2>${skill.language}</h2>
//                 <span class="skill-score"><b>${
//                   skill.score
//                 }</b> <small>/ 10</small></span>
//                 <div class="skill-meter"><div class="skill-value" style="width:${
//                   skill.score * 10
//                 }%;"></div></div>
//             </div>
//             `;

//   return result;
// }
