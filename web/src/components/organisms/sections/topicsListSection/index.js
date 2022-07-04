import React from "react";
import PropTypes from "prop-types";
import useSiteSettings from "../../../../hooks/useSiteSettings.hooks";
import Aposentar from "../../../../../static/aposentar.png";
import CalcAposentadoria from "../../../../../static/calc-aposentadoria.png";
import RevisarAposentadoria from "../../../../../static/revisar-aposentadoria.png";
import Acao from "../../../../../static/acao.png";
import Verbas from "../../../../../static/verbas.png";
import Empresa from "../../../../../static/empresa.png";

import { Container, Title, SubTitle, TopicsContainer, Topic, TopicImage, TopicTitle, TopicLink } from "./topicsListSection.styles"

const TopicsListSection = (props) => {
    const { show } = props;
    const {whatsapp} = useSiteSettings()
    const handleWhatsappClick = (message) => {
        return `https://api.whatsapp.com/send?l=pt_br&phone=55${whatsapp}&text=Olá Advocacia Negreiros, eu gostaria de ${message}`
    }
    if (show) {
        return <Container id="topics">
            <Title>
                Gostaríamos de saber em que podemos ajudar
            </Title>
            <SubTitle>
                Separamos abaixo alguns tópicos para agilizar o seu atendimento online.
            </SubTitle>
            <TopicsContainer>
                <Topic target="_blank" href={handleWhatsappClick("saber mais sobre minha aposentadoria.")}>
                    <TopicImage src={Aposentar} alt="aposentar" />
                    <TopicTitle>Me aposentar</TopicTitle>
                    <TopicLink>Fale com um advogado especialista</TopicLink>
                </Topic>
                <Topic target="_blank" href={handleWhatsappClick("saber mais sobre minha aposentadoria.")}>
                    <TopicImage src={CalcAposentadoria} alt="calculo aposentadoria" />
                    <TopicTitle>Calcular minha aposentadoria</TopicTitle>
                    <TopicLink>Fale com um advogado especialista</TopicLink>
                </Topic>
                <Topic target="_blank" href={handleWhatsappClick("saber mais sobre minha aposentadoria.")}>
                    <TopicImage src={RevisarAposentadoria} alt="revisar aposentadoria" />
                    <TopicTitle>Revisar minha aposentadoria</TopicTitle>
                    <TopicLink>Fale com um advogado especialista</TopicLink>
                </Topic>
                <Topic target="_blank" href={handleWhatsappClick("entrar com uma ação trabalhista.")}>
                    <TopicImage src={Acao} alt="ação trabalhista" />
                    <TopicTitle>Entrar com ação trabalhista</TopicTitle>
                    <TopicLink>Fale com um advogado especialista</TopicLink>
                </Topic>
                <Topic target="_blank" href={handleWhatsappClick("calcular minhas verbas trabalhistas.")}>
                    <TopicImage src={Verbas} alt="aposentar" />
                    <TopicTitle>Calcular minhas verbas trabalhistas</TopicTitle>
                    <TopicLink>Fale com um advogado especialista</TopicLink>
                </Topic>
                <Topic target="_blank" href={handleWhatsappClick("uma consultoria para minha empresa.")}>
                    <TopicImage src={Empresa} alt="aposentar" />
                    <TopicTitle>Consultoria para minha empresa</TopicTitle>
                    <TopicLink>Fale com um advogado especialista</TopicLink>
                </Topic>
            </TopicsContainer>
        </Container>;

    } else return null;
};

TopicsListSection.propTypes = {};

export default TopicsListSection;
