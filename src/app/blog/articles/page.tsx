import { articles } from "@/app/data";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Faniry R - Blog",
};

const BlogHome = () => {
  return (
    <>
    <h4><Link href='../blog'>Retour au blog</Link></h4>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h5 style={{ marginBottom: "5px" }}>{article.title}</h5>
            <Link href={`articles/${article.id}`}>Voir l'article</Link>
          </div>
        );
      })}
      ;
    </>
  );
};

export default BlogHome;
