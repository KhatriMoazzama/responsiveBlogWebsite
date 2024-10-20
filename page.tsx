import Image from "next/image";


export default function Home() {
  return (
    <div className="mainContainer">
      <h1 className="homeHeading">    
        Welcome to  the world of Art
      </h1>
    <div className="homeContainer">  
      <img src="\homeimage.avif" className="homeimage"/>
    </div>
      
    </div>
   
  );
}
