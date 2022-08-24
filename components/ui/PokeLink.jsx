import { Image, Spacer, Text } from '@nextui-org/react'

export const PokeLink = ({href}) => {
  return (
    <a href={href} style={{display:"flex"}}>
          <Image src="/pokebola.png" alt={"Pokemon"} width={50} height={50} />
          <Spacer x={1} />
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okédex</Text>
    </a>
  )
}
