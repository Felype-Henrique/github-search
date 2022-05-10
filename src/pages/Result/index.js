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
  Link,
  Repositories,
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

  ctx.repos.sort((a, b) => {
    return b.stargazers_count - a.stargazers_count;
  });

  let totalStar = 0
  ctx.repos.map((repo) => (
    totalStar += repo.stargazers_count
  ))
  return (
    <>
      <Header>
      <Link href="/">
      <Logo>
          <Title>GitHub</Title>
          <SubTitle>Search</SubTitle>
        </Logo>
      </Link>
        <SearchBar />
      </Header>
      <Columns>
        <SideBar>
          <img src={ctx.userData?.avatar_url} alt={ctx.userData?.login} />
          <Name>{ctx.userData?.name}</Name>
          <UserName>{ctx.userData?.login}</UserName>
          <Organization>
            <BiBriefcaseAlt2 size={24} />
            <Text>{ctx.userData?.company ? ctx.userData?.company : 'Não informado'}</Text>
          </Organization>
          <Organization>
            <BiLocationPlus size={24} />
            <Text>{ctx.userData?.location ? ctx.userData?.location : 'Não informado'}</Text>
          </Organization>
          <Organization>
            <BiStar size={24} />
            <Text>{totalStar}</Text>
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
                <Button onClick={() => alert("Repositório Adicionado aos Favoritos")}>
                  <BiStar size={24} onClick={() => setFav([...fav, repo])} />
                </Button>
              </TitleRep>
              <Desc>{repo.description}</Desc>
              <Stars>
                <BiStar size={24} />
                <Text>{repo.stargazers_count}</Text>
              </Stars>
            </Group>
          ))}
        </Main>
        <SideBar>
          <Repo>
            <Link href="/favorites">
              <Repositories>
              <BiStar size={34} color="#FFC700"/>
              <TitleFav>Repositórios favoritados</TitleFav>

              </Repositories>
            </Link>
          </Repo>
          <Repo>
            <Repositories>
            <BiStar size={34} />
            <TitleFav>Repositórios Não favoritados</TitleFav>
            </Repositories>
          </Repo>
        </SideBar>
      </Columns>
    </>
  );
};

export default Result;
