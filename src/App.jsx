import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
// import "./App.css";
import { Analytics } from "@vercel/analytics/react";

import styles from "./page.module.css";
import PokemonInfo from "./pages/pokemon/pokemon";
import PokemonList from "./pages/pokemonList/pokemonList";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Home() {
  const [name, setName] = useState("Charizard");
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const pokemon = localStorage.getItem("pokemon");
    if (pokemon) {
      setName(pokemon);
      console.log(pokemon);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setName(e.target[0].value);
    localStorage.setItem("pokemon", e.target[0].value);
    setTimeout(() => setLoading(false), 500); // simule le chargement
  };

  // Nouvelle fonction pour changer de Pokémon depuis PokemonInfo
  const handleChangePokemon = (newName) => {
    setName(newName);
    localStorage.setItem("pokemon", newName);
  };

  return (
    <div className={styles.page}>
      <Analytics />
      <div
        style={{
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          label="View form"
          text
          raised
          onClick={() => setShowList(false)}
          disabled={!showList}
          style={{ marginRight: 8 }}
        />

        <Button
          label="View list"
          text
          raised
          onClick={() => setShowList(true)}
          disabled={showList}
        />
      </div>
      {showList ? (
        <PokemonList />
      ) : (
        <>
          <form action="" onSubmit={handleSubmit} className={styles.form}>
            <InputText
              type="text"
              placeholder="Enter a Pokémon"
              required
              className={styles.input}
              disabled={loading}
            />
            <Button
              type="submit"
              className={styles.button}
              label={loading ? "Recherche..." : ""}
              icon={loading ? "pi pi-spin pi-spinner" : "pi pi-search"}
              disabled={loading}
            />
          </form>
          <PokemonInfo
            pokemonName={name}
            onChangePokemon={handleChangePokemon}
          />
        </>
      )}
    </div>
  );
}
