import styled from '@emotion/styled';
export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
padding: 0 20px;
border: 2px solid gray;
border-radius: 10px;
background-color: rgb(138, 161, 176);
`;

export const ContainerLabel = styled.label`
margin-top:10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;

`;

export const ContainerInput = styled.input`
  display:flex;
  margin-top:10px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  border-radius: 5px;
  height: 30px;
`;

export const ContainerButton = styled.button`
margin: 15px auto ;
    padding:10px;
    width: 150px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  background-color: rgb(199, 219, 156);
  border:none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;