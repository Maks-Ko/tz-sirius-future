class ApiPexels {
    constructor() {
        this._baseUrl = 'https://api.pexels.com/v1/curated';
        this._headers = {
            authorization: '563492ad6f917000010000011465b74b9cac45e6b74933628026f3d2',
            'Content-Type': 'application/json'
          };
    }

    getServerData() {
        return fetch(`${this._baseUrl}/?page=2&per_page=50`, {
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
}

const api = new ApiPexels();

export default api;