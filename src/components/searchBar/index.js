import React, { useState, useContext } from "react";
import { Form } from "./styles";
import { FaSearch } from "react-icons/fa";
import api from "../../services/api";
import { context } from "../../context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const ctx = useContext(context);
  const [searchedValue, setSearchedValue] = useState([]);

  const navigate = useNavigate();

  async function getUserData(e) {
    e.preventDefault();
    try {
      const response = await api.get(`/${searchedValue}`);
      const repos = await api.get(`/${searchedValue}/repos`);

      ctx.setUserData(response.data);
      ctx.setRepos(repos.data);
      navigate(`/result`);
    } catch (err) {
      alert('Usuário não encontrado, por favor tente outro');
    }
  }

  return (
    <Form onSubmit={getUserData}>
      <input
        value={searchedValue}
        onChange={(e) => setSearchedValue(e.target.value)}
        placeholder="  Digite o nome do usuário"
      />
      <button type="submit">
        <FaSearch />
      </button>
    </Form>
  );
};

export default SearchBar;
