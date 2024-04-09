import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllProjects } from "../../projects";

const AllPostsPage = () => {
  const AllProject = getAllProjects();
  return <AllPosts projects={AllProject} />;
};

export default AllPostsPage;
