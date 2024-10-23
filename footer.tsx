import Link from "next/link";

export default function Footer(){
  return(
    <div className="footerContainer">
      <div>
        <ul className="socialIcons">
          <Link href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2FFelt.With.love22&e=AT0MP_Ygvqbo_RNDoghdaFEb68Fgob6lVfa0wR-jLDAvsLiB2VK8z0o0Rm7Uy7GfYIa_r86lnFMqgh0NcZChS7CZU2IbdXk4-Z5kNA" target="_blank" className="icons"><li><ion-icon name="logo-facebook"></ion-icon></li></Link>
          <Link href="https://www.linkedin.com/feed/"  target="_blank" className="icons"><li><ion-icon name="logo-linkedin"></ion-icon></li></Link>
          <Link href="https://github.com/KhatriMoazzama" target="_blank" className="icons"><li><ion-icon name="logo-github"></ion-icon></li></Link>
          <Link href="\contact-us" className="icons" target="_blank"><li><ion-icon name="mail-outline"></ion-icon></li></Link>
          <Link href="https://www.instagram.com/felt_with_lovee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="icons"><li><ion-icon name="logo-instagram"></ion-icon></li></Link>
        </ul>
        <ul className="footerLinks">
        <Link href="\"><li className="link">Home</li></Link> 
        <Link href="\about-us"><li className="link">About us</li></Link>
        <Link href="\contact-us"><li className="link">Contact us</li></Link>
        <Link href="\products"><li className="link">Products</li></Link>
        </ul>
        <p className="endMessage"> &copy; 2024 <a href="https://www.linkedin.com/feed/" className="contactMail">Moazzama Khatri</a> | All rights reserved</p>
      </div>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  </div>
  )
  
}