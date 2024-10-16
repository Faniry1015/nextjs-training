import { getData } from "../data";
export const GET = async (request: Request, {params}: {params: {id: string}}) => {
    const item = getData.find( element => element.id === parseInt(params.id))
    return Response.json(item)
}

export const PATCH = async (request: Request, {params} : {params: {id: string}}) => {
    const res = await request.json()
    const newLabel = res.label
    const index = getData.findIndex(art => art.id === parseInt(params.id))
    getData[index].label = newLabel

    return Response.json(getData[index])
}

export const DELETE = (request: Request, {params}: {params: {id: string}}) => {
    const index = getData.findIndex(art => art.id === parseInt(params.id))
    getData.splice(index, 1)

    return Response.json(getData)
}