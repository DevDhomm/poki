import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Paginator } from "primereact/paginator";
import "./list.css";

const PokemonList = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);

  const itemsPerPage = 20; // Nombre de Pokémon par page

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const offset = currentPage * itemsPerPage;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
        );

        if (!response.ok) throw new Error("Erreur lors du chargement");

        const data = await response.json();
        setTotalRecords(data.count); // Total des Pokémon disponibles

        // On extrait le nom et l'ID pour construire l'URL de l'image
        const pokemons = data.results.map((p) => {
          const id = p.url.split("/").filter(Boolean).pop();
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          return { name: p.name, imageUrl, id };
        });
        // On trie les Pokémon par ID pour un affichage cohérent
        pokemons.sort((a, b) => a.name.localeCompare(b.name)); // Tri par nom

        // On met à jour l'état avec les Pokémon récupérés
        setPokemonNames(pokemons);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [currentPage]);

  const onPageChange = (event) => {
    setCurrentPage(event.page);
  };

  if (loading) return <h1>Chargement...</h1>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className="container">
      <h1>Liste des Pokémon</h1>

      <Paginator
        first={currentPage * itemsPerPage}
        rows={itemsPerPage}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
        className="mb-4"
      />

      <div className="poke">
        {pokemonNames.map((pokemon) => (
          <Card
            key={pokemon.name}
            title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            style={{ width: "200px" }}
          >
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              style={{ width: "100%" }}
              loading="lazy" // Chargement paresseux des images
            />
          </Card>
        ))}
      </div>

      <Paginator
        first={currentPage * itemsPerPage}
        rows={itemsPerPage}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
        className="mt-4"
      />
    </div>
  );
};

export default PokemonList;
