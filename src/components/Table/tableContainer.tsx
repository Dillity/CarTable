import React, {FormEvent, useCallback, useEffect, useState} from "react";

import MainTable from "./table";

import {useDispatch, useSelector} from "react-redux";


import {getTableData} from "../../redux/reducers/tableReducer/tableActionCreator";
import {appStateType} from "../../redux/store/store";




const MainTableContainer: React.FC = () => {

    const [isFetching, setIsFetching] = useState<boolean>(false);

    const dispatch = useDispatch();

    const tableInfo = useSelector((state: appStateType) => state.table.tableInfo);
    const currentPage = useSelector((state: appStateType) => state.table.currentPage);
    const tableError = useSelector((state: appStateType) => state.table.error);

    useEffect(() => {
        if(isFetching) {
            // @ts-ignore
            dispatch(getTableData(currentPage + 1));
            setIsFetching(false);
        }
    }, [isFetching]);

    useEffect(() => {
        // @ts-ignore
        dispatch(getTableData(1));
    }, []);



    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setIsFetching(true);
        }
    };

    return (
            <MainTable tableInfo={tableInfo} tableError={tableError}/>
    );
}

export default MainTableContainer;