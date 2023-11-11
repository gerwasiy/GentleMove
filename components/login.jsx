import { Button, Card, Text} from "@geist-ui/core";
import styles from "../styles/Auth.module.scss"
import Router from "next/router";
import { useState } from "react";



export default function Login() {

  return (
    <Card width="100%" shadow>
      <div className={styles.authCard}>
      <Text h2>Увійти</Text>
      <Button>
        Google
      </Button>
      </div>
    </Card>
  );
}
