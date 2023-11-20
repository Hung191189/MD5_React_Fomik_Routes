import React from "react";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function CreateStudent(){
    const navigate = useNavigate()
    return(
        <>
            <Formik initialValues={
                {name: '',
                    description: '',
                    action: '',
                    score:''
            }}
                    onSubmit={(values) =>{
                        axios.post("http://localhost:3000/students", values).then(()=>{
                            navigate("/list")
                        })
                    } }
            >
                <Form>
                    <Field name={"name"}></Field>
                    <Field name={"description"}></Field>
                    <Field name={"action"}></Field>
                    <Field name={"score"}></Field>
                    <button type={"submit"} >save</button>
                </Form>
            </Formik>
        </>
    )
}