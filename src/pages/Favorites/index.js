import React from "react";
import {Description, Group, Header, Star, Stars, Title, TitleGroup} from './styles'
import SearchBar from '../../components/searchBar/index'
import {BiStar} from "react-icons/bi";

const Favorites = () => {
  
  const favo = localStorage.getItem('favo')
  const repos = JSON.parse(favo);
  return (
    <>
      <Header>
        <Title>REPOSITÓRIOS FAVORITOS</Title>
        <SearchBar/>
      </Header>
      {(repos).map(repo => (
      <Group key={repo.id}>
          <TitleGroup>{repo.name}</TitleGroup>
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
