 import { PrismaClient } from "@prisma/client";
import express from "express";

 const app =express()
 app.use(express.json())

 const prismaClient = new PrismaClient();

 app.get("/",async (req,res)=>{
    const users = await prismaClient.user.findMany();
    res.json({
        users
    })
 })

 app.post("/",async (req,res)=>{
    await prismaClient.user.create({
        data:{
        username:Math.random().toString(),
        password:Math.random().toString(),
        }
    })
    res.json({
        message:"GET endpoint"
    })
 })
 app.listen(3000);