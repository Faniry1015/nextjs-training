import React from 'react'
import { getData } from './data'

export const GET = async () => {
    return Response.json(getData)
}