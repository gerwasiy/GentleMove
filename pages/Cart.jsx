import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Cart.module.scss";

export default function Cart() {
  return (
    <>
      <Header />
      <main className="page">
        <h1>Кошик</h1>
        <section className={styles.empty_cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="264"
            height="264"
            fill="none"
          >
            <g clip-path="url(#a)">
              <path
                fill="#C8AD7F"
                fill-opacity=".66"
                d="M131.559 264c67.969 0 123.069-13.502 123.069-30.158s-55.1-30.158-123.069-30.158c-67.97 0-123.07 13.502-123.07 30.158S63.59 264 131.56 264Z"
              />
              <path
                fill="#E1CFAF"
                d="M206.836 93.468H56.294v37.633h150.542V93.468Z"
              />
              <path
                fill="#C8AD7F"
                d="m188.013 109.601 16.133-16.133h5.367v37.629h-5.367l-16.133-21.496Z"
              />
              <path
                fill="#C8AD7F"
                fill-opacity=".42"
                d="M188.013 109.601v21.5h16.133l-16.133-21.5Z"
              />
              <path
                fill="#C8AD7F"
                d="M75.1 109.601 58.988 93.468h-5.384v37.629h5.383L75.1 109.601Z"
              />
              <path
                fill="#C8AD7F"
                fill-opacity=".42"
                d="M75.1 109.601v21.5H58.988l16.112-21.5Z"
              />
              <path
                fill="#C8AD7F"
                d="M199.456 238.627H63.657c-5.552 0-10.053-4.504-10.053-10.053v-97.473h155.909v97.473c0 5.549-4.5 10.053-10.057 10.053Z"
              />
              <path
                fill="#1E1E1E"
                d="M107.365 152.613a8.056 8.056 0 0 1-8.056 8.056c-4.467 0-8.076-3.61-8.076-8.056a8.065 8.065 0 0 1 8.076-8.073c4.447 0 8.056 3.609 8.056 8.073ZM171.88 152.613a8.056 8.056 0 0 1-8.056 8.056c-4.463 0-8.072-3.61-8.072-8.056a8.066 8.066 0 0 1 8.072-8.073c4.447 0 8.056 3.609 8.056 8.073Z"
              />
              <path
                fill="#F5F5F5"
                d="M131.559 203.688c-19.268 0-34.94-15.687-34.94-34.955v-16.116a2.674 2.674 0 0 1 2.69-2.69 2.67 2.67 0 0 1 2.673 2.69v16.116c0 16.319 13.275 29.572 29.572 29.572 16.302 0 29.573-13.258 29.573-29.572v-16.116a2.682 2.682 0 0 1 2.689-2.69 2.688 2.688 0 0 1 2.694 2.69v16.116c.004 19.268-15.684 34.955-34.951 34.955ZM131.625 40.004c-1.015 0-1.84.825-1.84 1.84v31.305c0 1.014.825 1.84 1.84 1.84a1.841 1.841 0 0 0 1.839-1.84V41.844c0-1.015-.825-1.84-1.839-1.84ZM88.3 53.947a1.837 1.837 0 0 0 0 2.598l14.825 14.83a1.838 1.838 0 0 0 2.599-2.599L90.898 53.951a1.834 1.834 0 0 0-2.598-.004ZM174.813 53.844a1.837 1.837 0 0 1 0 2.598l-14.825 14.826a1.838 1.838 0 1 1-2.599-2.6l14.826-14.824a1.837 1.837 0 0 1 2.598 0ZM66.895 70.406a2.54 2.54 0 1 0 0-5.082 2.54 2.54 0 0 0 0 5.082ZM193.537 77.13a2.541 2.541 0 1 0 0-5.083 2.541 2.541 0 0 0 0 5.082ZM74.993 13.328c-.797 0-1.444.648-1.444 1.444v9.405c0 .796.647 1.443 1.444 1.443.796 0 1.443-.647 1.443-1.443v-9.405c0-.796-.647-1.444-1.444-1.444Z"
              />
              <path
                fill="#F5F5F5"
                d="M81.25 19.585c0-.796-.647-1.443-1.444-1.443h-9.405c-.796 0-1.443.647-1.443 1.444 0 .796.647 1.443 1.443 1.443h9.405c.797 0 1.444-.647 1.444-1.444ZM181.756 31.878c-.796 0-1.444.648-1.444 1.444v9.405c0 .796.648 1.444 1.444 1.444.796 0 1.443-.648 1.443-1.444v-9.405c0-.8-.647-1.444-1.443-1.444Z"
              />
              <path
                fill="#F5F5F5"
                d="M188.013 38.132c0-.797-.647-1.444-1.443-1.444h-9.405c-.796 0-1.444.647-1.444 1.444 0 .796.648 1.443 1.444 1.443h9.405c.796 0 1.443-.643 1.443-1.444ZM160.227 9.042a4.483 4.483 0 0 1-4.479-4.48c0-2.47 2.008-4.48 4.479-4.48a4.484 4.484 0 0 1 4.48 4.48 4.487 4.487 0 0 1-4.48 4.48Zm0-6.443c-1.08 0-1.959.878-1.959 1.96 0 1.08.879 1.958 1.959 1.958 1.081 0 1.96-.878 1.96-1.959 0-1.076-.879-1.96-1.96-1.96ZM108.504 36.358a4.484 4.484 0 0 1-4.48-4.48c0-2.47 2.009-4.48 4.48-4.48a4.484 4.484 0 0 1 4.48 4.48 4.487 4.487 0 0 1-4.48 4.48Zm0-6.443a1.96 1.96 0 0 0-1.959 1.959c0 1.08.878 1.96 1.959 1.96a1.96 1.96 0 0 0 1.959-1.96c0-1.077-.878-1.96-1.959-1.96Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h264v264H0z" />
              </clipPath>
            </defs>
          </svg>
          <span>У кошику немає товарів</span>
          <button>
            <Link href={"Catalog"}>Перейти в каталог</Link>
          </button>
        </section>
      
      </main>
      <Footer />
    </>
  );
}