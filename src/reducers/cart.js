import { ADD_PRODUCT, DECREMENT, INCREMENT, REMOVE_PRODUCT } from '../actions';

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function increment(id, size) {
    return {
        type: INCREMENT,
        id,
        size
    }
}

export function decrement(id, size) {
    return {
        type: DECREMENT,
        id,
        size
    }
}

export function remove(id, size) {
    return {
        type: REMOVE_PRODUCT,
        id,
        size
    }
}