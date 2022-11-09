import './styles/app.css';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import React, {useState, createContext} from 'react';


export const ProductsContext = createContext();


export function App() {
  
  const [section, setSection] = useState('Intro');

  const [products, setProducts] = useState()

  function readProducts(){
    fetch('todos.json')
    .then(res => res.json())
    .then(data => setProducts(data));
  }
  readProducts()


  return (
    <>
    <Head setSection={setSection} />
    <ProductsContext.Provider value={products}>
      <Main section={section}/>
    </ProductsContext.Provider>
    <Footer />
    </>
  );
}

export default App;


