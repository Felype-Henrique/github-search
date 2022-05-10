import React from "react";
import {Description, Group, Header, RepoHeader, Star, Stars, Title, TitleGroup} from './styles'
import SearchBar from '../../components/searchBar/index'
import {BiStar} from "react-icons/bi";
import { Link } from "react-router-dom";

const Favorites = () => {
  
  const favo = localStorage.getItem('favo')
  const repos = JSON.parse(favo);
  return (
    <>
      <Header>
        <Link to="/">
        <Title>REPOSITÓRIOS FAVORITOS</Title>
        </Link>
        <SearchBar/>
      </Header>
      {(repos).map(repo => (
      <Group key={repo.id}>
          <RepoHeader>
          <TitleGroup>{repo.name}</TitleGroup>
          <BiStar size={34} color="#FFC700"/>
          </RepoHeader>
          <Description>{repo.description}</Description>
          <Stars>
          <BiStar size={24} />
          <Star>{repo.stargazers_count}</Star>
          </Stars>
      </Group>
       ) )}
    </>
  );
};

export default Favorites;
