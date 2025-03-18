"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data, status } = useSession();

  console.log("Session", data);  // Log the session
  console.log("Status", status);
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
    </div>
  );
}
