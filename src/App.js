import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5192/weatherforecast") // change later to Azure URL
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table border="1" style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature (C)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.temperatureC}</td>
                <td>{item.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;