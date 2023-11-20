import {useParams} from "react-router-dom";
import {logDOM} from "@testing-library/react";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import React from "react";

export default function EditStudent(){
    const {id} = useParams();
    console.log(id)
    return(

    <>
        <h1>Edit</h1>
        <Formik initialValues={
            {name: '',
                description: '',
                action: '',
                score:''
            }}
                onSubmit={(values) =>{
                    axios.put("http://localhost:3000/students/" + id , values).then(()=>{
                        alert("ok")
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