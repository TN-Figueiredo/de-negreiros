import React, { useState } from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import Title from "../../../atoms/title";
import Form from "../../../atoms/form";
import useTheme from "../../../../hooks/useTheme.hooks";
import { handleColor } from "../../../../lib/helpers";

import {
  TabbedContainer,
  ContentContainer,
  TabbedContent,
  TabView,
  Tab,
  TabText,
} from "./sections.styles";

const renderTabViews = (content, backgroundColor) => {
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
      <TabText backgroundColor={backgroundColor}>
        <BlockContent blocks={content[tab].block} serializers={{}} />
      </TabText>
    </>
  );
};

const renderTabbed = ({ backgroundColor, title, content }) => {
  const theme = useTheme();
  return (
    <ContentContainer first>
      <TabbedContent>
        <Title
          fontSize={theme.fonts.$fontSizeLG}
          color={handleColor(backgroundColor, theme)}
        >
          {title}
        </Title>
        {renderTabViews(content, backgroundColor)}
      </TabbedContent>
    </ContentContainer>
  );
};

const renderForm = ({ backgroundColor, title, fields, submit }) => {
  const theme = useTheme();
  return (
    <ContentContainer>
      <TabbedContent>
        <Title
          fontSize={theme.fonts.$fontSizeLG}
          color={handleColor(backgroundColor, theme)}
        >
          {title}
        </Title>
        <Form
          title={title}
          fields={fields}
          submit={submit}
          backgroundColor={backgroundColor}
          black={1}
        />
      </TabbedContent>
    </ContentContainer>
  );
};

const RenderTabbedContent = ({ tabbedContent, form }) => {
  return (
    <TabbedContainer
      backgroundColor={
        tabbedContent.backgroundColor === form.backgroundColor
          ? tabbedContent.backgroundColor
          : null
      }
    >
      {renderTabbed(tabbedContent)}
      {renderForm(form)}
    </TabbedContainer>
  );
};

RenderTabbedContent.propTypes = {};

export default RenderTabbedContent;
