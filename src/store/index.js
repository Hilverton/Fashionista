import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ADD_PRODUCT, DECREMENT, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FILTER_SEARCH, INCREMENT, PRODUCT_SELECTED, REMOVE_PRODUCT, TOGGLE_SIDEBAR, TOGGLE_THEME } from '../actions';
import { getData, saveData } from '../utils';

const middlewares = [thunk];

const INITIAL_STATE = getData() || {
    theme: 'light',
    sidebar: '',
    pending: false,
    data: [],
    search: '',
    dataFiltered: [],
    error: null,
    product_selected: {},
    size_selected: '',
    addedProducts: [],
    qtd: 0,
    total: 0,
}

function fashion(state = INITIAL_STATE, action) {
    let index;
    switch(action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: action.theme
            }
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case PRODUCT_SELECTED: 
            return {
                ...state,
                product_selected: action.product
            }
        case ADD_PRODUCT:
            index = state.addedProducts.findIndex(item => item.code_color === action.product.code_color && item.size === action.product.size);
            if (index !== -1) {
                state.addedProducts[index].qtd = state.addedProducts[index].qtd + 1;
                return {
                    ...state,
                    qtd: state.qtd + 1,
                    total: state.total + action.product.actual_price
                }
            }
            return {
                ...state,
                addedProducts: [...state.addedProducts, action.product],
                qtd: state.qtd + 1,
                total: state.total + action.product.actual_price
            }
        case INCREMENT:
            index = state.addedProducts.findIndex(item => item.code_color === action.id && item.size === action.size);
            state.addedProducts[index].qtd = state.addedProducts[index].qtd + 1;
            return {
                ...state,
                qtd: state.qtd + 1,
                total:  state.total + state.addedProducts[index].actual_price
            }
        case DECREMENT:
            index = state.addedProducts.findIndex(item => item.code_color === action.id && item.size === action.size);
            if (state.addedProducts[index].qtd !== 1) {
                state.addedProducts[index].qtd = state.addedProducts[index].qtd - 1;
                return {
                    ...state,
                    qtd: state.qtd - 1,
                    total:  state.total - state.addedProducts[index].actual_price
                }
            } else {
                return { ...state }
            }
        case REMOVE_PRODUCT:
            index = state.addedProducts.findIndex(item => item.code_color === action.id && item.size === action.size);
            const qtd = state.addedProducts[index].qtd;
            const total = state.addedProducts[index].actual_price * qtd;
            state.addedProducts.splice(index,1);
            return {
                ...state,
                qtd: state.qtd - qtd,
                total: state.total - total
            }
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebar: action.sidebar
            }
        case FILTER_SEARCH:
            return {
                ...state,
                search: action.search,
                dataFiltered: action.search !== '' ? state.data.filter(dt => dt.name.toLowerCase().includes(action.search.toLowerCase())) : []
            }    
        default:
            return state;
    }
}

const store = createStore(fashion, applyMiddleware(...middlewares));

store.subscribe(() => saveData(store.getState()));

export default store;