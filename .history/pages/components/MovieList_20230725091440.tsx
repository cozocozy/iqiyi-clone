import React from "react";
import styles from "./BookList.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function MovieLst({ movie }) {
  const { asPath } = useRouter();
  return (
    <div>
      <div>
        <img src={movie.cover_url} alt="" />
      </div>
      <div className={styles.text}>
        <Link href={{ pathname: "/[slug]/", query: { slug: movie.slug } }}>
          <div className={styles.title}>{movie.title}</div>
        </Link>
        <div className={styles.lang}>{movie.lang}</div>
      </div>
    </div>
  );
}

export default MovieList;
