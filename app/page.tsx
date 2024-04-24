'use client'

import { Navbar, Products } from "./components";
import { Footer } from "./components/footer";
import { QueryProvider } from "./components/providers/query-provider";
import { Sidebar } from "./components/sidebar";
import { HomeContainer } from "./components/style";

const Home = () => {
    return (
      <QueryProvider>
        <div className=".app">
          <HomeContainer>
            <Sidebar />
            <Navbar />
            <Products />
            <Footer />
          </HomeContainer>
        </div>
        </QueryProvider>
    )
}

export default Home;