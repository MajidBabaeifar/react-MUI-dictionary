import React from "react";
import { Rings } from "react-loading-icons";

const Meanings = ({ isLoading, definitio, word }) => {
  return (
    <>
      {isLoading && <Rings strokeOpacity={0.8} stroke="#353533" speed={1.5} />}

      {word && (
        <div className="meaning--box">
          <div>
            <h2>phonetics</h2>
            {definitio.phonetics.map((phonetic) => (
              <div>
                {phonetic.audio && (
                  <audio controls>
                    <source src={phonetic.audio} />
                  </audio>
                )}
                <div>{phonetic.text}</div>
              </div>
            ))}
          </div>
          <h2>meanings</h2>
          {definitio.meanings.map((meaning) => (
            <ul>
              <li>
                <div className="part-of-speech">{meaning.partOfSpeech}</div>
                {meaning.definitions.map((def) => (
                  <div className="b--margin">
                    <div>{def.definition}</div>
                    <div>
                      <span className="part-of-speech">e. g.</span>
                      {def.example}
                    </div>
                  </div>
                ))}
              </li>
              <hr />
            </ul>
          ))}
        </div>
      )}

      {/* {definitio.meanings.map((mean) => (
        <div>
          <div className="part-of-speech">{mean.partOfSpeech}</div>
          {mean.definitions.map((def) => (
            <div>{def.definition}</div>
          ))}
        </div>
      ))} */}
    </>
  );
};

export default Meanings;
