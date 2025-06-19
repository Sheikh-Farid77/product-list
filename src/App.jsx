import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ProductBoard from "./components/ProductBoard/ProductBoard";
import ProductProvider from "./provider/ProductProvider";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductProvider>
        <ProductBoard />
      </ProductProvider>
      <Footer />
    </>
  );
}

export default App;
