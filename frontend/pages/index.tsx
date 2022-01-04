import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="border-4 border-black py-4 px-6 mb-5">
          <h1 className="text-2xl text-center font-extrabold uppercase tracking-wide">
            CV Generator
          </h1>
        </div>
        <Link href="preview">
          <button className="rounded-md bg-cyan-500 hover:bg-cyan-600 transition py-2 px-6 text-white text-lg shadow-lg">
            Preview
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
