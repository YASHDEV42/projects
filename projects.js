const projects = [
  {
    title: "YASHSTORE",
    image: "YASHSTORE.png",
    excerpt:
      "My latest project and the biggest full-stack app, an e-commerce app using latest version of Next.Js 15 for the front-end and the back-end, PostgresSQL with Prisma ORM for DB, Stripe for handle payments.",
    date: "2024-06-12",
    isFeatured: true,
    link: "https://yashstore-eosin.vercel.app/",
    tools: [
      "NextJs",
      "TailwindCSS",
      "PostgresSQL",
      "Prisma",
      "Stripe",
      "NextAuth",
    ],
  },
  {
    title: "YASHTASK",
    image: "YASHTASK.png",
    excerpt:
      "NextJs task management app, where you can create, update, delete tasks, and you can also track the statues, using NextJs for both front and back-end and mongodb for DB.",

    date: "2024-06-12",
    isFeatured: true,
    link: "https://task-mangement-cyan.vercel.app/",
    tools: ["NextJs", "MongoDB", "TailwindCSS", "NextAuth"],
  },
  {
    title: "Quiz Yourself",
    image: "project-5.png",
    excerpt:
      "NextJs full-stack app, a quizzes app using latest version of Next.Js 15 and MongoDB, create take edit quizzes, and track your scores.",

    date: "2024-06-12",
    isFeatured: true,
    link: "https://quiz-yourself.vercel.app/",
    tools: ["NextJs", "MongoDB", "TailwindCSS", "Kinde"],
  },
  {
    title: "My Portfolio",
    image: "portfolio.png",
    excerpt:
      "This is my main portfolio page. I've designed it to showcase my projects, my skills and who I am. I used HTML, CSS, JavaScript to build my portfolio.",

    date: "2021-08-12",
    isFeatured: true,
    link: "https://yahyashannat-portfolio.netlify.app/",
    tools: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "Next Event",
    image: "NextEvent.png",
    excerpt:
      "This is my first NextJs project. I've designed it to showcase the upcoming events. I used NextJs, CSS, firebase, mongodb to build this website.",

    date: "2024-03-20",
    isFeatured: true,
    link: "https://next-js-events-two.vercel.app/",
    tools: ["NextJs", "Firebase"],
  },
  {
    title: "Anime Website",
    image: "anime-website.png",
    excerpt:
      "This is an anime website. I've designed it to showcase the anime series and movies. I used ReactJs and React-Router to build this website.",

    date: "2021-03-29",
    isFeatured: false,
    link: "https://yahya-2005.github.io/react-anime/",
    tools: ["ReactJs"],
  },
  {
    title: "Todo List",
    image: "TodoList.png",
    excerpt:
      "This Todo List I built it using ReactJs, to imporve my skills in ReactJs hooks",

    date: "2023-07-13",
    isFeatured: false,
    link: "https://yahya-2005.github.io/Todo-List/",
    tools: ["ReactJs"],
  },
  {
    title: "Attack on titan",
    image: "attack-on-titan.png",
    excerpt:
      "This Attack on Titan website is a very old project of mine. I used simple HTML and CSS to build this website because I was a beginner at that time.",

    date: "2020-08-18",
    isFeatured: false,
    link: "https://attack-on-titan-yash.netlify.app/",
    tools: ["HTML", "CSS"],
  },
  {
    title: "Old Portfolio",
    image: "old-portfolio.png",
    excerpt:
      "This is my old portfolio page. I used HTML, CSS, JavaScript to build my portfolio. but it was not my original design. I used a template.",

    date: "2021-07-13",
    isFeatured: false,
    link: "https://yahyashannat-old-portfolio.netlify.app/",
    tools: ["HTML", "CSS"],
  },
];
export const getAllProjects = () => {
  return projects;
};
export const getFeaturedProjects = () => {
  return projects.filter((project) => project.isFeatured);
};
