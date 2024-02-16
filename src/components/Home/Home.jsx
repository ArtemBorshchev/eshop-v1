import React from "react";
import { Poster } from "../Poster/Poster";
import { Product } from "../Product/Product";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import  { filterUnique } from '../../features/usefullFunc';


const Home = () => {
  const { list } = useSelector(({products}) => products);
  const productsList = filterUnique(list);

  return(
    <>
      <Poster products={productsList}/>
      <Product products={productsList} amount={5} title="Hipe of the category" />
      {/* <Categories products={list} amount={5} title="Hipe of the category" /> */}
    </>
  );
}

export default Home;