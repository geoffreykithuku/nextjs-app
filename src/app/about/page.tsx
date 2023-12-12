"use client"

import { useRouter } from "next/navigation"
import React from "react";


const About = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Back home</button>
    </div>
  );
};

export default About;
