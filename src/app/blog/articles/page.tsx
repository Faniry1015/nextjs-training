'use client'
import { articles } from "@/app/data";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const BlogHome = () => {
  const router = useRouter()
  const backToBlog = () => {
    console.log("retour au blog")
    router.back() //Revenir en arrière(lien précédent)
  }
  return (
    <>
    <button onClick={backToBlog}>Retour au blog</button>
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
