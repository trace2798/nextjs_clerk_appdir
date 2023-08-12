import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 text-center">
      <h1 className="mb-2 text-3xl font-bold">Grafbase x Clerk</h1>
      <h1 className="mb-10 text-xl font-bold">
        App directory with grafbase.config.ts integration{" "}
      </h1>
      <Image src="/clerk.webp" alt="home_image" width={1000} height={1000} />
    </main>
  );
}
