import React from 'react';
import ErrorBlock from '../components/error';

export default class CoffeeService {
    constructor() {
        this._apibase = 'http://localhost:30012';
    }

    getBestGoods() {
        const result = fetch(this._apibase + '/bestsellers')
            .then(res => res.json())
            // .catch(() => <ErrorBlock />)

        return result;
    }

    getShopItems() {
        const result = fetch(this._apibase + '/coffee')
            .then(res => res.json())
            // .catch(() => <ErrorBlock />)
        return result;
    }

    getGoods() {
        const result = fetch(this._apibase + '/goods')
            .then(res => res.json())
            // .catch(() => <ErrorBlock />)
        return result;
    }

    postData = async (data) => {
        const result = await fetch('http://localhost:3001/contacts', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            // .then(res => res.json())
            // .catch(() => <ErrorBlock />)
        return result;
    }
}