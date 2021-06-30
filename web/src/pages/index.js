import React from "react";
import Logo from "../../assets/logo.png";
import Construcao from "../../assets/construcao.png";
import useSiteSettings from "../hooks/useSiteSettings.hooks";
import Layout from "../components/layout";

const IndexPage = () => {
  const site = useSiteSettings();
  return (
    <Layout>
      <img src={Logo} width="185" />
      <img src={Construcao} width="300" />
    </Layout>
  );
};

export default IndexPage;
