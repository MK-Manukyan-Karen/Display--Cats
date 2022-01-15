import * as axios from 'axios'

let instance = axios.create({
    baseURL: "https://api.thecatapi.com/",
})

export const catsAPI = {

    getCats(categoryId, page = 1, limit = 10) {

        return instance.get(`v1/images/search?limit=${limit}&page=${page}&category_ids=${categoryId}`)
            .then((response) => response)
            .catch((error) => error)
    },

    getCategories() {
        return instance.get(`v1/categories`)
            .then((response) => response)
            .catch((error) => error)
    }

}










