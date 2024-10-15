import React from "react";
import { articles } from "@/app/data";
import Link from "next/link";

const ArticleDetails = ({ params }: { params: { articleId: string } }) => {
  const currentArticle = articles.find(
    (article) => article.id === parseFloat(params.articleId)
  );
  console.log(currentArticle);
  return <>
    <h4 style={{margin: '0px'}}>Titre : {currentArticle?.title}</h4>
    <h5 style={{margin: '0px'}}>Date : {currentArticle?.date}</h5>
    <h5 style={{margin: '0px'}}>Auteur : {currentArticle?.author}</h5>
    <p>{currentArticle?.description}</p>
    <Link href='../articles'>Retour à la liste des articles</Link>
  </>
};

export default ArticleDetails;
