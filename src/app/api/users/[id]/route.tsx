import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/Prisma"
interface Params{
    params: {
        id:string;
    }
}

interface User{
    id:number,
    name:string,
    email:string
}

//single object

export async function GET(request:NextRequest,{params:{id}}:Params){

    const user = await prisma.user.findUnique({
        where:{
            id:parseInt(id)
        }
    })

    if(!user){
        return NextResponse.json({
            error:"Not found"
        },
        {
            status:404
        }
    )
    }
    return NextResponse.json({user})
}

export async function PUT(request: NextRequest,{params:{id}}:Params){
    const body: User = await request.json();

    if (id> 3){
        return NextResponse.json(
            {
                error:'User not found'
            },
            {
                status: 404
            }
        )
    }
    // update user
    return NextResponse.json({
        id:body.id,
        name:body.name,
        email:body.email
    })
}

//Delete
export function DELETE(request: NextRequest,{params:{id}}:Params){

    if (id> 3){
        return NextResponse.json(
            {
                error:'User not found'
            },
            {
                status: 404
            }
        )
    }

    return NextResponse.json({
        msg:"user deleted successfully"
    })
}