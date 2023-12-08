import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center text-gray-800">
          Next.js + Tailwind CSS
        </h1>
        <p className="text-xl text-center text-gray-600">
          with TypeScript, ESLint, Prettier, Husky, Lint-Staged, and Absolute
          Imports
        </p>
      </div>
    </main>
  );
}
