import styles from "/styles/Catalog.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/product_card";

export default function Catalog() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.categories}>
          <h2 className={styles.categories_title}>Комплекти</h2>
          <h2 className={styles.categories_title}>Лосіни</h2>
          <h2 className={styles.categories_title}>Шорти</h2>
          <h2 className={styles.categories_title}>Топи</h2>
        </section>
        <section className={styles.products_title}>
          <div className={styles.products}>
            <Card />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
