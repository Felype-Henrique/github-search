import React, { useContext, useEffect, useState } from "react";
import {
  Title,
  SubTitle,
  Logo,
  Header,
  Columns,
  SideBar,
  Name,
  UserName,
  Organization,
  Text,
  Main,
  Group,
  TitleRepo,
  Desc,
  Stars,
  Repo,
  TitleFav,
  TitleRep,
  Button,
} from "./styles";
import SearchBar from "../../components/searchBar/index";
import {
  BiBriefcaseAlt2,
  BiLocationPlus,
  BiStar,
  BiFolderOpen,
} from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";

import { context } from "../../context";

const Result = () => {
  const ctx = useContext(context);

  const [fav, setFav] = useState([]);

  useEffect(() => {
    localStorage.setItem("favo", JSON.stringify(fav));
  }, [fav]);

  return (
    <>
      <Header>
        <Logo>
          <Title>GitHub</Title>
          <SubTitle>Search</SubTitle>
        </Logo>
        <SearchBar />
      </Header>
      <Columns>
        <SideBar>
          <img src={ctx.userData?.avatar_url} alt={ctx.userData?.login} />
          <Name>{ctx.userData?.name}</Name>
          <UserName>{ctx.userData?.login}</UserName>
          <Organization>
            <BiBriefcaseAlt2 size={24} />
            <Text>{ctx.userData?.company}</Text>
          </Organization>
          <Organization>
            <BiLocationPlus size={24} />
            <Text>{ctx.userData?.location}</Text>
          </Organization>
          <Organization>
            <BiStar size={24} />
            <Text>0</Text>
          </Organization>
          <Organization>
            <BiFolderOpen size={24} />
            <Text>{ctx.userData?.public_repos}</Text>
          </Organization>
          <Organization>
            <IoPeopleSharp size={24} />
            <Text>{ctx.userData?.followers}</Text>
          </Organization>
        </SideBar>
        <Main>
          {ctx.repos.map((repo) => (
            <Group key={repo.id}>
              <TitleRep>
                <TitleRepo>{repo.name}</TitleRepo>
                <Button onClick={() => setFav([...fav, repo])}>
                  <BiStar size={24} />
                </Button>
              </TitleRep>
              <Desc>{repo.description}</Desc>
              <Stars>
                <BiStar size={24} />
                <Text>{repo.stargazers_count}</Text>
                <button onClick={() => console.log(fav)}>console</button>
              </Stars>
            </Group>
          ))}
        </Main>
        <SideBar>
          <Repo>
            <TitleFav>Repositórios favoritados</TitleFav>
          </Repo>
          <Repo>
            <TitleFav>Repositórios Não favoritados</TitleFav>
          </Repo>
        </SideBar>
      </Columns>
    </>
  );
};

export default Result;
