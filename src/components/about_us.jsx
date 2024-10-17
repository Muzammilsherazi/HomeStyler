import React from "react";
import auCss from "./About_us_img.module.css";
import aurCss from "./About_us_right.module.css";
import About_usCss from "./about_us.module.css";
import img from "../images/div4.jpg";

function About_us() {
  return (
    <>
      <div className={About_usCss.parent}>
        <div className={auCss.parent}>
          <div className={auCss.main}>
            <div className={auCss.div1}></div>
            <div className={auCss.div2}>
              <img src={img} alt="" />
            </div>
            <div className={auCss.div3}></div>
          </div>
        </div>

        {/* contant */}

        <div className={aurCss.content_parent}>
          <div className={aurCss.head}>
            <h1>About Us</h1>
          </div>
          <p>
            Home Styler is a company dedicated to helping you create a home that
            truly reflects your personal style. Our team of experienced interior
            designers and home stylists are passionate about transforming your
            living spaces into beautiful and functional environments.
          </p>
          <p>
            We offer a wide range of services, including interior design
            consultations, home styling, virtual design, and home staging.
            Whether you're looking to completely redesign your home or simply
            add a few finishing touches, we have the expertise to help you
            achieve your vision. At Home Styler, we believe that your home
            should be a place of comfort and inspiration. Our goal is to create
            spaces that are not only visually appealing but also functional and
            enjoyable. We work closely with our clients to understand their
            unique needs and preferences, and we strive to deliver exceptional
            results that exceed their expectations.
            <p>
              Our goal is to create spaces that are not only visually appealing
              but also functional and enjoyable. We work closely with our
              clients to understand their unique needs and preferences, and we
              strive to deliver exceptional results that exceed their
              expectations.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default About_us;
