import React from "react";
import './footer.css'

export function Footer() {
    return (
        <>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="Mobile-bottom-main">
                <div className="Mobile-bottom">
                    <div class="Mobile-social-icons">Let's get Social
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>                   
                    </div>
                    <h1 className="Mobile-h1">Privacy Policy . Terms & Conditions</h1>
                    <h2 className="Mobile-h2">@ 2024 Manikandan Ashok. All Rights Reserved.</h2>
                </div>
            </div>
        </>
    )
}