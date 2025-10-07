import React from "react";
import "../Css/HomePage.css";

const plantsData = [
  { id: 1, name: "Aloe Vera", image: "https://images.unsplash.com/photo-1601597116311-bb44f5c38b05?auto=format&fit=crop&w=250&q=80", info: "Easy to care for, purifies air, needs bright indirect sunlight. Ideal for kitchen or living room, helps heal minor cuts." },
  { id: 2, name: "Snake Plant", image: "https://images.unsplash.com/photo-1610393719472-77f15533e75d?auto=format&fit=crop&w=250&q=80", info: "Very low maintenance, ideal for indoors, tolerates low light. Releases oxygen at night, great for bedroom." },
  { id: 3, name: "Money Plant", image: "https://images.unsplash.com/photo-1603415526960-6b9c9a9b631d?auto=format&fit=crop&w=250&q=80", info: "Brings good luck, needs moderate sunlight, easy to propagate. Perfect for office desk or corner." },
  { id: 4, name: "Peace Lily", image: "https://images.unsplash.com/photo-1608956933631-04b0b35e8682?auto=format&fit=crop&w=250&q=80", info: "Air-purifying plant, loves indirect light, water weekly. Beautiful white flowers, keeps environment fresh." },
  { id: 5, name: "Cactus", image: "https://images.unsplash.com/photo-1611605691979-6b2341a47c3a?auto=format&fit=crop&w=250&q=80", info: "Needs minimal water, prefers bright sunlight, perfect for desks. Adds desert vibes to your room." },
  { id: 6, name: "Bamboo Palm", image: "https://images.unsplash.com/photo-1618227611953-66a15c1a3c0f?auto=format&fit=crop&w=250&q=80", info: "Adds a tropical touch, requires moderate sunlight. Helps humidify air naturally." },
  { id: 7, name: "Rubber Plant", image: "https://images.unsplash.com/photo-1613474944340-420f63e0ed48?auto=format&fit=crop&w=250&q=80", info: "Thrives in indirect sunlight, purifies air. Glossy green leaves add elegance to any room." },
  { id: 8, name: "Orchid", image: "https://images.unsplash.com/photo-1587395851915-cbc16d93285f?auto=format&fit=crop&w=250&q=80", info: "Elegant flowering plant, loves bright indirect light. Requires minimal care, perfect as gift." },
  { id: 9, name: "Fern", image: "https://images.unsplash.com/photo-1612147598976-4f6a8a2360f4?auto=format&fit=crop&w=250&q=80", info: "Prefers humid environment, beautiful green foliage. Ideal for bathroom or shaded area." },
  { id: 10, name: "Lavender", image: "https://images.unsplash.com/photo-1601758123927-b7e4e07f2f53?auto=format&fit=crop&w=250&q=80", info: "Fragrant plant, loves sunlight, reduces stress. Perfect for window sill or balcony." },
  { id: 11, name: "Jade Plant", image: "https://images.unsplash.com/photo-1611078689001-22f9c53e2d01?auto=format&fit=crop&w=250&q=80", info: "Succulent plant, easy to grow, brings good luck. Needs little watering, fits any corner." },
  { id: 12, name: "Spider Plant", image: "https://images.unsplash.com/photo-1612408729481-7b5c8f1f9e35?auto=format&fit=crop&w=250&q=80", info: "Air purifier, grows well indoors, low maintenance. Great hanging plant for living room." },
  { id: 13, name: "English Ivy", image: "https://images.unsplash.com/photo-1612711547832-1c22c9bbfaf8?auto=format&fit=crop&w=250&q=80", info: "Climbing plant, indoor/outdoor use, easy to propagate. Adds natural green walls." },
  { id: 14, name: "Golden Pothos", image: "https://images.unsplash.com/photo-1612711581820-4a52b445f3a4?auto=format&fit=crop&w=250&q=80", info: "Tolerates low light, perfect hanging plant. Fast growing, purifies indoor air." },
  { id: 15, name: "Bonsai", image: "https://images.unsplash.com/photo-1612408369491-9f4b98dc05e8?auto=format&fit=crop&w=250&q=80", info: "Miniature tree, requires patience and care. Adds zen vibes and elegance to desk or shelf." }
];

const HomePage = () => {
  const handleAddToCart = (plant) => {
    alert(`${plant.name} added to cart!`);
  };

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
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
