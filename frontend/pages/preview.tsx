import { NextPage } from "next";
import { Header } from "../components/header";
import { Experience } from "../components/experience";

const Preview: NextPage = () => {
  return (
    <div className="bg-white h-screen max-w-5xl mx-auto md:px-20 px-5 py-20 relative border-gray-100 shadow-2xl rounded-md shadow-slate-500/50 overflow-hidden">
      <div className="absolute top-0 left-0 bg-cyan-500 h-1 w-full content-none" />
      <Header />
      <Experience />
    </div>
  );
};

export default Preview;
