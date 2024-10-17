import React , {useEffect} from "react";
import About_usCss from "./about css/about.module.css";
import bannerImg from "../../assets/images/about-us-banner-img.jpg";
import img from '../../assets/images/furniture/bookshelf.jpg'


function About_us() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
}, []);

  return (
    <>
      <div className={About_usCss.aboutSection}>
        <div className={About_usCss.aboutBanner}>
          <img src={bannerImg} alt="" className={About_usCss.img}/>
          <h1 className={About_usCss.head1}>About us</h1>
        </div>
        <div className={About_usCss.parent}>
          <div className={About_usCss.parent2}>
            <div className={About_usCss.main}>
              {/* <div className={About_usCss.div1}></div> */}
              <div className={About_usCss.div2}>
                <img src={img} alt="" />
              </div>
            </div>
          </div>

          {/* contant */}

          <div className={About_usCss.content_parent} style={{marginLeft:"20px"}}>
            <div className={About_usCss.head}>
              <h1 style={{marginLeft:"10px"}}>About Us</h1>
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
      </div>
    </>
  );
}

export default About_us;
