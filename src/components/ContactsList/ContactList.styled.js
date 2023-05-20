import styled from '@emotion/styled';
export const ContainerList = styled.ul`
display: flex;
flex-direction: column;
padding: 0 15px;
width: 360px;
`;

export const ContainerItem = styled.li`
display: flex;
justify-content: space-between;
align-items: baseline;
&:not(:last-child) {
    margin-bottom: 30px;
}
`;


export const ContainerButtons =styled.button`
padding:10px;
width: 100px;
font-weight: 400;
font-size: 15px;
line-height: 1.25;
background-color: rgb(199, 219, 156);
color: rgb(0, 31, 51);
border:none;
border-radius: 10px;
cursor: pointer;
&:hover {
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

`;
