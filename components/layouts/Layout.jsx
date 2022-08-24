import Head from "next/head"
import { Navbar } from "../ui"

export const Layout = ({title, children}) => {
  return (
      <>
          <Head>
              <title>{title || 'Pokemon App'}</title>
              <meta name="author" content="David Schneiter" />
              <meta name="descripcion" content="Informacion del pokemon xx" />
              <meta name="keywords" content="xx, pookemon, pokedex" />
          </Head>
        
          <Navbar />

          <main style={{
              padding: '0px 20px',
            backgroundColor: 'lightblue'
          }}>
              {children}
          </main>
      </>
  )
}
