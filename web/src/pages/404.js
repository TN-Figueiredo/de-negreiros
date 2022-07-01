import React from "react";
import Layout from "../components/organisms/layout";
import Image from "../../static/balanca-justica.png";
import useNavbarMenu from "../hooks/useNavbarMenu.hooks";

import {
  Container,
  Content,
  ImageContainer,
  StyledImage,
  Info,
  Title,
  Description,
  LinkItem,
} from "../style/404.styles";

const NotFoundPage = () => {
  const menu = useNavbarMenu();
  const renderMenuItems = () => {
    return menu.map(({ identifier, title, url }, index) => (
      <LinkItem key={identifier} to={url}>
        {title}
      </LinkItem>
    ));
  };
  return (
    <Layout>
      <Container>
        <Content>
          <ImageContainer>
            <StyledImage src={Image} alt="balanca-justica" />
          </ImageContainer>
          <Info>
            <Title>Algo deu errado</Title>
            <Description>
              Infelizmente não conseguimos encontrar essa página, por favor
              tente essas outras:
            </Description>
            {renderMenuItems()}
          </Info>
        </Content>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
