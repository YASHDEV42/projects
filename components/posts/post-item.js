import Image from "next/image";
import React from "react";
import classes from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug, link, tools } = props.project;
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
        loading="lazy"
        layout="responsive"
      />
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <time className={classes.date}>
          <em>{formattedDate}</em>
        </time>
        <p className={classes.excerpt}>{excerpt}</p>
      </div>
      <div className={classes.icons_container}>
        {tools.map((tool) => (
          <div key={tool}>
            <Image
              src={`/icons/${tool}.png`}
              alt={tool}
              width={40}
              height={40}
            />
          </div>
        ))}
      </div>
    </a>
  );
};

export default PostItem;
