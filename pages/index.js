import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedProjects } from "../projects";

const HomePage = () => {
  const featuredProjects = getFeaturedProjects();
  return (
    <>
      <Hero />
      <FeaturedPosts projects={featuredProjects} />
    </>
  );
};

export default HomePage;
