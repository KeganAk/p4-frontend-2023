import axios from "axios";

const personajes = async (state: any ) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results)
}

const unPersonaje = async (id: number, state: any) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(peticion.data)
}

export{
    personajes,
    unPersonaje
}
