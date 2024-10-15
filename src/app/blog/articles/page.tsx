import { articles } from "@/app/data";
import Link from "next/link";
import React from "react";

const page = () => {
  return articles.map((article) => {
    return (
      <>
        <h5 style={{marginBottom: '5px'}}>{article.title}</h5>
        <Link href={`articles/${article.id}`}>Voir l'article</Link>
      </>
    );
  });
};

export default page;
