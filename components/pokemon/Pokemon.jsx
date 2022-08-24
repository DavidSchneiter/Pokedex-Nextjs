import { Card, Grid, Row, Text } from '@nextui-org/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPokemon } from '../../helpers';

export const Pokemon = ({ pokemon }) => {
  const router = useRouter();
  
  const onClick = () => {
      router.push(`/pokemon/${pokemon.name}`);
  }
  
  
  return (
    // <Link href={`/pokemon/${pokemon.name}`}>
    <Grid xs={ 12 } sm={ 6 } md={ 3 } xl={ 3 } key={ pokemon.id } >
        <Card 
        hoverable
            clickable
            onClick={onClick}
            css={{ height: "300px", backgroundColor: '$cyan300' }}
            >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}    
            width="100%"
            height={140}
            alt="Image Not Found in PokeAPI"
            />
                <Row justify='space-evenly'>
                <Text transform='capitalize'>{ pokemon.name }</Text>
                <Text>#{ pokemon.id }</Text>
                </Row>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
        </Card>
      </Grid>
// </Link>
  )
}

export async function getStaticProps({ params }) {
  // const { data } = await pokeApi.get("/pokemon?limit=151");
  const pokemons = await getPokemon(params.id);
  console.log("🚀 ~ file: Pokemon.jsx ~ line 43 ~ getStaticProps ~ pokemons", pokemons)
  // const pokemons = data.results.map((poke) => poke.name);
  // const name = params.id;
  // console.log(pokemon);
  return {
    props: {
        pokemons,
    },
  };
}