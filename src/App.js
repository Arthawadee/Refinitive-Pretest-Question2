import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.publicapis.org/categories")
        .then((res) => res.json())
        .then((result) => {
          console.log("result = ", result);
          setData(result);
        });
    };
    fetchData();
  }, []);

  const filterArray = () => {
    if (inputText.length === 0) {
      return data;
    } else {
      return data.filter((i) => {
        return i.toLowerCase().includes(inputText.toLowerCase());
      });
    }
  };

  return (
    <div className="App">
      <input
        className="input"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Array</th>
          </tr>
        </thead>
        <tbody>
          {filterArray().map((i) => {
            return (
              <tr>
                <td>{i}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
