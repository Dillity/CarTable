import {GET_TABLE_DATA, SET_IS_FETCHING, SET_SUCCESS, SET_TABLE_DATA, SET_TABLE_ERROR} from "./tableActionTypes";
import {tableAPI} from "../../../api/api";

export const getTableData = (page: number) => {
    return async (dispatch: any, getState: any) => {
        dispatch({type: SET_IS_FETCHING, payload: true});
        const tableState = getState().table;
        if (page <= tableState.totalPages) {
            const response = await tableAPI.getTableData(page);
            dispatch({type: GET_TABLE_DATA, payload: response.data});
        } else {
            dispatch({type: SET_TABLE_ERROR, payload: 'No more data'});
        }

        dispatch({type: SET_IS_FETCHING, payload: false});
    }
}

export const addTableData = (values: object) => {
    return async (dispatch: any) => {
        const response = await tableAPI.addTableData(values);
        if(response.status === 200) {
            dispatch({type: SET_TABLE_DATA, payload: response.data});
            dispatch({type: SET_SUCCESS, payload: true})
            setTimeout(() => {
                dispatch({type: SET_SUCCESS, payload: false});
            }, 2000);
        }
    }
}