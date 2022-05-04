import React from "react";
import { Rings } from "react-loading-icons";

const Meanings = ({ isLoading, definition }) => {
  return (
    <>
      {isLoading && <Rings strokeOpacity={0.8} stroke="#353533" speed={1.5} />}
      {definition.meanings.map((meaning) => (
        <div>
          <div className="part-of-speech">{meaning.partOfSpeech}</div>
          {meaning.definitions.map((definition) => (
            <div>{definition.definition}</div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Meanings;
