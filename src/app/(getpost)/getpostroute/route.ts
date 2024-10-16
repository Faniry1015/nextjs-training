import React from 'react'
import { getData } from './data'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
    const searchParam = request.nextUrl.searchParams
    const query = searchParam.get('search')
    const filteredData = query ? getData.find(art => art.label.includes(query)) : getData
    return Response.json(filteredData)
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