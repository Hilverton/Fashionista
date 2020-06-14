import { FILTER_SEARCH } from '../actions';

export function searchData(name) {
    return {
        type: FILTER_SEARCH,
        search: name
    }
}
