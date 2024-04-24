'use client'

import { Provider } from "react-redux";
import { Navbar, Products } from "./components";
import { Footer } from "./components/footer";
import { QueryProvider } from "./components/providers/query-provider";
import { Sidebar } from "./components/sidebar";
import { HomeContainer } from "./components/style";
import store from "./features/store";

const Home = () => {
    return (
      <QueryProvider>
        <Provider store={store}>
            <div className=".app">
            <HomeContainer>
              <Sidebar />
              <Navbar />
              <Products />
              <Footer />
            </HomeContainer>
          </div>
        </Provider>  
      </QueryProvider>
    )
}

export default Home;