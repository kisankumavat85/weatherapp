import Axios from 'axios'
import React, { useEffect } from 'react'



const SimpleAPI = () => {

  const url = `https://pokeapi.co/api/v2/pokemon/1`

  const fetchPokemon = async () => {
    const response = await Axios.get(url)
    console.log(response);
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div>

    </div>
  )
}

export default SimpleAPI
