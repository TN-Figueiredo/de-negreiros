import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f9f9f9;
  padding: 20px 20px;
`;

export const Title = styled.span`
font-size: 36px;
font-weight: 700;
margin-top: 1.2rem;
@media (max-width: 600px) {
    font-size: 30px;
}
`;

export const SubTitle = styled.span`
font-size: 17px;
color: #808080;
margin-top: 1.2rem;
`;

export const TopicsContainer = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
justify-content: center;
margin-top: 1.2rem;
@media (max-width: 600px) {
    flex-direction: column;
}
`;

export const Topic = styled.a`
width: 30%;
margin: 10px 10px;
display: flex;
background-color: #ffffff;
text-align: left;
border-radius: 5px;
flex-direction: column;
padding: 20px 0px;
cursor: pointer;
text-decoration: none;
@media (max-width: 600px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}
`;

export const TopicImage = styled.img`
margin-right: auto;
margin-top: 10px;
margin-left: 30px;
`;

export const TopicTitle = styled.div`
margin-left: 30px;
margin-right: 30px;
margin-top: 20px;
font-size: 28px;
font-weight: 700;
color: #000000;`;

export const TopicLink = styled.div`
margin-left: 30px;
margin-top: 10px;
color: #32498a;
font-weight: 700;
`;