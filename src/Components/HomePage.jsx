import React from "react";
import "../Css/HomePage.css";
import alovera from "../Images/PNG/aloevera.png";
import snakeplant from "../Images/PNG/snakeplant.png";
import moneyplant from "../Images/PNG/moneyplant.png";
import peaceplily  from "../Images/PNG/peacelilyplant.png";
import cactus from "../Images/PNG/cactusplants.png";
import bamboo  from "../Images/PNG/bambooplants.png";
import rubber from "../Images/PNG/rubberplant.png";
import orchid from "../Images/PNG/orchid.png";
import fernplant from "../Images/PNG/fernplant.png";
import lavendar from "../Images/PNG/lavenderplant.png";
import jadeplant from "../Images/PNG/jadeplant.png";
import spiderplant from "../Images/PNG/spiderplant.png";
import englishivy from "../Images/PNG/enlishivy.png";
import golden from "../Images/PNG/goldenpothos.png";
import bonsai from "../Images/PNG/bonsaiplant.png"
import { useDispatch } from "react-redux";
import { addtocart } from "../Features/userSlice";


const plantsData = [
  { id: 1, name: "Aloe Vera", image:alovera, info: "Easy to care for, purifies air, needs bright indirect sunlight. Ideal for kitchen or living room, helps heal minor cuts." },
  { id: 2, name: "Snake Plant", image:snakeplant , info: "Very low maintenance, ideal for indoors, tolerates low light. Releases oxygen at night, great for bedroom." },
  { id: 3, name: "Money Plant", image:moneyplant , info: "Brings good luck, needs moderate sunlight, easy to propagate. Perfect for office desk or corner." },
  { id: 4, name: "Peace Lily", image:peaceplily , info: "Air-purifying plant, loves indirect light, water weekly. Beautiful white flowers, keeps environment fresh." },
  { id: 5, name: "Cactus", image:cactus , info: "Needs minimal water, prefers bright sunlight, perfect for desks. Adds desert vibes to your room." },
  { id: 6, name: "Bamboo Palm", image:bamboo , info: "Adds a tropical touch, requires moderate sunlight. Helps humidify air naturally." },
  { id: 7, name: "Rubber Plant", image:rubber , info: "Thrives in indirect sunlight, purifies air. Glossy green leaves add elegance to any room." },
  { id: 8, name: "Orchid", image:orchid  , info: "Elegant flowering plant, loves bright indirect light. Requires minimal care, perfect as gift." },
  { id: 9, name: "Fern", image:fernplant , info: "Prefers humid environment, beautiful green foliage. Ideal for bathroom or shaded area." },
  { id: 10, name: "Lavender", image:lavendar , info: "Fragrant plant, loves sunlight, reduces stress. Perfect for window sill or balcony." },
  { id: 11, name: "Jade Plant", image:jadeplant  , info: "Succulent plant, easy to grow, brings good luck. Needs little watering, fits any corner." },
  { id: 12, name: "Spider Plant", image:spiderplant , info: "Air purifier, grows well indoors, low maintenance. Great hanging plant for living room." },
  { id: 13, name: "English Ivy", image: englishivy, info: "Climbing plant, indoor/outdoor use, easy to propagate. Adds natural green walls." },
  { id: 14, name: "Golden Pothos", image:golden , info: "Tolerates low light, perfect hanging plant. Fast growing, purifies indoor air." },
  { id: 15, name: "Bonsai", image:bonsai , info: "Miniature tree, requires patience and care. Adds zen vibes and elegance to desk or shelf." }
];

const HomePage = () => {

  const dispatch = useDispatch();
  // const handleAddToCart = (plant) => {
  //   alert(`${plant.name} added to cart!`);
  // };

  return (
    <section className="home-page">
      {/* Intro Section */}
      <div className="intro-section">
        <h1>Welcome to Plantify 🌿</h1>
        <p>
          Discover our handpicked collection of indoor and outdoor plants that
          brighten your home, purify your air, and bring positive vibes. Shop
          your favorite plants and give your space a touch of green!
        </p>
      </div>

      {/* Cards Section */}
      <h2>Our Popular Plants</h2>
      <div className="plants-container">
        {plantsData.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.info}</p>
            <button className="addtocart" onClick= {() => dispatch(addtocart(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
