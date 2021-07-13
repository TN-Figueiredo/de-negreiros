import React from "react";
import useSiteSettings from "../hooks/useSiteSettings.hooks";
import Layout from "../components/organisms/layout";

const IndexPage = () => {
  const site = useSiteSettings();
  return <Layout>Aqui vem o website</Layout>;
};

export default IndexPage;
