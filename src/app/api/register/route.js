import { dbConnection } from "@/db/database";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser } from "../../../controllers/user";

export const POST = async( req ) => {
    const { name, email, password } = await req.json();

    await dbConnection();

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = {
        name,
        email,
        password: hashedPassword
    };

    try {
        await createUser(newUser);
    } catch (error) {
        return new NextResponse (error.message, {
            status: 500
        });
    }

    return new NextResponse ("User has been created successfully", {
        status: 201
    });

}