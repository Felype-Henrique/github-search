import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font: 42px Roboto Mono;
  color: #000000;
  margin-right: 10px;
`;

export const SubTitle = styled.h1`
  font-weight: 300;
  font: 42px Rubik;
  color: #000000;
  margin-top: 8px;
`;

export const Logo = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  margin: 20px;
  margin-right: 260px;
  justify-content: space-between;
`;

export const Columns = styled.div`
  display: grid;

  grid-template-columns: 20% 60% 20%;
`;

export const SideBar = styled.div`

  margin: 20px;
   img{
     height: 300px;
     width: 300px;
   }
`;

export const Name = styled.h1`
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 30px;
`;

export const UserName = styled.h2`
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #757575;
`;

export const Organization = styled.div`
   display: flex;
   margin-top: 5px;
`;

export const Text = styled.h3`
margin-left: 10px;
font-family: 'Rubik';
font-weight: 300;
font-size: 20px;
line-height: 24px;
color: #757575;
`;

export const Main = styled.div`
   margin: 90px;
`;

export const Group = styled.div`
  position: relative;
  margin-bottom: 80px;
  height: 105px;
`;

export const TitleRepo = styled.h1`
  display: flex;
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 36px;
  line-height: 43px;
  color: #000000;
`;

export const TitleRep = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: none;
`;

export const Desc = styled.h2`
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;

  color: #757575;
`;

export const Stars = styled.div`
   display: flex;
`;

export const Repo = styled.div`
   display: flex;
   margin-top: 100px;
   width: 190px;
`;

export const TitleFav = styled.h1`
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;
