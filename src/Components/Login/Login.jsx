import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { loginValidationSchema } from "../../Utils/yupValidationSchema";
import { login } from "../../State/Session/operations";
const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    const formData = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(formData));
  };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        {() => (
          <Form className={styles.login__form}>
            <div className={styles.field}>
              <Field
                className={styles.login__field}
                type="email"
                name="email"
                placeholder="E-mail"
                autoComplete="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <Field
                className={styles.login__field}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>
            <button className={styles.login__signin} type="submit">
              LOG IN
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
