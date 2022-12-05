import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Styles from "../styles/login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: Yup.object().shape({
    //   email: Yup.string()
    //     .email("Invalid email address")
    //     .required("Please enter email"),
    //   password: Yup.string().required("Please enter password")
    // }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("https://dummyjson.com/auth/login", {
          username: values.email,
          password: values.password,
        })
        .then(function (response) {
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
          notify();
        })
        .catch(function (error) {
          console.log(error.response.data.message);
          wrong();
        });
    },
  });

  const notify = () => toast("welcome");
  const wrong = () => toast("invalid");

  return (<>
    <form className={Styles.form} onSubmit={formik.handleSubmit}>
      <div className={Styles.field}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <div className={Styles.field}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
      <button type="submit" className={Styles.submitbtn}>
        Login
      </button>
      <ToastContainer />
    </form>
    <Link href="/getProduct">go to AG Grid</Link>
    </>
    
  );
}
