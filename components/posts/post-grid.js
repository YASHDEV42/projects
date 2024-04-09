import React from "react";
import PostItem from "./post-item";
import classes from "./post-grid.module.css";
import Head from "next/head";
const PostGrid = (props) => {
  const { projects } = props;
  return (
    <>
      <Head>
        <title>Yahya Shannat | Projects</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <ul className={classes.ul}>
        {projects.map((project) => (
          <PostItem key={project.slug} project={project} />
        ))}
      </ul>
    </>
  );
};

export default PostGrid;
