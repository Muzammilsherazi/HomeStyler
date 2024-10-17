import React, { useEffect } from "react";
import stCss from "./Sitemap.module.css"
import bannerImg from '../../assets/images/decor/area rug.jpg'
import { Link, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import { furnitureSubProducts, lightingSubProducts, bathroomSubProducts, kitchenSubProducts, decorSubProducts, designs } from '../../components/DropdownItems'
import About_us from "../About/About";
import Contact from "../Contact/Contact";
import Feedback from "../Feedback/Feedback";
import { FaArrowRight } from "react-icons/fa";

function Sitemap() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  return (
    <div className={stCss.parent}>

      <div>
        <h2 className={stCss.h2}>Pages</h2>
        <ul className={stCss.ul}>
          <li>
            <Link className={stCss.links} to='/'><FaArrowRight /> Home</Link>
          </li>
          <li>
            <Link className={stCss.links} to="/about"><FaArrowRight /> About</Link>
          </li>
          <li>
            <Link className={stCss.links} to="/contact"><FaArrowRight /> Contact us</Link>
          </li>
          <li>
            <Link className={stCss.links} to="/feedback"><FaArrowRight /> Feedback</Link>
          </li>

        </ul>
      </div>

      <div>
        <h2 className={stCss.h2}>Furniture</h2>
        <ul className={stCss.ul}>
          {furnitureSubProducts.map(item => (
            <li
              key={item.id}
            >
              <Link className={stCss.links} to={`/${item.path}/${item.category}/${item.id}`}><FaArrowRight /> {item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className={stCss.h2}>Lighting</h2>
        <ul className={stCss.ul} >
          {lightingSubProducts.map(item => (
            <li
              key={item.id}
            >
              <Link className={stCss.links} to={`/${item.path}/${item.category}/${item.id}`}><FaArrowRight /> {item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={stCss.h2}>Decor</h2>
        <ul className={stCss.ul} >
          {decorSubProducts.map(item => (
            <li
              key={item.id}
            >
              <Link className={stCss.links} to={`/${item.path}/${item.category}/${item.id}`}><FaArrowRight /> {item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={stCss.h2}>Kitchen</h2>
        <ul className={stCss.ul} >
          {kitchenSubProducts.map(item => (
            <li
              key={item.id}
            >
              <Link className={stCss.links} to={`/${item.path}/${item.category}/${item.id}`}><FaArrowRight /> {item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={stCss.h2}>Bathroom</h2>
        <ul className={stCss.ul} >
          {bathroomSubProducts.map(item => (
            <li
              key={item.id}
            >
              <Link className={stCss.links} to={`/${item.path}/${item.category}/${item.id}`}><FaArrowRight /> {item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={stCss.h2}>Design Styles</h2>
        <ul className={stCss.ul}>
          {designs.map(item => (
            <li key={item.id}>
              <Link className={stCss.links} to={`/${item.path}/${item.category}/${item.id}`}><FaArrowRight /> {item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Sitemap;
