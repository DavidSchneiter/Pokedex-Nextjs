import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { Pokemon } from "../components/pokemon";
import {
  Button,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function HomePage({ pokemon }) {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(20);
  const max = Math.ceil(pokemon.length / porPagina);
  useEffect(() => {}, [pokemon]);

  const [search, setSearch] = useState("");
  console.log(search);
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? pokemon
    : pokemon.filter(
        (e) =>
          e.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          e.id.toString().includes(search.toString())
      );

  const plusPage = () => {
    if (pagina === max) {
      return;
    } else {
      setPagina(pagina + 1);
    }
  };
  const minusPage = () => {
    if (pagina == 1) {
      return;
    }
    setPagina(pagina - 1);
  };

  return (
    <Layout title={"Pokedex"}>
      <Container justify="center" display="flex" xs={4} xl={6}>
        <Text
          css={{
            color: "Blue",
            borderRadius: "10px",
            width: "300px",
            textAlign: "center",
            fontSize: "$md",
          }}
        >
          Search Pokemon by Id, Name
        </Text>
        <Input
          width="1000px"
          placeholder="Search Pokemon"
          onChange={onChange}
        />
      </Container>

      <Grid.Container gap={4} justify="flex-start">
        {results
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </Grid.Container>
      <Container
        css={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          css={{ backgroundColor: "$red600" }}
          onClick={minusPage}
          disabled={pagina == 1}
        >
          PREV
        </Button>
        <Spacer x={4} y={1} />
        <Button
          xs={{ marginTop: "2px" }}
          css={{ backgroundColor: "$red600" }}
          onClick={plusPage}
        >
          NEXT
        </Button>
      </Container>
      <Spacer y={1} />
    </Layout>
  );
}
export const getStaticProps = async ({}) => {
  const { data } = await pokeApi.get(`/pokemon?limit=898`);

  const pokemon = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
  }));
  return {
    props: {
      pokemon,
    },
  };
};
