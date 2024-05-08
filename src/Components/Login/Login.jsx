import styles from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../State/Reducers/login.slice";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    const formData = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(formData));
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form>
        <label className={styles.label}>Username:</label>
        <input
          type="text"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label className={styles.label}>Password:</label>
        <input
          type="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
