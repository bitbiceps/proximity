import React, { useState, useEffect } from 'react';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const RootLayout = ({ children, isHome }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Set opacity to 1 after 1 second (or adjust the time as needed)
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 0); // Adjust the delay for how long you want the fade-in effect to take

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ opacity, transition: 'opacity 1s ease-in-out' }}>
      <Header isHome={!!isHome} />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
