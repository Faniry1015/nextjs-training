import { getData } from "../data"
export const GET = async (request: Request, { params }: {params: { id: string }})  => {
    const article = getData.find((art) => art.id === parseInt(params.id))
    return Response.json(article)
}