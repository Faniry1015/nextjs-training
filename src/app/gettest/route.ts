import React from 'react'
import { getData } from './data'

export const GET = async () => {
    return Response.json(getData)
}

export const POST = async (request: Request) => {
    const article = await request.json()
    const newArticle = {
        id: getData.length + 1,
        label: article.label
    }
    getData.push(newArticle)

    return new Response(JSON.stringify(newArticle), {
        headers: {
            'content-type': 'application/json'
        },
        status: 201
    })
}