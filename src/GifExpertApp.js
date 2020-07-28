import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import 'animate.css';

const GifExpertApp = (props) => {

  // const categories = ['Dark', 'Black Mirror', 'The OA']
  const [categories, setCategories] = useState(['Dark']);
  return (
    <>
      <h2> GifExpertApp </h2>
      <AddCategory setCategories = { setCategories } />
      <hr/>

      <ol>
        {
          categories.map((category)=> 
            (
              <GifGrid 
                category= { category } 
                key = { category }
              />
            )
          )
        }
      </ol>

    </>
  )
};

export default GifExpertApp;
