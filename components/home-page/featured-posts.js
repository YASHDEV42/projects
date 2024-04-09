import React from "react";
import classes from "./featured-posts.module.css";
import PostGrid from "../posts/post-grid";
const FeaturedPosts = (props) => {
  const { projects } = props;
  console.log("Featured posts :", projects);
  return (
    <main className={classes.main}>
      <div className={classes.contianer}>
        <h2 className={classes.title}>Featured Posts</h2>
        <PostGrid projects={projects} />
      </div>
    </main>
  );
};

export default FeaturedPosts;
