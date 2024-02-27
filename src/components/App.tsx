import styled from "styled-components";
import Title from "./Title";
import Header from "./Header";
import Flex from "./Flex";
import HeaderImg from "./HeaderImg";
import Card from "./Card";
import { useState, useEffect } from "react";
import { getAllCharacters } from "../api/api";
import { Character } from "../types";
import LoadButton from "./LoadButton";
import Spinner from "./Spinner";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a6cccc;
`;

function App() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadInitialCharacters();
  }, []);

  const loadInitialCharacters = async () => {
    try {
      setLoading(true);
      const initialData = await getAllCharacters(1);
      setData(initialData);
    } catch (error) {
      console.error("Error loading initial characters:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreCharacters = async () => {
    try {
      setLoading(true);
      const newData = await getAllCharacters(data.length / 20 + 1);
      setData([...data, ...newData]);
    } catch (error) {
      console.error("Error loading more characters:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log(loading);

  return (
    <>
      <Container>
        <Header>
          <Flex justify="center" align="center">
            <Title>Rick and Morty DB</Title>
            <HeaderImg></HeaderImg>
          </Flex>
        </Header>
        <Flex justify="center" align="center" wrap="wrap" gap="20px">
          {loading && <Spinner></Spinner>}
          <Card data={data}></Card>
        </Flex>
        <LoadButton onLoadMore={loadMoreCharacters}></LoadButton>
      </Container>
    </>
  );
}

export default App;
