import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "./styles/app.css";
import Header from "./components/Header";
import WaldoImage from "./components/WaldoImage";
import ContextProvider from "./ContextProvider";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    const { data } = await supabase.from("pokemon").select("name");
    setPokemon(data);
  }

  return (
    <ContextProvider>
      <div className="main-container">
        <Header />
        <main className="image-container" aria-label="image-container">
          <WaldoImage pokemon={pokemon} />
        </main>
      </div>
    </ContextProvider>
  );
}

export default App;
