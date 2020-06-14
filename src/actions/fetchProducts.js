import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../reducers';

export default  function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
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
