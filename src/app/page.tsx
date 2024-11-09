import React from "react";
import Navbar from "../app/components/Navbar";
import Cardsole from "./components/Cardsole";
import Progressor from "./components/Progressor";
import Productlist from "./components/Productlist";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Burger from "./components/Burger";
import MenuItems from "../app/components/Menuitem";
import Reservation from "./components/Reservation";
import Testimonials from "../app/components/Testimonials";






export default function Home(){
  return(
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white">
<Navbar/>
<Cardsole/>
<Progressor/>
<Productlist/>
<Banner/>
<Burger/>
<MenuItems/>
<Offer/>
<Card/>
<Reservation />
<Testimonials/>
<Footer/>
    </div>
    )
}