export default class marvelService {
	_apikey = "apikey=0917241e4e7ff8f0b52616e4b1ecf3ea";
	_apibase = "https://gateway.marvel.com:443/v1/public/"


	async getResource(url) {
		const res = await fetch(url)
		if (!res.ok) {
			throw new Error(`Couldn't fetch a character data ${url}, status: ${res.status}`)
		}
		return await res.json()
	}

	_transformData(res) {
		const char = res.data.results[0];
		return {
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.homepage
		}
	}

	async getCharacter() {
		const id = Math.floor(Math.random() * (1011400 - 1011000 + 1) + 1011000);
		const res = await this.getResource(`${this._apibase}characters/${id}?${this._apikey}`);

		return this._transformData(res)
	}

}