import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Featured from "./components/Featured";

export default function Home() {

  return (

    <>
      {/* <div className="bg-white absolute top-[10rem] -z-10 h-[45rem] right-[3rem] rounded-full blur-[1rem] w-[5rem]"></div> */}
      <div className="bg-[#462525] absolute top-[40rem] -z-10 left-[5rem] h-[100rem] rounded-full blur-[10rem] w-[60rem]"></div>
      <div className="bg-[#462525] absolute top-[200rem] -z-10 right-[5rem] h-[100rem] rounded-full blur-[10rem] w-[60rem]"></div>
      <Landing firstName="MARIUS" lastName="OLIVIER" />
      <About
        title="À Propos"
        introText="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions."
        imageSrc="/leica.png"
        sideText="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même."
      />
      <Projects />
      <Featured />
    </>
  );
}
