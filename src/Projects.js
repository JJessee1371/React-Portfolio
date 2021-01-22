import rememberThem from './images/Remember-them.png';
import readmeGen from './images/readme-generator.PNG';
import busTracker from './images/employee-tracker.PNG';
import passwordGen from './images/password-generator.PNG';
import weatherDash from './images/weatherdash_pic.PNG';
import notepad from './images/note-taker.PNG';

//Project info to be passed as props to Card component for portfolio page
const ProjectsRow1 = [
    {
        "id": 1,
        "src": rememberThem,
        "alt": "Remember Them landing page",
        "title": "Remember Them",
        "desc": "Working with a team of 4 individuals, 2 of whom also served in the United States armed forces, we constructed this site as a place to pay tribute to the men and women who made the ultimate sacrifice for their country. My role in the team was primarily to work with JavaScript both on the front and back end to ensure our routes functioned properly and data was displayed as intended. This was an exciting project to work on and a unique opportunity to use many new technologies to construct something that represents the values I hold dearly.",
        "deployed": "https://protected-forest-25007.herokuapp.com/",
        "github": "https://github.com/JJessee1371/remember-them"
    },

    {
        "id": 2,
        "src": readmeGen,
        "alt": "Generated README file",
        "title": "README Generator",
        "desc": "Developers everywhere know that a well thought out README file is a key part of every project that they create. The goal of this command line interface application was to enable developers to quickly generate a professional looking README file after answering some simple prompts. Making use of the Inquirer and Axios modules, the application uses the input to create a thorough README with directions for installation, testing, and contributing along with other key pieces of information.",
        "deployed": "https://drive.google.com/file/d/1ukiiTXq5WZY4A8F8IdjZG3cV2tbuUMbf/view",
        "github": "https://github.com/JJessee1371/README-Creator"
    }
];

const ProjectsRow2 = [
    {
        "id": 3,
        "src": busTracker,
        "alt": "Business tracker application example display",
        "title": "Business Tracker",
        "desc": "This command line interface application was built with the difficulties of organizing a business in mind. By means of the inquirer module, the business tracker allows users to enter information about the departments, employees, managers, and employee roles within their company. Responses are stored in a database and can then be readily retrieved and viewed at their convenience. Initially I struggled integrating MySQL syntax into this application, but persistence and practice showed me how impactful it can be when making relations between data sets.",
        "deployed": "https://drive.google.com/file/d/1Q8bZOeP3Oo494DBkEHeMl4JrsW4SurIn/view?usp=sharing",
        "github": "https://github.com/JJessee1371/Employee-tracker"
    },

    {
        "id": 4,
        "src": passwordGen,
        "alt": "Password generator landing page",
        "title": "Password Generator",
        "desc": "After collecting information from the user based on what character types should be included, this application generates a completely random password. As my very first project built using JavaScript it was a challenge to bring together the concepts and methods that would be most useful for creating this tool. Returning to this project after a few months to refactor the code was an eye opening experience proving that with time and practice the same goal can be achieved through a wide variety of methods and with much less code that I had originally used.",
        "deployed": "https://jjessee1371.github.io/password-generator/",
        "github": "https://github.com/JJessee1371/password-generator"
    }
];

const ProjectsRow3 = [
    {
        "id": 5,
        "src": weatherDash,
        "alt": "Weather dashboard displaying data for London",
        "title": "Weather Dashboard",
        "desc": "Making use of the Open Weather API, this application allows users to search any city in the world and be presented with weather data for the current day along with a 5 day forecast. This project served as an excellent way to practice retrieving data from APIs with AJAX and also afforded me the opportunity to work with the Spectre CSS framework.",
        "deployed": "https://jjessee1371.github.io/weather-dashboard/",
        "github": "https://github.com/JJessee1371/weather-dashboard"
    },

    {
        "id": 6,
        "src": notepad,
        "alt": "Notepad example screenshot",
        "title": "Notepad",
        "desc": "Everyone needs a way to keep track of the multitude of things to be done each day whether it relates to personal to-dos or taking notes in meetings at work. The notepad allows users to write out and store their daily tasks and remove them from the list once completed. This project served as an opportunity to practice working with multiple server routes to make a cohesive application and began to pave the way for delving into work with storing information in databases.",
        "deployed": "https://peaceful-brook-94616.herokuapp.com/",
        "github": "https://github.com/JJessee1371/Notepad"
    }
];

export { ProjectsRow1, ProjectsRow2, ProjectsRow3 };