import { NextResponse } from "next/server";

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'


const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)

    const todos: Todo[] = await res.json()

    return NextResponse.json(todos)
}


export async function DELETE(request: Request) {
    const { id }: Partial<Todo> = await request.json()

     if (!id) return NextResponse.json({ "message": "id must be provided to delete post.."})

     await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "API_KEY": API_KEY
        }   

     })
     return NextResponse.json({"message":`Tode ${id} deleted.. `})
}