export default class CoffeeService {
    constructor() {
        this._apibase = 'http://localhost:3001';
    }

    getBestGoods() {
        const result = fetch(this._apibase + '/bestsellers')
            .then(res => res.json())
        return result;
    }
}