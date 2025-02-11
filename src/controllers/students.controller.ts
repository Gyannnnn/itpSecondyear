import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const hello = async(req:Request,res:Response)=>{
    res.json({
        message:"Hello World"
    })

}

export const createStudent = async(req:Request,res:Response)=>{
    const {name,gender,graduationYear,email,registrationNumber,branch,section,whatsappNo,primaryDomain,secondaryDomain} = req.body;

    if(!name || !gender || !graduationYear || !email || !registrationNumber || !branch || !section || !whatsappNo || !primaryDomain || !secondaryDomain || name ==="" || gender ==="" || graduationYear ==="" || email ==="" || registrationNumber ==="" || branch ==="" || section ==="" || whatsappNo ==="" || primaryDomain ==="" || secondaryDomain ===""){
        res.json({
            message:"Please fill all the fields"
        })
        return;
    }

    try {
        const regesteredStudents = await prisma.students.create({
            data:{
                name,
                gender,
                graduationYear,
                email,
                registrationNumber,
                branch,
                section,
                whatsappNo,
                primaryDomain,
                secondaryDomain
            }
        })
        if(!regesteredStudents){
            res.json({
                message:"Something went wrong"
            })
            return;
        }
        res.json({
            message:"Student Regestered Successfully",
            data:regesteredStudents
        })
    } catch (error) {
        const err = error as Error;
        res.json({
            message:err.message
        })
        
    }
}

export const getAllRegesteredStudents = async(req:Request,res:Response)=>{
    try {
        const regesteredStudents = await prisma.students.findMany();
        if(!regesteredStudents || regesteredStudents.length === 0){
            res.json({
                message:"No Students Regestered"
            })
            return;
        }
        res.json({
            message:"All Regestered Students",
            data:regesteredStudents
        })
        
    } catch (error) {
        const err  = error as Error;
        res.json({
            message:err.message
        })
        
    }
}