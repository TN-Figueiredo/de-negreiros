import React, { useState } from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import Title from "../../../atoms/title";
import Form from "../../../atoms/form";
import useTheme from "../../../../hooks/useTheme.hooks";

import {
  TabbedContainer,
  ContentContainer,
  TabbedContent,
  TabView,
  Tab,
  TabText,
} from "./sections.styles";

const renderTabViews = (content) => {
  const [tab, setTab] = useState(0);
  const tabs = content.map(({ title, _key }, index) => {
    return (
      <Tab
        first={index === 0}
        last={content.length - 1 === index}
        total={content.length}
        key={_key}
        active={tab === index}
        onClick={() => setTab(index)}
      >
        {title}
      </Tab>
    );
  });
  return (
    <>
      <TabView>{tabs}</TabView>
      <TabText>
        <BlockContent blocks={content[tab].block} serializers={{}} />
      </TabText>
    </>
  );
};

const renderTabbed = ({ title, content }) => {
  const theme = useTheme();
  return (
    <ContentContainer first>
      <TabbedContent>
        <Title fontSize={theme.fonts.$fontSizeLG}>{title}</Title>
        {renderTabViews(content)}
      </TabbedContent>
    </ContentContainer>
  );
};

const renderContact = ({ title, fields, submit }) => {
  const theme = useTheme();
  return (
    <ContentContainer>
      <TabbedContent>
        <Title fontSize={theme.fonts.$fontSizeLG}>{title}</Title>
        <Form fields={fields} submit={submit} />
      </TabbedContent>
    </ContentContainer>
  );
};

const RenderTabbedContent = ({ tabbedContent, contact }) => {
  return (
    <TabbedContainer>
      {renderTabbed(tabbedContent)}
      {renderContact(contact)}
    </TabbedContainer>
  );
};

RenderTabbedContent.propTypes = {};

export default RenderTabbedContent;
