import { Button, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { PokeLink } from "./PokeLink"

export const Navbar = () => {
    const  {theme} = useTheme()
  return (
      <div style={{
          display: 'flex',
      width: '100%',
          height:'80px',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0x 20px',
          backgroundColor: theme?.colors.red700.value
    }}>
        <Link href={"/"} passHref>
         <PokeLink />
        </Link>
      {/* <Spacer css={{ flex: 1 }} /> */}
      {/* <Link href="/regiones">
      <a>
        <Text color="white" h3>Regiones </Text>
      </a>
      </Link> */}
          {/* <Text color="white" h3>Fav</Text> */}
          
      </div>
  )
}
