import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Container } from "@mui/material";
import Meanings from "./components/Meanings";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [word, setWord] = useState();
  const [definitio, setDefinitio] = useState();

  const handleChange = (value) => {
    setWord(value);
  };
  const handleSelect = (value) => {
    setLanguage(value);
  };
  const getDictonaryAPI = async () => {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      setDefinitio(data.data[0]);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };
  useEffect(() => {
    getDictonaryAPI();
  }, [word, language]);
  console.log(definitio);
  return (
    <Container>
      <div className="container">
        <Header
          word={word}
          handleChange={handleChange}
          language={language}
          handleSelect={handleSelect}
        />
        <Meanings isLoading={isLoading} definitio={definitio} word={word} />
      </div>
    </Container>
  );

};

export default App;























