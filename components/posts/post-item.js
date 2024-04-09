import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug, link } = props.project;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/projects/${image}`;

  return (
    <a className={classes.link} target="_blank" href={link}>
      <Image
        className={classes.img}
        src={imagePath}
        alt={title}
        width={300}
        height={200}
        layout="responsive"
      />
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <time className={classes.date}>
          <em>{formattedDate}</em>
        </time>
        <p className={classes.excerpt}>{excerpt}</p>
      </div>
    </a>
  );
};

export default PostItem;
