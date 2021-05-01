import rememberThem from './images/Remember-them.png';
import fitness from './images/fitness-tracker.PNG';
import budget from './images/budget.PNG';
import busTracker from './images/employee-tracker.PNG';
import weatherDash from './images/weatherdash_pic.PNG';
import burger from './images/burger.PNG';

//Project info to be passed as props to Card component for portfolio page
const projectsArr = [
    {
        "project1" : {
            "id": 1,
            "src": rememberThem,
            "alt": "Remember Them landing page",
            "title": "Remember Them",
            "desc": "Working with a team of 4 individuals, 2 of whom also served in the United States armed forces, we constructed this site as a place to pay tribute to the men and women who made the ultimate sacrifice for their country. My role in the team was primarily to work with JavaScript both on the front and back end to ensure our routes functioned properly and data was displayed as intended. This was an exciting project to work on and a unique opportunity to use many new technologies to construct something that represents the values I hold dearly.",
            "deployed": "https://protected-forest-25007.herokuapp.com/",
            "github": "https://github.com/JJessee1371/remember-them"
        },

        "project2": {
            "id": 2,
            "src": budget,
            "alt": "Chart showing income and expenses over a period of time",
            "title": "Frugal",
            "desc": "Tracking money requires a lot of attention, knowing that users won't always have direct access to the internet this progressive web application was developed with that in mind. Whether a user is on or offline they can now easily notate their income and expenses and be given a visual representation of their overall balance. The most challenging feature to construct was the IndexedDB where their information is kept. Being completely different from MongoDB and MySQL it took some time to work out exactly what needed to happen in order for data to be stored properly.",
            "deployed": "https://tranquil-beyond-36322.herokuapp.com/",
            "github": "https://github.com/JJessee1371/PWA-Budget-Tracker"
        }  
    },
    {
        "project1": {
            "id": 3,
            "src": fitness,
            "alt": "Charts displaying workout progression and breakdown",
            "title": "Fitness Tracker",
            "desc": "Working out is hard enough as it is, but when you can't readily track your progression it becomes even more difficult. With this application users can easily enter the data from their workouts and see that data visualized on the dashboard. Physical well being is extremely important, this application aims to make the journey easier. Being one of my very first projects to include MongoDB I initially struggled to obtain the functionality I wanted. Over many hours of research and after the implementation of many new debugging techniques, the gratification of success was well worth the effort.",
            "deployed": "https://powerful-ocean-47292.herokuapp.com/",
            "github": "https://github.com/JJessee1371/Fitness-Tracker"
        },

        "project2": {
            "id": 4,
            "src": busTracker,
            "alt": "Business tracker application example display",
            "title": "Business Management System",
            "desc": "This command line interface application was built with the difficulties of organizing a business in mind. By means of the inquirer module, the business tracker allows users to enter information about the departments, employees, managers, and employee roles within their company. Responses are stored in a database and can then be readily retrieved and viewed at their convenience. Initially I struggled integrating MySQL syntax into this application, but persistence and practice showed me how impactful it can be when making relations between data sets.",
            "deployed": "https://drive.google.com/file/d/1Q8bZOeP3Oo494DBkEHeMl4JrsW4SurIn/view?usp=sharing",
            "github": "https://github.com/JJessee1371/Employee-tracker"
        }
    },
    {
        "project1": {
            "id": 5,
            "src": weatherDash,
            "alt": "Weather dashboard displaying data for London",
            "title": "Weather Dashboard",
            "desc": "Making use of the Open Weather API, this application allows users to search any city in the world and be presented with weather data for the current day along with a 5 day forecast. This project served as an excellent way to practice retrieving data from APIs with AJAX and also afforded me the opportunity to work with the Spectre CSS framework.",
            "deployed": "https://jjessee1371.github.io/weather-dashboard/",
            "github": "https://github.com/JJessee1371/weather-dashboard"
        },
        
        "project2": {
            "id": 6,
            "src": burger,
            "alt": "Landing page displaying text boxes to place an order and the eaten burgers",
            "title": "Eat-Da-Burger",
            "desc": "I am still a child at heart and this project was a good opportunity to have some fun with the theme of the page. The goal was to practice CRUD operations when using a MySQL database and then display the data to the user with the example of ordering burgers and eating them. After testing the functionality and ensuring all data was rendered properly, it only made sense to give our favorite childhood frycook a chance to shine.",
            "deployed": "https://peaceful-brook-94616.herokuapp.com/",
            "github": "https://github.com/JJessee1371/Notepad"
        }
    }
];

export default projectsArr;