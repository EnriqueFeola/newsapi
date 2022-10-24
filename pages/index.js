import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import PageLayout from "../components/PageLayout.jsx";
import { useState, useEffect } from "react";

export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos articulos</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <img
                alt={`Image for the article ${article.title}`}
                src={article.urlToImage}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=650563a2056f47c59ba2b1736c7ac9c9"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}
