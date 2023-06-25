import axios from "axios";

const initialUrl = "https://rickandmortyapi.com/api/character"

const personajes = async (state: any, url: string ) => {
    const peticion = await axios.get(url)
    state(peticion.data.results)
}

const info = async (state: any, url: string ) => {
    const peticion = await axios.get(url)
    state(peticion.data.info)
}

const unPersonaje = async (id: number, state: any) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
}

export{
    personajes,
    info,
    unPersonaje
}
