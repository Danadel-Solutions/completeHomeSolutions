import React from "react";

import Banner from "../Banner";
import FeaturedCompanies from "../FeaturedCompanies";
import FeaturedProjects from "../FeaturedProjects";
import LatestListed from "../LatestListed";
import FromBlog from "../FromBlog";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const HomeScreen = () => {
  return (
    <div className="home">
      <Helmet>
        <title>HomeSolutions - Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Login page" />
      </Helmet>
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
