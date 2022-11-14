import React, {Fragment} from 'react';
import {useSelector} from "react-redux";

import MainTableContainer from "./components/Table/tableContainer";
import Header from "./components/Header/Header"
import {appStateType} from "./redux/store/store";

import {Alert, Container, Snackbar} from "@mui/material";
import './App.css';


const App: React.FC = () => {

    const isSuccess = useSelector((state: appStateType) => state.table.isSuccess);

    return (
        <Fragment>

            <Container className="App">
                <Header/>
                <MainTableContainer/>
            </Container>

            <Snackbar open={isSuccess}>
                <Alert severity="success">Added successfully</Alert>
            </Snackbar>

        </Fragment>
    );
}

export default App;
