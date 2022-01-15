import { catsAPI } from "../../API-request/API"
const SET_CATS_DATA = 'app/SET-CATS-DATA'
const SET_CATS_CATEGORIES = 'app/SET_CATS_CATEGORIES'
const SET_LOADING = 'app/SET_LOADING'
const SET_NUMBER_PAGE = 'app/SET_NUMBER_PAGE'
const SET_PORTION_NUMBER = 'app/SET_PORTION_NUMBER'
const SET_CATEGORY_ID = 'app/SET_CATEGORY_ID,'


let initialState = {
    cats: [],
    categories: [],
    isLoading: false,
    currentPage: 1,
    categoryId: null,
    portionNumber: 1,
}

const catsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CATS_DATA:

            return {
                ...state,
                cats: action.cat
            };

        case SET_CATS_CATEGORIES:

            return {
                ...state, categories: action.categories,
            };
        case SET_LOADING:

            return {
                ...state, isLoading: action.isLoading,
            };
        case SET_NUMBER_PAGE:
            return {
                ...state,
                currentPage: action.currentPageNumber
            };
        case SET_PORTION_NUMBER:
            return {
                ...state,
                portionNumber: action.portionNumber
            };

        case SET_CATEGORY_ID:
            return {
                ...state,
                categoryId: action.categoryId
            };


        default: return state;
    }
}

//ActionCreator

export const setCatsData = (cat) => {

    return {
        type: SET_CATS_DATA,
        cat: cat,
    }
}

export const setCategories = (categories) => {

    return {
        type: SET_CATS_CATEGORIES,
        categories
    }
}

export const setIsLoading = (isLoading) => {

    return {
        type: SET_LOADING,
        isLoading
    }
}
export const setCurrentPage = (currentPageNumber) => {
    return ({
        type: SET_NUMBER_PAGE,
        currentPageNumber: currentPageNumber,
    })
}
export const setPortionNumber = (portionNumber) => {
    return ({
        type: SET_PORTION_NUMBER,
        portionNumber: portionNumber,
    })
}

export const setCategoryId = (categoryId) => {
    return ({
        type: SET_CATEGORY_ID,
        categoryId,
    })
}

//thunks

export const getCatsData = (categoryId, page) => {

    return async (dispatch) => {

        try {
            dispatch(setIsLoading(true))
            dispatch(setCategoryId(categoryId))
            const response = await catsAPI.getCats(categoryId, page)
            if (response.status === 200) {
                dispatch(setCatsData(response.data))
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export const getCatsCategories = () => {

    return async (dispatch) => {

        try {
            dispatch(setIsLoading(true))
            const response = await catsAPI.getCategories()
            if (response.status === 200) {
                dispatch(setCategories(response.data))
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export const catsPageChange = (categoryId, page) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))
        dispatch(setCurrentPage(page))
        const response = await catsAPI.getCats(categoryId, page)
        dispatch(setCatsData(response.data))
        dispatch(setIsLoading(false))
    }
}


export default catsReducer
