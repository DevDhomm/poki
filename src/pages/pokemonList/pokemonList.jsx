import React, { useEffect, useState, useMemo } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import "./list.css";

const PokemonList = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [currentBatch, setCurrentBatch] = useState(1);

  const batchSize = 30; // Charger par lots de 50

  // Filtrage basé sur la recherche
  const filteredPokemon = useMemo(() => {
    if (!searchTerm) return allPokemon;
    return allPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allPokemon, searchTerm]);

  // Pokémon à afficher (avec lazy loading)
  const pokemonToShow = useMemo(() => {
    return filteredPokemon.slice(0, currentBatch * batchSize);
  }, [filteredPokemon, currentBatch]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        // D'abord, récupérer la liste complète (sans images)
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        if (!response.ok) throw new Error("Erreur lors du chargement");

        const data = await response.json();

        // Préparer les données sans charger les images immédiatement
        const pokemons = data.results.map((p) => {
          const id = p.url.split("/").filter(Boolean).pop();
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          return { name: p.name, imageUrl, id };
        });

        pokemons.sort((a, b) => a.name.localeCompare(b.name));
        setAllPokemon(pokemons);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemon();
  }, []);

  // Reset du batch quand on change de recherche
  useEffect(() => {
    setCurrentBatch(1);
  }, [searchTerm]);

  const loadMorePokemon = () => {
    setCurrentBatch((prev) => prev + 1);
  };

  const hasMoreToLoad = pokemonToShow.length < filteredPokemon.length;

  if (loading) return <h1>Loading...</h1>;
  if (error) return <div>Error : {error}</div>;

  return (
    <div className="container">
      <h1>List of Pokemons ({filteredPokemon.length})</h1>

      {/* Barre de recherche */}
      <div className="mb-4">
        <InputText
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search a Pokémon..."
          className="w-full"
          style={{ padding: "0.75rem", fontSize: "1rem" }}
        />
      </div>

      <div className="poke">
        {pokemonToShow.map((pokemon) => (
          <Card
            key={pokemon.name}
            title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            style={{ width: "200px" }}
          >
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              style={{ width: "100%" }}
              loading="lazy"
              onError={(e) => {
                // Image de fallback si l'image ne charge pas
                e.target.src = "https://via.placeholder.com/150?text=No+Image";
              }}
            />
          </Card>
        ))}
      </div>

      {/* Bouton "Charger plus" */}
      {hasMoreToLoad && (
        <div className="text-center mt-4">
          <button
            onClick={loadMorePokemon}
            style={{
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Load more ({pokemonToShow.length}/{filteredPokemon.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
