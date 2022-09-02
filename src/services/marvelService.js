import useRequest from "../hooks/useRequest.hook"

const useMarvelService = () => {
	const _apikey = "apikey=0917241e4e7ff8f0b52616e4b1ecf3ea"; 
	const _apibase = "https://gateway.marvel.com:443/v1/public/";

	const {request, loading, error, clearError} = useRequest();

	const _transformChar = (char) => {
		return {
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			id: char.id
		}
	}

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			price: comics.prices[0].price !== 0 ? comics.prices[0].price + "$" : "NOT AVAILABLE",
		}	
	}

	const getCharacter = async () => {
		const id = Math.floor(Math.random() * (1011400 - 1011000 + 1) + 1011000);
		const res = await request(`${_apibase}characters/${id}?${_apikey}`);
		return _transformChar(res.data.results[0])
	}

	const getCharacterById = async (id) => {
		const res = await request(`${_apibase}characters/${id}?${_apikey}`);
		const comics = res.data.results[0].comics.items.map(item => item.name)
		
		return {
			name: res.data.results[0].name,
			description: res.data.results[0].description,
			thumbnail: res.data.results[0].thumbnail.path + "." + res.data.results[0].thumbnail.extension,
			homepage: res.data.results[0].urls[0].url,
			wiki: res.data.results[0].urls[1].url,
			id: res.data.results[0].id,
			comics
		}
	}

	const getCharacters = async (offset = 210, initial) => {
		const res = await request(`${_apibase}characters?limit=9&offset=${offset}&${_apikey}`, initial);
		return res.data.results.map(_transformChar);
	}

	const getComics = async (offset = 0, initial) => {
		const res = await request(`${_apibase}comics?limit=8&offset=${offset}&${_apikey}`, initial);
		return res.data.results.map(_transformComics);
	}

	return {error, loading, getCharacters, getCharacterById, getCharacter, getComics, clearError};
}

export default useMarvelService;