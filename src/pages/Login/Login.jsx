import {Formik, Field, Form} from "formik"
import { Link } from "react-router-dom";

const Login = () => {
    

    return (
       <>
       <Formik initialValues={{ email: "", password: "" }}>
        <Form>
        <label htmlFor="email">Email Address</label>
            <Field name="email" type="email"/>
        <label htmlFor="password">Password</label>
            <Field name="password" type="password"/>
            <button type="submit">Login</button>
            <Link to="registration">Register</Link>
        </Form>
       </Formik>
       </>
    )
}

export default Login;