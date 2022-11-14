import * as yup from "yup";

const currentYear = new Date().getFullYear();

export const validationSchema = yup.object().shape({
    brand: yup.string().matches(/^[a-z]+$/, 'Provide an existing brand').required('Field is required').min(4, 'Too short!').max(15, 'Too long!'),
    color: yup.string().matches(/^[a-z]+$/, 'Provide a real color').required('Field is required').min(3, 'Too short!').max(15, 'Too long!'),
    horsepower: yup.number().typeError('Must be a number').required('Field is required').min(100, 'Too slow').max(1000, 'What a beast!'),
    bodyStyle: yup.string().matches(/^[a-z]+$/, 'Provide a real type').required('Field is required').min(5, 'Too short!').max(50, 'Too long!'),
    yearOfRelease: yup.number().typeError('Must be a number').required('Field is required').min(1900, 'This car seems to be too old').max(currentYear, 'Back to the future'),
});
