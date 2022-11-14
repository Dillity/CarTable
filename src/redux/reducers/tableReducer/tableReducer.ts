import {GET_TABLE_DATA, SET_IS_FETCHING, SET_SUCCESS, SET_TABLE_DATA, SET_TABLE_ERROR} from "./tableActionTypes";
import {tableAPI} from "../../../api/api";
import {tableInfoType} from "../../../types/types";
import {bool} from "yup";


let initialState = {
    tableInfo: [] as Array<tableInfoType>,
    currentPage: 1 as Number,
    totalPages: 1 as Number,
    isFetching: false as boolean,
    isSuccess: false as boolean,
    error: '' as String
}

type initialStateType = typeof initialState;

const tableReducer = (state = initialState, action: any): initialStateType => {

    switch(action.type) {
        case GET_TABLE_DATA:
            return {
                ...state,
                currentPage: action.payload.page,
                totalPages: action.payload.totalPages,
                tableInfo: [...state.tableInfo, ...action.payload.docs]
            }

        case SET_TABLE_DATA:
            return {
                ...state,
                tableInfo: [...state.tableInfo, action.payload]
            }

        case SET_SUCCESS:
            return {
                ...state,
                isSuccess: action.payload
            }

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }

        case SET_TABLE_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}
export default tableReducer;

