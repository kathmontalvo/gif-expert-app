import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = (props) => {

  // const categories = ['Dark', 'Black Mirror', 'The OA']
  const [categories, setCategories] = useState(['Dark', 'Black Mirror', 'The OA']);

  return (
    <>
      <h2> GifExpertApp </h2>
      <AddCategory setCategories = { setCategories } />
      <hr/>

      <ol>
        {
          categories.map((category)=> {
            return <li key={category}>{category} </li>
          })
        }
      </ol>

    </>
  )
};

export default GifExpertApp;
