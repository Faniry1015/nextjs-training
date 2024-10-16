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