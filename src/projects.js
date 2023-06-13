import redditSimpleImg from "./assets/work/reddit-simple.png";
import todoContactImg from "./assets/work/todo-contact.png";
import flashcardsImg from "./assets/work/flashcards.png";
import endlessRollingImg from "./assets/work/endless-rolling.png";
import fChatImg from "./assets/work/f-chat.png";
import recipeReceiptImg from "./assets/work/recipe-receipt.png";
import stronkFitnessImg from "./assets/work/stronk-fitness.png";
import findWordsImg from "./assets/work/find-words.png";
import aiImagerImg from "./assets/work/ai-imager.png";
import weatherPlusNews from "./assets/work/weather-news.png";
import summableImg from "./assets/work/summable.png";
import portfolioImg from "./assets/work/portfolio.png";
import decksioImg from "./assets/work/decksio.png";

const work = [
  {
    title: "reddit simple",
    img: redditSimpleImg.src,
    url: "https://fa-redditsimple.netlify.app/",
    repository: "https://github.com/franklinnnn/reddit-simple",
    technologies: ["React", "Redux", "HTML", "CSS", "JavaScript"],
    desc: "Simplified Reddit app made to browse subreddits and read posts.",
    slug: "reddit-simple",
    about:
      "reddit simple is an app that simplifies the Reddit browsing experience. This app was one of the final projects in the Codecademy Front End Career Path course that I completed at the end of 2022. I applied everything I learned from the course through React and Redux, with styling in CSS. The project took about a month to complete. This was my first experience fully implementing Redux and diving into API documentation and calling endpoints.",
  },
  {
    title: "todo/contact",
    img: todoContactImg.src,
    url: "https://fa-todocontact.netlify.app/",
    repository: "https://github.com/franklinnnn/todo-contact",
    technologies: ["React", "Redux", "HTML", "CSS", "JavaScript"],
    desc: "Create and manage a to do list, along with contacts and appointments.",
    slug: "todo-contact",
    about:
      "todo/contact is a simple CRUD app that started as a project from the Codecademy Front End Career Path course. The initial project was a contacts and appointments app provided by the course, without the CRUD functionality. I added the to do section to round out the app. The app was built with React and the functionality with Redux. I was able to understand Redux more concretely by building this app. Styling done with CSS.",
  },
  // {
  //   title: "Flashcards",
  //   img: flashcardsImg.src,
  //   url: "https://fa-flashcards.netlify.app/",
  //   repository: "https://github.com/franklinnnn/flashcards",
  //   technologies: ["React", "Redux", "HTML", "CSS", "JavaScript"],
  //   desc: "Make custom flashcards for quizzes and categorize by topics.",
  //   slug: "flashcards",
  //   about: "",
  // },
  {
    title: "Endless Rolling",
    img: endlessRollingImg.src,
    url: "https://franklinnnn.itch.io/endless-rolling",
    repository: "https://github.com/franklinnnn/endless-rolling",
    technologies: ["C#", "Unity"],
    desc: "Endless game to collect coins while dodging obstacles.",
    slug: "endless-rolling",
    about:
      "Endless Rolling is a 3D endless game with the objective of collecting as many coins as possible. User plays as a tire that rolls down a road. There are three lanes that can the tire can move between, and obstacles that can be jumped or slid under. This game was the final project of a game programming course, and was built using C# and Unity. Asssets such as the main tire and obstacles were downloaded through the Unity Asset Store. The course through the semester focused on games using 2D assets. I decided to use 3D to explore Unity further.",
  },
  {
    title: "F Chat",
    img: fChatImg.src,
    url: "https://chat-app-48ae2.web.app/",
    repository: "https://github.com/franklinnnn/f-chat",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Firebase"],
    desc: "Chat room app, with functionality to add rooms and direct messaging between users.",
    slug: "f-chat",
    about:
      "F Chat is a simple chat application built with React. This app uses Firebase to handle the authentication and backend data such as user information, images, and the chat messages. Users can sign up using an email and simple password. Users can also upload an avatar image upon signing up. After signing up, users are able to change their display name, login email, avatar, and delete their account. The app features rooms and direct messaging functionality. Rooms can be created and deleted, with images that can be uploaded to represent the room. Direct messages between users can be seen with the last message sent. This project was one of the longest to complete. It is still not fully complete, however I do not intend it to be a fully deployed application, but rather a practice in developing more with React. This project is also the first time I fully learned and implemented Firebase. Further additions would include improved authentication and security, along with animations for a more pleasant user experience.",
  },
  {
    title: "Recipe Receipt",
    img: recipeReceiptImg.src,
    url: "https://recipe-receipt.netlify.app/",
    repository: "https://github.com/franklinnnn/recipe-app",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    desc: "Recipe finder with search, cuisine categories, and featured dishes.",
    slug: "recipe-receipt",
    about:
      "Recipe Receipt is a application with functionality to search for difference recipes. Users can search for recipes, or browse through different cuisine categories. There are also featured dishes displayed for quick recipe browsing. The detailed page of a recipe has the description, instructions, and ingredients of the dish. There are also similar recipes listed. This project was a practice in getting more familiar with different APIs and styling methods. Data is fetched from the free Spoonacular API, which has a large amount of information. Styling was done through styled components, which I used to create a more themed look.",
  },
  {
    title: "Stronk Fitness",
    img: stronkFitnessImg.src,
    url: "https://stronk-fitness.netlify.app/",
    repository: "https://github.com/franklinnnn/fitness-app",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    desc: "Look for exercises, categorized by body parts, muscle groups, and equipments.",
    slug: "stronk-fitness",
    about:
      "Stronk Fitness is an application for exercise and fitness, with the ability to search hundreds of exercises. Individual exercises can be searched and are categorized by target muscle groups. Details of each exercise are presented with animated demonstrations, example videos, and similar exercises. This app was built with React and styled with Material UI. I mostly relied on styling with Material UI to explore more styling methods. Additional styling outside of Material UI's components and sx props was done with CSS. The data is fetched from the ExerciseDB API through Rapid API. Due to limited access to the API, the app is only able to search individual exercises and muscle groups. Further impementation would include the feature to explore and save exercise routines, weekly exercise plans, as well as custom routines and plans.",
  },
  {
    title: "Find Words",
    img: findWordsImg.src,
    url: "https://find-words.vercel.app/",
    repository: "https://github.com/franklinnnn/thesaurus-app",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    desc: "Quick and simple thesaurus app with some extra options.",
    slug: "find-words",
    about:
      "Find Words is a lightweight and simple thesaurus app. The word-finding uses the Datamuse API. This project started from a video I came across on YouTube, which presented a challenge to create a thesaurus app. The Datamuse API only supports word-finding and not definitions, so I added word meanings using the free Dictionary API. As the project was minimal and light, I used it to practice styling elements like having the option of light/dark mode. The app was built with React and styled with CSS.",
  },
  {
    title: "AI Imager",
    img: aiImagerImg.src,
    url: "https://ai-imager.vercel.app/",
    repository: "https://github.com/franklinnnn/ai-image-app",
    technologies: ["MongoDB", "Express", "React", "Node", "Tailwind"],
    desc: "AI image generator app using OpenAI. Generated images can be posted to a gallery.",
    slug: "ai-imager",
    about:
      "AI Imager is an image generator app that uses the OpenAI API. Users can enter a prompt, or get a random preset prompt for the AI to generate an image. One image is generated per prompt, which can then be saved or posted to a gallery. Images in the gallery can also be saved, and their prompts can be copied. This app is a full stack application. Database for images is handled by MongoDB, Express and Node for the backend, and React for the frontend. The generated images are stored using Cloudinary. This was the first time I created an app using the MERN stack, and also transitioned into styling with Tailwind. I went for a more stylized single page application, using neubrutalism elements in the theme.",
  },
  {
    title: "Weather + News",
    img: weatherPlusNews.src,
    url: "https://weatherplusnews.vercel.app/",
    repository: "https://github.com/franklinnnn/weather-app",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    desc: "Search for current weather of any city, along with the most recent and relevant news.",
    slug: "weather-plus-news",
    about:
      "Weather + News is a single page app to search for current weather of a city. Additionally, the 5 day forecast and relevant news to the city can be displayed. Weather data uses the OpenWeather API and the news data uses the News API. Temperature units can be toggled between fahrenheit and celsius. The focus on this project was using multiple APIs and styling. I wanted to create a bold and bright look for the app with animations. Framer Motion was used for the animations, the first time I used an animation library. Currently the News API free plan does not allow requests through the browser. A workaround for this is to use a backend, which I plan to implement in the future.",
  },
  {
    title: "Summable",
    img: summableImg.src,
    url: "https://summable.vercel.app/",
    repository: "https://github.com/franklinnnn/ai-summarizer-app",
    technologies: ["React Redux", "HTML", "JavaScript", "Tailwind"],
    desc: "Summarize long articles and webpages into short summaries.",
    slug: "summable",
    about:
      "Summable is a free online summarizing tool that converts articles into a short summary. Simply enter the url of an article or webpage and enjoy a condensed summary of its contents. This tool is powered by the Article Extractor API, which leverages the OpenAI GPT-4 AI, combined with ScrapeNinja to improve its summarization process. Redux is used to create the api for fetching the results. History of articles summarized are locally stored. Styling with Tailwind and animations handled by Framer Motion. The goal for this project was to create a tool that I could deploy for wide use and possible monetize.",
  },
  {
    title: "Portfolio",
    img: portfolioImg.src,
    url: "https://franklinnn.com",
    repository: "https://github.com/franklinnnn/portfolio",
    technologies: ["Next.js", "Tailwind"],
    desc: "My personal portfolio website.",
    slug: "portfolio",
    about:
      "My website. This is my personal portfolio where I showcase my projects. There is also a blog, which I don't use very much. This portfolio was built using Next.js and styled using Tailwind, with animations using Framer Motion. Blog content uses Hygraph. The blog was my first exposure with using a headless CMS, which is all integrated using Next.js. I will try to use the blog more.",
  },
  {
    title: "Decksio",
    img: decksioImg.src,
    url: "https://decksio.vercel.app/",
    repository: "https://github.com/franklinnnn/spotify-app",
    technologies: ["React", "HTML", "JavaScript", "Tailwind"],
    desc: "Track user top songs and artists, as well as build playlists.",
    slug: "decksio",
    about:
      "Decksio is an app to keep track of your top listened tracks and artists, along with your most recently played tracks on Spotify. Top tracks and artists can be filtered from the last month, last 6 months, or all time. Discover new tracks by getting recommendations, then build new playlists to be saved on Spotify. Decksio was inspired by card collecting and deck building games. The tracks and artists are displayed as cards, with colors denoting the level of popularity. This app was built with React. Styling done with Tailwind and animations with Framer Motion. Decksio is currently under review from Spotify for extended quota deployment.",
  },
];

export default work;
