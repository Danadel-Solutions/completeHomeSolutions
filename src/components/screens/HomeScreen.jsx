import React from "react";

import Banner from "../Banner";
import FeaturedCompanies from "../FeaturedCompanies";
import FeaturedProjects from "../FeaturedProjects";
import LatestListed from "../LatestListed";
import FromBlog from "../FromBlog";
import Footer from "../Footer";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <FeaturedCompanies />
      <FeaturedProjects />
      <LatestListed />
      <FromBlog />
      <Footer />
    </div>
  );
};

export default HomeScreen;
