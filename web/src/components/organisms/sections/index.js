import React from "react";
import allSections from "./sections";

export default (sections) => {
  return sections.map((section) => {
    const Section = allSections[section._type];
    if (section._type === undefined || Section === undefined) return null;
    return <Section key={section._key} {...section} />;
  });
};
