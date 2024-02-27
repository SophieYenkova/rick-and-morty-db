import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

export const getData = async (url: string) => {
    const res = await axios.get(`${BASE_URL}${url}`).catch(e => {throw new Error(e)})
    return res;
};

export const getAllCharacters = async (page:number) => {
    const res = await getData(`character/?page=${page}`)
    console.log(res.data.results)
    return res.data.results;
}

export const getCharacter = async (id:number) => {
    const character = await getData(`/character/${id}/`);
    console.log(character)
    return character;
}
