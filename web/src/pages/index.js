import React from "react";
import useSiteSettings from "../hooks/useSiteSettings.hooks";
import Layout from "../components/organisms/layout";
import Banner from "../components/molecules/banner";

import { Container } from "./index.styles";

const IndexPage = () => {
  const site = useSiteSettings();
  console.log("site", site);
  return (
    <Layout>
      <Container>
        <Banner>Aqui vem o website</Banner>
      </Container>
    </Layout>
  );
};

export default IndexPage;
