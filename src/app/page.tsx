import { auth } from "@/auth";
import Logout from "@/components/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";



export default async function Home() {
  const session = await auth();

  if( !session?.user ) redirect('/login');

  return (
    <div>
      <h1>Welcome {session?.user?.name}</h1>
      <Image 
      src={session?.user?.image || ''} 
      alt={session?.user?.name || ''} 
      width={100} 
      height={100} />
      <Logout>
        <button>Logout</button>
      </Logout>
    </div>
  );
}
