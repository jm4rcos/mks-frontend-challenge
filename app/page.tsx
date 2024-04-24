'use client'

import { Navbar, Products } from "./components";
import { Footer } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import { HomeContainer } from "./components/style";

const Home = () => {
    return (
        <div className=".app">
          <HomeContainer>
            <Sidebar />
            <Navbar />
            <Products />
            <Footer />
          </HomeContainer>
        </div>
    )
}

export default Home;