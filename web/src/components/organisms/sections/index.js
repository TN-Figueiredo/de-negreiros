import React from "react";
import allSections from "./sections";

export default (sections) => {
  return sections.map((section, index) => {
    const Section = allSections[section._type];
    return <Section key={index} {...section} />;
  });
};
