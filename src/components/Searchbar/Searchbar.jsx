//import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FiSearch } from 'react-icons/fi';

const initialValues = {
    search: '',
};

const schema = yup.object().shape({
    search: yup.string().required(),
});

export const Searchbar = ({onSubmit}) => {
         
    return (
        <header>
            <Formik
                initialValues = {initialValues}
                validationSchema = {schema}
                onSubmit = {(values, {resetForm}) => {
                    onSubmit(values);
                    resetForm();
                }}
            >
                <Form>
                    <button type="submit">
                        <FiSearch size="16px"/>
                    </button>

                    <Field
                        type="text"
                        name="search"
                        // placeholder="Search images and photos"
                    />
                    <ErrorMessage name='search' component="div" />
                </Form>
            </Formik>
        </header>)
    
};