import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import { BsYoutube } from 'react-icons/bs';
import { BsFillChatFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';

export default function Footer() {
  return (
  <div style={{padding: "16px 32px", backgroundColor: "#EEE0C9"}}>
      <div style={{display: "flex", justifyContent: 'space-between'}}>
      <div style={{fontSize: 16, display: "flex", justifyContent: 'center', alignItems: 'center'}}>Refer a Friend <p style={{fontSize: 18, margin: "0 4px"}}>Get $5</p></div>
      <div> <img src="./1.png" alt="logo" width={100} height={100}  style={{borderRadius: "50%"}}/> </div>
      <div style={{display: "flex", justifyContent: 'center', alignItems: "center"}}><AiFillInstagram /> <FaFacebookF /><BsPinterest /> <BsTwitter /> < DiReact /> < BsYoutube /></div>
  </div>
  <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
      <div style={{marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column'}}>BE THE FIRST TO KNOW! 
      <p>Subscribers will receive first access to special offers and limited releases.</p>
      <input id="email_53271786" placeholder="ENTER YOUR EMAIL" style={{background: "#FFFFFF", color: "black", fontSize: "20px", width: "100%", height: "auto", marginBottom: "20px"}}></input>
      <button class="needsclick go952291206 kl-private-reset-css-Xuajs1" type="button" tabindex="0" style={{background: "#000000", color: "white", fontSize: "20px", width: "100%", height: "auto", marginBottom: "20px"}}>SUBSCRIBE</button>
  </div>   
  <div style={{marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>CONTACT US
       <div style={{display: "flex", justifyContent: 'center', alignItems: "center"}}><BsFillChatFill /><p style={{textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: "center"}}><a style={{color: "black"}} href="javascript:void(0)" onClick="openChatWidget">Live Chat</a></p>
       </div>
       <p style={{textAlign: 'center', color: "black"}}>M-F 9:00am - 5:00pm PST</p>
       <div style={{display: "flex", justifyContent: 'center', alignItems: "center"}}><AiTwotoneMail /><p><a style={{color: "black"}} href="mailto:support@vervecoffee.com">support@vervecoffee.com</a></p></div>
       <div style={{display: "flex", justifyContent: 'center', alignItems: "center"}}><BsFillPhoneFill /><p ><a style={{color: "black"}} href="tel:+18314648141">831-464-8141</a></p></div>
  </div>
  <div style={{marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>SUPPORT
        <p><a  style={{color: "black"}} href="">Contact Us</a></p>
        <p><a  style={{color: "black"}} href="">Shipping & Returns</a></p>
        <p><a  style={{color: "black"}} href="">Order Status</a></p>
        <p><a  style={{color: "black"}} href="">Frequently Asked Questions</a></p>
        <p><a  style={{color: "black"}} href="">Manage Subscriptions</a></p>
        <p><a  style={{color: "black"}} href="">Gift Cards</a></p>
  </div>
  <div style={{marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>ABOUT VERVE
        <p><a  style={{color: "black"}} href="">Jobs</a></p>
        <p><a  style={{color: "black"}} href="">Story</a></p>
        <p><a  style={{color: "black"}} href="">Wholesale</a></p>
        <p><a  style={{color: "black"}} href="">Blog</a></p>
        <p><a  style={{color: "black"}} href="">Locations</a></p>
        <p><a  style={{color: "black"}} href="">Farmlevel</a></p> 
  </div>
  </div>
  <div style={{display: "flex", gap: "20px"}}>
        <p><a  style={{color: "black"}} href="">Terms of Use</a></p>
        <p><a  style={{color: "black"}} href="">Accessibility Statement</a></p>
        <p><a  style={{color: "black"}} href="">Privacy Policy</a></p>
        <p><a  style={{color: "black"}} href="">Do Not Sell or Share My Personal Information</a></p>
  </div>
  <div style={{display: "flex", justifyContent: 'space-between'}}>  
        <div style={{marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center"}}>© 2023 VERVE COFFEE ROASTERS, ALL RIGHTS RESERVED</div>
        <div style={{marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center"}}>104 BRONSON ST, SUITE 19 SANTA CRUZ, CA 95062</div>
  </div>
  </div>    
  )
}
