import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/eca18034-1d2b-4f42-9ce6-fd82e313b69d")
      .then((res) => res.json())
      .then((data) => {
        setStore(data); // data MUST be an array (and it is)
      });
  }, []);

  return (
    <>
      {store.map((item, index) => (
        <WeatherCard key={index} data={item} />
      ))}
    </>
  );
}

export default App;
