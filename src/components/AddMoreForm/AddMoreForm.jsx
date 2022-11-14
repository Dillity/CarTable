import React from "react";
import {Field, Form, Formik} from "formik";
import {Button} from "@mui/material";
import {TextField} from 'formik-mui';
import {validationSchema} from "../../validation/validation";
import {useDispatch} from "react-redux";
import {addTableData} from "../../redux/reducers/tableReducer/tableActionCreator";


const AddMoreForm = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(addTableData(values));
        props.handleClose();
    }


    return (
        <Formik initialValues={{brand: '', color: '', horsepower: '', bodyStyle: '', yearOfRelease: ''}}
                validateOnBlur
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            validationSchema={validationSchema}
        >
            {({
                  values,
                  handleChange, handleBlur,
                  isValid, handleSubmit, dirty
              }) => (
                <Form>
                    <Field sx={{mb: 1}}
                           component={TextField}
                           variant={'filled'}
                           fullWidth
                           required
                           type="text"
                           label={'Brand'}
                           name={'brand'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           values={values.brand}/>


                    <Field component={TextField}
                           sx={{mb: 1}}
                           variant={'filled'}
                           fullWidth
                           required
                           type="text"
                           label={'Color'}
                           name={'color'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           values={values.color}/>


                    <Field component={TextField}
                           sx={{mb: 1}}
                           variant={'filled'}
                           fullWidth
                           required
                           type="text"
                           label={'Horsepower'}
                           name={'horsepower'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           values={values.horsepower}/>


                    <Field component={TextField}
                           sx={{mb: 1}}
                           variant={'filled'}
                           fullWidth
                           required
                           type="text"
                           label={'Body style'}
                           name={'bodyStyle'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           values={values.bodyStyle}/>


                    <Field component={TextField}
                           sx={{mb: 1}}
                           variant={'filled'}
                           fullWidth
                           required
                           type="text"
                           label={'Year of release'}
                           name={'yearOfRelease'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           values={values.yearOfRelease}/>


                    <Button color="primary"
                            fullWidth
                            variant="contained"
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type="submit"
                    >Add</Button>

                </Form>
            )}
        </Formik>
    );
}

export default AddMoreForm;