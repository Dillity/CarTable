import React, {Fragment, useEffect, useState} from 'react';

import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {propsType} from "../../types/types";
import {useSelector} from "react-redux";
import {appStateType} from "../../redux/store/store";

const MainTable: React.FC<propsType> = (props) => {


    const isFetching = useSelector((state: appStateType) => state.table.isFetching);

    return (
        <Fragment>
            <TableContainer component={Paper} sx={{mt: 1, backgroundColor: "#F8F8F8", minWidth: 250}}>
                <Table sx={{minWidth: 250}}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Brand</b></TableCell>
                            <TableCell><b>Color</b></TableCell>
                            <TableCell><b>Horsepower(hp)</b></TableCell>
                            <TableCell><b>Body style</b></TableCell>
                            <TableCell><b>Year of release</b></TableCell>
                        </TableRow>
                       </TableHead>
                    <TableBody>
                        {props.tableInfo.length > 0 && props.tableInfo.map((item: any) => (
                            <TableRow
                                key={item._id}
                            >
                                <TableCell>{item.brand}</TableCell>
                                <TableCell>{item.color}</TableCell>
                                <TableCell>{item.horsepower}</TableCell>
                                <TableCell>{item.bodyStyle}</TableCell>
                                <TableCell>{item.yearOfRelease}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isFetching && <CircularProgress sx={{m: 1}} />}
            <Typography sx={{m: 1}} variant="h4">{props.tableError}</Typography>
        </Fragment>
    );
}

export default MainTable;