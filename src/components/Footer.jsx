import React, { useEffect, useState } from 'react'
import footerCss from './components-css/Footer.module.css'
import logo from '../assets/images/Logo.png'
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';

function Footer() {

  return (
    <>
      <footer>
        <div className={`${footerCss.first}`}>
          <img src={logo} alt="" />
          <p>
            At HomeStyler, we're passionate about transforming spaces into stunning, functional living areas.
            Our curated design styles blend aesthetics with practicality to help you create the perfect home environment.
          </p>
        </div>
        <div className={`${footerCss.second}`}>
          <h1>Our Info</h1>
          <p>
            HomeStyler is your go-to resource for home interior design inspiration.
            We offer a wide range of styles and products to suit every taste and budget.
            Explore our detailed design guides and product listings to find the perfect elements
            Ffor your home. Whether you’re updating a room or renovating your entire space,
            HomeStyler provides the inspiration and tools you need for a successful design project.
          </p>
        </div>
        <div className={`${footerCss.third}`}>
          <h1>Stay Connected</h1>
          <p>Follow us on social media for the latest trends and exclusive offers:</p>
          <div className={`${footerCss.links}`}>
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.pinterest.com/"><FaPinterest /></a>
          </div>
          <img src={logo} alt="" />
        </div>

        <div className={`${footerCss.fourth}`}>
          <div className={`${footerCss.page_links}`}>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="about">
              <li>About</li>
            </NavLink>
            <NavLink to="feedback">
              <li>Feedback</li>
            </NavLink>
            <NavLink to="contact">
              <li>Contact us</li>
            </NavLink>
            <NavLink to="sitemap">
              <li>SiteMap</li>
            </NavLink>
          </div>
        </div>
        <div className={`${footerCss.fifth}`}>
          <p>© Copyright 2024 - HomeStyler. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer