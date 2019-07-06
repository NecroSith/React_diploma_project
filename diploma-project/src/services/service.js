export default class CoffeeService {
    constructor() {
        this._apibase = 'http://localhost:3001';
    }

    getBestGoods() {
        const result = fetch(this._apibase + '/bestsellers')
            .then(res => res.json())
        return result;
    }

    getShopItems() {
        const result = fetch(this._apibase + '/coffee')
            .then(res => res.json())
        return result;
    }

    getGoods() {
        const result = fetch(this._apibase + '/goods')
            .then(res => res.json())
        return result;
    }
}