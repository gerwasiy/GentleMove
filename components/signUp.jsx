import { Button, Card, Input, Note, Text } from "@geist-ui/core";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Auth.module.scss";

import { useAuth } from "../contexts/AuthContext";

export default function SignUp() {
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function handleSubmit(e) {
  
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Не вдалося підтвердити пароль");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Не вдалося створити обліковий запис");
    }
  }

  return (
    <Card style={{display:'flex'}} width="100%" shadow>
   <Text h2>Створити Аккаунт</Text>
      <form style={{ alignItems: "flex-start" }} className={styles.authCard}>
        <Input ref={emailRef} label="email" placeholder="example@gmail.com" />
        <Input.Password ref={passwordRef} label="Пароль" />
        <Input.Password ref={passwordConfirmRef} label="Підтвердіть пароль" />
        <Button onClick={handleSubmit} style={{ alignSelf: "center" }}>
          Зареєструватися
        </Button>
      </form>
      <Note style={{ justifyContent: "center" }} width='fit-content' label='Помилка' type="error">
      {error}
      </Note>
    </Card>
  );
}
