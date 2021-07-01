import React from "react";
import Layout from "../components/organisms/layout";
import Banner from "../components/molecules/banner";

import { Container } from "./page.styles";

const allSections = {
  banner: Banner,
};

const PageTemplate = ({ pageContext: { sections } }) => {
  const renderSections = () => {
    return sections.map((section, index) => {
      const Section = allSections[section._type];
      return <Section key={index} {...section} />;
    });
  };
  return (
    <Layout>
      <Container>{renderSections()}</Container>
    </Layout>
  );
};

export default PageTemplate;
