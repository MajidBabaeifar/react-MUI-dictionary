import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Container } from "@mui/material";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [word, setWord] = useState();
  const [definition, setDefinition] = useState();

  const handleChange = (value) => {
    setWord(value);
  };
  const handleSelect = (value) => {
    setLanguage(value);
  };
  const getDictonaryAPI = async (w) => {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${w}`
      );
      setDefinition(data.data[0]);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };
  console.log(word);
  useEffect(() => {
    getDictonaryAPI(word);
  }, []);
  console.log(definition);
  return (
    <Container>
      <Header
        word={word}
        handleChange={handleChange}
        language={language}
        handleSelect={handleSelect}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default App;
