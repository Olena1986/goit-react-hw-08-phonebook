import styled from 'styled-components';
import backgroundImg from 'img/pngwing.com-min.png'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: bold;
`;
const Input = styled.input`
  padding: 5px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;
const SubmitButton = styled.button`
  padding: 8px 16px;
  width: 150px;
  margin: 0 auto;
  background-color: lightblue;
  color:grey;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:  color 0.3s ease,background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    color:grey;
  }
`;
export const FormStyle = {
  Form,
  Label,
  Input,
  SubmitButton,
};
