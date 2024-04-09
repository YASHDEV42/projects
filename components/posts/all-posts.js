import React from "react";
import PostGrid from "./post-grid";
import classes from "./all-posts.module.css";
const AllPosts = (props) => {
  const { projects } = props;
  return (
    <main className={classes.main}>
      <h2 className={classes.title}>All Posts</h2>
      <PostGrid projects={projects} />
    </main>
  );
};

export default AllPosts;
