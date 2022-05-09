import React from "react";
import { Logo, Page, SubTitle, Title } from "./styles";
import SearchBar from "../../components/searchBar/index";

const Home = () => {
  return (
    <Page>
      <Logo>
        <Title>GitHub</Title>
        <SubTitle>Search</SubTitle>
      </Logo>
      <SearchBar />
    </Page>
  );
};

export default Home;
