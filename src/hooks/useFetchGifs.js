import { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'

const useFetchGifs = ( category ) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  useEffect(()=>{ //Efectos no pueden ser async

    getGifs( category )
    .then((imgs) => {

        setstate({
          data: imgs,
          loading: false
        })

    })

  }, [ category ])


  setTimeout(() => {
  }, 3000);

  return state;
}

export default useFetchGifs
