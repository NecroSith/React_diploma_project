export default class CoffeeService {
    constructor() {
        this._apibase = 'https://yanpustynnyy.ru/coffee-app/api';
    }

    getItems(url) {
        const result = fetch(this._apibase + `/?${url}`)
            .then(res => res.json())
        return result;
    }

    postData = async (data) => {
        const result = await fetch(this._apibase + '/contacts/', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data)
        })
        return result;
    }
}