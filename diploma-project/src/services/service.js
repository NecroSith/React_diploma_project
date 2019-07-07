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

    postData = async(data) => {
        const result = await fetch('http://localhost:3001/contacts', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
        return result;
    }
}