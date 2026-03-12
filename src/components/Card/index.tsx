import { HeartIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

type CardProps = {
  date: string;
  title: string;
  description: string;
  liked?: boolean;
  onLike?: () => void;
};

export function Card({ date, title, description, liked = false, onLike }: CardProps) {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 1200,
      easing: "ease",
      reset: false,
      opacity: 0,
    });

    sr.reveal(".sr-card", { interval: 200 });
    sr.reveal(".sr-date", { delay: 200 });
    sr.reveal(".sr-title", { delay: 300 });
    sr.reveal(".sr-description", { delay: 400 });

  }, []);


  return (
    <main className={`${styles.blog} sr-card`}>
      <article className={styles.rectangle}>
        <header className={`${styles.date} sr-date`}>
          <time>{date}</time>

          <button
            type="button"
            className={styles.likeButton}
            aria-label="Curtir publicação"
            onClick={onLike}
          >
            <HeartIcon className={liked ? styles.liked : styles.unliked} />
          </button>
        </header>

        <div>
          <h2 className={`${styles.title} sr-title`}>
            {title}
          </h2>

          <p className={`${styles.subtitle} sr-description`}>
            {description}
          </p>
        </div>
      </article>
    </main>
  );
}       