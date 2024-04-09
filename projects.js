const projects = [
  {
    title: "My Portfolio",
    image: "portfolio.png",
    excerpt:
      "This is my main portfolio page. I've designed it to showcase my projects, my skills and who I am. I used HTML, CSS, JavaScript to build my portfolio.",

    date: "2021-08-12",
    isFeatured: true,
    link: "https://yahyashannat-portfolio.netlify.app/",
  },
  {
    title: "Next Event",
    image: "NextEvent.png",
    excerpt:
      "This is my first NextJs project. I've designed it to showcase the upcoming events. I used NextJs, CSS, firebase, mongodb to build this website.",

    date: "2024-03-20",
    isFeatured: true,
    link: "https://next-js-events-two.vercel.app/",
  },
  {
    title: "Anime Website",
    image: "anime-website.png",
    excerpt:
      "This is an anime website. I've designed it to showcase the anime series and movies. I used ReactJs and React-Router to build this website.",

    date: "2021-03-29",
    isFeatured: true,
    link: "https://yahya-2005.github.io/react-anime/",
  },
  {
    title: "Todo List",
    image: "TodoList.png",
    excerpt:
      "This Todo List I built it using ReactJs, to imporve my skills in ReactJs hooks",

    date: "2023-07-13",
    isFeatured: false,
    link: "https://yahya-2005.github.io/Todo-List/",
  },
  {
    title: "Attack on titan",
    image: "attack-on-titan.png",
    excerpt:
      "This Attack on Titan website is a very old project of mine. I used simple HTML and CSS to build this website because I was a beginner at that time.",

    date: "2020-08-18",
    isFeatured: false,
    link: "https://attack-on-titan-yash.netlify.app/",
  },
  {
    title: "Old Portfolio",
    image: "old-portfolio.png",
    excerpt:
      "This is my old portfolio page. I used HTML, CSS, JavaScript to build my portfolio. but it was not my original design. I used a template.",

    date: "2021-07-13",
    isFeatured: false,
    link: "https://yahyashannat-old-portfolio.netlify.app/",
  },
];
export const getAllProjects = () => {
  return projects;
};
export const getFeaturedProjects = () => {
  return projects.filter((project) => project.isFeatured);
};
