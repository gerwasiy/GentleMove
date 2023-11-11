import styles from "../styles/components/productCard.module.scss";

export default function ProductCard({ image, name, description, size, price }) {

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>{image}</div>
      <div className={styles.card_name}>{name}</div>
      <div className={styles.card_description}>{description}</div>
      <div className={styles.card_description}>{size}</div>
      <div className={styles.card_price}>{price}</div>
    </div>
  );
}
