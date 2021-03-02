export const reducerSET = (data, setStore) => {
    return async (dispatch) => {
        await dispatch({
            type: setStore,
            payload: data
        })
        return data;
    }
}