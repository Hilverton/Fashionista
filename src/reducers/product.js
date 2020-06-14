import { PRODUCT_SELECTED } from '../actions';

export function product_selected(product) {
    return {
        type: PRODUCT_SELECTED,
        product
    }
}
