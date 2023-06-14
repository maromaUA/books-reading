import {Formik, Field, Form, useFormik} from "formik"
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const Registration = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        onSubmit:values=>{
            dispatch(registerUser(values))
        }
    },
        )
    return (
        <>
        <Formik>
         <Form onSubmit={formik.handleSubmit}>
             <label htmlFor="name">Name</label>
             <Field name="name" type="text"  onChange={formik.handleChange} value={formik.values.name}/>
             <label htmlFor="email">Email Address</label>
             <Field name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
             <label htmlFor="password">Password</label>
             <Field name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
             <button type="submit">Registration</button>
             <Link to="/">Login</Link>
         </Form>
        </Formik>
        </>
     )
}

export default Registration;