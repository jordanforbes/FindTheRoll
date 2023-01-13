import React, { useEffect, useState } from "react";
import "./App.css";
import DDMenu from "./components/DDMenu.jsx";
import SpellDetails from "./components/SpellDetails.jsx";

function App() {
  // const [loading, setLoading] = useState(true);
  const [spell, setSpell] = useState([]);
  // const [error, setError] = useState(false);

  useEffect(() => {
    console.log("effect triggered");
    fetch("/spell-list/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSpell(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/spells/", { method: "GET" }).then((res) => console.log(res.string));
  // }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="col-md-4">
          {/* <DDMenu
            spellNames={["spellNames"]}
            spellIndex={["spellIndex"]}
            currentSpell={currentSpell}
            setCurrentSpell={setCurrentSpell}
          /> */}
        </div>
        <div className="col-md-4">
          <SpellDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
