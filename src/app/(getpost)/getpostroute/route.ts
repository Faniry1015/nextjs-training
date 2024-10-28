import React from "react";
import { getData } from "./data";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParam = request.nextUrl.searchParams;
  const query = searchParam.get("search");
  const filteredData = query
    ? getData.find((art) => art.label.includes(query))
    : getData;
  return Response.json(filteredData);
};

export const POST = async (request: Request) => {
  const article = await request.json();
  const newArticle = {
    id: getData.length + 1,
    label: article.label,
  };
  getData.push(newArticle);

  return new Response(JSON.stringify(newArticle), {
    headers: {
      "content-type": "application/json",
    },
    status: 201,
  });
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const label = body.label;
  const index = getData.findIndex(
    (article) => article.id === parseInt(params.id)
  );
  getData[index].label = label;

  return Response.json(getData[index]);
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
    const index = getData.findIndex(article => {
        article.id === parseInt(params.id)
    })
    getData.splice(index, 1)
    return Response.json(getData)
};
