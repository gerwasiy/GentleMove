import Link from "next/link";
import styles from "../styles/components/header.module.scss"
export default function Nav() {
    return(
    <nav className={styles.nav_container}>
   
    <Link href='/Catalog'>
      Каталог
    </Link>
    <Link href='#'>
      Про нас
    </Link>
  </nav>
    )
}