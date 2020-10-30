import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../reducers';

export default  function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://5f074b869c5c250016306cbf.mockapi.io/api/v1/catalog')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        });
    }
}
