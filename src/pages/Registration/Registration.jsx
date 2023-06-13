import {Formik, Field, Form} from "formik"
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const Registration = () => {
    const dispatch = useDispatch()
    return (
        <>
        <Formik initialValues={{ email: "", password: "" }}>
         <Form>
             <label htmlFor="name">Name</label>
             <Field name="name" type="text"/>
             <label htmlFor="email">Email Address</label>
             <Field name="email" type="email"/>
             <label htmlFor="password">Password</label>
             <Field name="password" type="password"/>
             <button type="submit">Registration</button>
             <Link to="/">Login</Link>
         </Form>
        </Formik>
        </>
     )
}

export default Registration;