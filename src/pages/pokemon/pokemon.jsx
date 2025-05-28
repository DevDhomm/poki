import { useState, useEffect } from "react";

import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import styles from "./PokemonInfo.module.css";
import { TYPE_COLORS } from "./typeColors";

const PokemonInfo = ({ pokemonName, onChangePokemon }) => {
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Ajout d'un état pour les erreurs
  const name = pokemonName;
  const [abilities, setAbilities] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      setLoading(true); // S'assurer que le loading est à true au début
      setError(null); // Reset de l'erreur

      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );

        if (!res.ok) {
          throw new Error("Pokémon non trouvé");
        }

        const data = await res.json();
        const speciesRes = await fetch(data.species.url);
        const speciesData = await speciesRes.json();
        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

        const parseChain = (chain) => {
          let names = [chain.species.name];
          chain.evolves_to.forEach((e) => {
            names = names.concat(parseChain(e));
          });
          return names;
        };
        const evoNames = parseChain(evoData.chain);

        const evoDetails = await Promise.all(
          evoNames.map(async (evoName) => {
            try {
              const evoRes = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${evoName}`
              );
              const evoData = await evoRes.json();
              // Prioritize home artwork, then dream_world, then official-artwork, then default
              const image =
                evoData.sprites.other.home?.front_default ||
                evoData.sprites.other["dream_world"]?.front_default ||
                evoData.sprites.other["official-artwork"]?.front_default ||
                evoData.sprites.front_default;
              return { name: evoName, image };
            } catch {
              return { name: evoName, image: null };
            }
          })
        );

        const abilityDetails = await Promise.all(
          data.abilities.map(async (a) => {
            const r = await fetch(a.ability.url);
            const j = await r.json();
            const entry = j.effect_entries.find(
              (e) => e.language.name === "en"
            );
            return {
              name: a.ability.name,
              short_effect: entry?.short_effect || "",
            };
          })
        );

        // Mise à jour des états seulement si tout s'est bien passé
        setAbilities(abilityDetails);
        setPokemon(data);
        setSpecies(speciesData);
        setEvolutions(evoDetails);
      } catch (err) {
        console.error("Erreur lors du chargement:", err);
        setError(err.message || "Erreur lors du chargement du Pokémon");
        // Reset des données en cas d'erreur
        setPokemon(null);
        setSpecies(null);
        setEvolutions([]);
        setAbilities([]);
      } finally {
        setLoading(false); // Le loading se termine dans tous les cas
      }
    };

    fetchData();
  }, [name]);

  // Affichage du loader pendant le chargement
  if (loading) {
    return (
      <div className={styles.loader}>
        <div className={styles.loaderSpinner}></div>
      </div>
    );
  }

  // Affichage de l'erreur si elle existe
  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  // Affichage si pas de données (ne devrait pas arriver avec la gestion d'erreur ci-dessus)
  if (!pokemon || !species) {
    return <p className={styles.error}>Pokémon non trouvé.</p>;
  }

  // Determine best available main image: home > dream_world > official-artwork > default
  const mainImage =
    pokemon.sprites.other.home?.front_default ||
    pokemon.sprites.other["dream_world"]?.front_default ||
    pokemon.sprites.other["official-artwork"]?.front_default ||
    pokemon.sprites.front_default;

  const flavorEntry =
    species.flavor_text_entries
      .find((e) => e.language.name === "en")
      ?.flavor_text.replace(/\n|\f/g, " ") || "";
  const genus =
    species.genera.find((g) => g.language.name === "en")?.genus || "";

  // Map stats to CSS module classes
  const statClasses = {
    hp: styles.statHp,
    attack: styles.statAttack,
    defense: styles.statDefense,
    "special-attack": styles.statSpecialAttack,
    "special-defense": styles.statSpecialDefense,
    speed: styles.statSpeed,
  };
  const types = pokemon.types.map((t) => t.type.name);

  const primary = TYPE_COLORS[types[0]] || "#777";
  const secondary = types[1] ? TYPE_COLORS[types[1]] : primary;

  return (
    <div
      style={{ "--c1": primary, "--c2": secondary }}
      className={styles.pokemonContainer}
    >
      <div className={styles.box}>
        <div className={styles.box1}>
          <h1
            className={`${styles.pokemonName} ${styles.animatedText}`}
            style={{ "--c1": primary, "--c2": secondary }}
          >
            {pokemon.name}
          </h1>
          <p className={styles.pokemonGenus}>
            <em>{genus}</em>
          </p>
          <img
            className={styles.pokemonImage}
            src={mainImage}
            alt={pokemon.name}
          />
        </div>

        <div className={styles.box2}>
          <section className={styles.infoSection}>
            <h2>Stats</h2>
            <div className={styles.statsContainer}>
              {pokemon.stats.map((s) => (
                <div
                  key={s.stat.name}
                  className={`${styles.statBox} ${
                    statClasses[s.stat.name] || ""
                  }`}
                >
                  <p className={styles.statName}>{s.stat.name}</p>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${s.base_stat}%` }}
                    >
                      <span className={styles.progressValue}>
                        {s.base_stat}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2>Abilities</h2>
            <div className="card flex flex-wrap justify-content-center gap-3">
              {abilities.map((a) => (
                <Button
                  key={a.name}
                  tooltip={a.short_effect}
                  tooltipOptions={{ position: "top" }}
                  label={a.name}
                  raised
                />
              ))}
            </div>
          </section>
          <section className={styles.infoSection}>
            <h2>Description</h2>
            <p>{flavorEntry}</p>
          </section>
        </div>
      </div>

      <section className={styles.infoSection3}>
        <div>
          Types:
          {types.map((type) => (
            <Tag
              key={type}
              value={type}
              style={{
                marginLeft: "0.5rem",
                textTransform: "capitalize",
                background: TYPE_COLORS[type],
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: "16px",
                padding: "0.3rem 1rem",
              }}
              className={styles.animatedType}
            />
          ))}
        </div>
        <Tag
          value={`Height: ${pokemon.height / 10} m`}
          icon="pi pi-arrows-v"
          style={{
            background: "#e3f2fd",
            color: "#1976d2",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: "16px",
            padding: "0.3rem 1rem",
          }}
        />
        <Tag
          value={`Weight: ${pokemon.weight / 10} kg`}
          icon="pi pi-balance-scale"
          style={{
            background: "#f3e5f5",
            color: "#7b1fa2",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: "16px",
            padding: "0.3rem 1rem",
          }}
        />
        <Tag
          value={`Base Exp: ${pokemon.base_experience}`}
          icon="pi pi-star"
          style={{
            background: "#fffde7",
            color: "#c0ca33",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: "16px",
            padding: "0.3rem 1rem",
          }}
        />
      </section>

      <section className={styles.evolutionSection}>
        <h2>Evolution Chain</h2>
        <div className="flex flex-wrap gap-3 justify-content-center">
          {evolutions.map((evo) => (
            <Card
              key={evo.name}
              title={evo.name.charAt(0).toUpperCase() + evo.name.slice(1)}
              className="p-2 flex align-items-center justify-content-center"
              style={{
                width: 180,
                minHeight: 220,
                cursor: "pointer",
                borderRadius: 16,
                boxShadow: "0 2px 8px #cfd8dc",
              }}
              onClick={() => onChangePokemon(evo.name)}
            >
              {evo.image && (
                <img
                  src={evo.image}
                  alt={evo.name}
                  width={120}
                  height={120}
                  style={{
                    display: "block",
                    margin: "0 auto 0.5rem",
                  }}
                />
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PokemonInfo;
