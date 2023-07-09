import React, { useState, useEffect, useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import "./styles/app.css";
import Header from "./components/Header";
import WaldoImage from "./components/WaldoImage";
import ContextProvider from "./ContextProvider";
import { AppContext } from "./ContextProvider";
import Leaderboard from "./components/Leaderboard";
import VictoryScreen from "./components/VictoryScreen";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const { victory, setVictory, score, setScore } = useContext(AppContext);

  useEffect(() => {
    getPokemon();
    getLeaderboard();
  }, []);

  async function getPokemon() {
    const { data } = await supabase.from("pokemon").select("name");
    setPokemon(data);
  }

  async function getLeaderboard() {
    const { data } = await supabase.from("leaderboard").select();
    setLeaderboard(data);
  }

  return (
    <ContextProvider>
      <div className="main-container">
        <Header />
        <Leaderboard leaderboard={leaderboard} />
        {!victory && (
          <main className="image-container" aria-label="image-container">
            <WaldoImage
              pokemon={pokemon}
              setVictory={setVictory}
              setScore={setScore}
            />
          </main>
        )}
        {victory && (
          <VictoryScreen
            score={score}
            supabase={supabase}
            leaderboard={leaderboard}
          />
        )}
      </div>
    </ContextProvider>
  );
}

export default App;
