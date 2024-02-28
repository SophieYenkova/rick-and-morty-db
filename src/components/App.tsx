import styled from "styled-components";
import Title from "./Title";
import Header from "./Header";
import Flex from "./Flex";
import HeaderImg from "./HeaderImg";
import Card from "./Card";
import { useState, useEffect } from "react";
import { getCharacters } from "rickmortyapi";

import { Character, FormData } from "../types";
import LoadButton from "./LoadButton";
import Spinner from "./Spinner";
import Form from "./Form";
import ErrorCard from "./ErrorCard";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a6cccc;
`;

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterData, setFilterData] = useState<FormData | null>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  useEffect(() => {
    loadMoreCharacters();
  }, []);

  const loadMoreCharacters = async () => {
    if (!hasNextPage) return;

    try {
      setLoading(true);
      const nextPage = currentPage + 1;
      let params = { page: nextPage };
      if (filterData) {
        params = { ...params, ...filterData };
      }
      const res = await getCharacters(params);
      const newCharacters = res.data?.results ?? [];
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      setCurrentPage(nextPage);
      setHasNextPage(res.data?.info?.next !== null);
    } catch (error) {
      console.error("Error loading more characters:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (formData: FormData) => {
    try {
      setLoading(true);
      const res = await getCharacters({ ...formData });
      const filteredCharacters = res.data?.results ?? [];
      setCharacters(filteredCharacters);
      setFilterData(formData);
      setHasNextPage(res.data?.info?.next !== null);
    } catch (error) {
      console.error("characters not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StyledContainer>
        <Header>
          <Flex justify="center" align="center">
            <Title>Rick and Morty DB</Title>
            <HeaderImg />
          </Flex>
        </Header>
        <Form onSubmit={handleFilter}></Form>
        <Flex justify="center" align="center" wrap="wrap" gap="20px">
          {loading && <Spinner></Spinner>}
          <Card data={characters} />
        </Flex>
        {hasNextPage ? (
          <LoadButton onLoadMore={loadMoreCharacters}></LoadButton>
        ) : (
          <Flex justify="center">
            <ErrorCard>No more characters to load</ErrorCard>
          </Flex>
        )}
      </StyledContainer>
    </>
  );
};

export default App;
