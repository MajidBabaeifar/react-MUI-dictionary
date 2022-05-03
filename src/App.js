import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Container } from "@mui/material";

const App = () => {
  const [definition, setDefinition] = useState();

  const getDictonaryAPI = async () => {
    const data = await axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en/bye"
    );
    setDefinition(data.data[0]);
  };
  useEffect(() => {
    getDictonaryAPI();
  }, []);
  console.log(definition);
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default App;
