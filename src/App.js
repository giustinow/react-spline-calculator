import "./App.css";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

const keyValueMapping = {
  "5e895101-8240-47a8-9960-c0a40b709609": 1,
  "ea6accca-4fe5-4478-b9d9-dd0eed8db680": 2,
  "ec714a04-e39d-409a-b9be-a1a3dc7ee357": 3,
  "9d07f2b4-a457-4054-9c1f-346ee13c974b": 4,
  "1528b07c-b4bc-4e4f-9259-b49a17e43dde": 5,
  "26ef70ca-3c55-4966-86de-c9cfd0b061c1": 6,
  "32dd8415-ccdf-4925-8a2d-f595fd03384e": 7,
  "0d239844-7300-4d94-a636-38e3e9ddda83": 8,
  "076e6515-4faf-4ef1-8a3c-e8c163488301": 9,
  "b670d660-91c2-4def-8fc5-a8677c5f7a36": 0,
};

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const {
      target: { id },
    } = event;
    if (!keyValueMapping[id]) return;
    setInputValue((element) => `${element}${keyValueMapping[id]}`);
  };

  return (
    <div className="App">
      <div className="input-wrapper">
        <div className="input-element">
          <input
            name="calculator-input"
            value={inputValue}
            type="number"
            onChange={({ target: { value } }) => setInputValue(value)}
          />
        </div>
      </div>
      <Spline
        scene="https://prod.spline.design/CNiFwXZZYjXaj1tf/scene.splinecode"
        onKeyDown={handleInputChange}
        onMouseDown={handleInputChange}
      />
    </div>
  );
}

export default App;
