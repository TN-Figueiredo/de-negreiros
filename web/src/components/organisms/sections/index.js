import React from "react";
import allSections from "./sections";

export default (sections) => {
  return sections.map((section) => {
    const Section = allSections[section._type];
    console.log("section._type", section._type);
    return <Section key={section._key} {...section} />;
  });
};
