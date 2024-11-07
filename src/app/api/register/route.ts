
export const POST = async( req: Request ) => {
    const { name, email, password } = await req.json();
}