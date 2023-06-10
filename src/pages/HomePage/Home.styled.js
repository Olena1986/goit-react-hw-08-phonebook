import styled from "styled-components";
import phonebookImage from 'img/pngwing.com.png'
const Title = styled.h1`
  display: flex;
  justify-content:center;
  align-items: center;
  color: blue;
  height: 100vh;
`;
const Container = styled.div`
  background-image: url(${phonebookImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const HomeStyle = {
    Title,
    Container
}