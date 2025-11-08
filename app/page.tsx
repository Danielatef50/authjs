import { auth } from "@/lib/auth";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const  page= async()=> {
  const session=await auth()
  if(!session)redirect("/sign-in")
  return (
    <div>
      <h2>Signed in as :</h2>
      <h3>Todo</h3>
      <Link href='/sign-up'><button>Sign out</button></Link>
    </div>
  );
}

export default page