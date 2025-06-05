
'use client'
import { Landing } from "@/app/components/Landing";
import Projects from "./components/Projects";
import Featured from "./components/Featured";
import Contact from './components/Contact'

export default function Home() {

  return (
    <>
    <div className="w-full">
      <div className="bg-[#ffa5a5] dark:bg-[#462525] absolute top-[60rem] -z-10 h-[90rem] rounded-full blur-[10rem] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem]"></div>
      {/* <div className="bg-[#ffa5a5] dark:bg-[#462525] absolute top-[150rem] -z-10 h-[100rem] rounded-full blur-[10rem] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem]"></div> */}
      <Landing/>
      <Projects />
      <Featured />
      <Contact />
      </div>
    </>
  );
}
