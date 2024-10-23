import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return(
    <div className="headerContainer">
      <div className="headingContainer">
    <h1 className="heading">
      Felt With Love
    </h1>
      </div>
    
    <ul className="headerLinks">
      <Link href="\"><li className="link">Home</li></Link> 
      <Link href="\about-us"><li className="link">About us</li></Link>
      <Link href="\contact-us"><li className="link">Contact us</li></Link>
      <Link href="\products"><li className="link">Products</li></Link>
    </ul>
  </div>
  )
  
}