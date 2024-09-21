import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";



export default function Home() {

  


  return (

    
    <>
      <Landing firstName="MARIUS" lastName="OLIVIER" />
      <About
        title="À Propos"
        introText="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions."
        imageSrc="/leica.png"
        sideText="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même."
      />
      <Projects />
    </>
  );
}
