export default class marvelService {
	_apikey = "apikey=e101ce83ee9e2f3946b05f31c377c51c";
	_apibase = "https://gateway.marvel.com:443/v1/public/"


	async getResource(url) {
		console.log("request")
		const res = await fetch(url)
		if (!res.ok) {
			throw new Error(`Couldn't fetch a character data ${url}, status: ${res.status}`)
		}
		return await res.json()
	}

	_transformChar(char) {
		return {
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			id: char.id
		}
	}

	async getCharacter() {
		const id = Math.floor(Math.random() * (1011400 - 1011000 + 1) + 1011000);
		const res = await this.getResource(`${this._apibase}characters/${id}?${this._apikey}`);
		return this._transformChar(res.data.results[0])
	}

	async getCharacterById(id) {
		const res = await this.getResource(`${this._apibase}characters/${id}?${this._apikey}`);
		const comics = res.data.results[0].comics.items.map(item => item.name)
		console.log(comics)
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

	async getCharacters(offset = 0) {
		const res = await this.getResource(`${this._apibase}characters?limit=9&offset=${offset}&${this._apikey}`);
		return res.data.results.map(this._transformChar);
	}

}