import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="py-20 mx-auto flex flex-col text-center items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">
          Your home away from {' '} <span className="text-violet-700">Home</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to{' '} <span className="text-violet-700 font-bold">Shri Krishna Chatravaas!</span>  We provide with home-like care and guardianship for your special one away from home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>Browse Rooms</Link>
          <Button variant="outline">About Us &rarr;</Button>
        </div>
      </div>
      //TODO: Add Some Pictures for Hostel Rooms
    </div>
  );
}
