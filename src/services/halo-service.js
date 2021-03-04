export default class HaloService {
    _apiBase = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';

    getResources = async () => {
        const res = await fetch(`${this._apiBase}`)
        return res.json()
    }
}