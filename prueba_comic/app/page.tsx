"use client";
import Image from "next/image";
import React, { useState } from "react";
const img_index = 1

export default function Home(){
  const [currentSlide, setCurrentSlide] = React.useState(1)
  const comic_len = 3
  const nextSlide = (e) => {
    setCurrentSlide((prev) => {
      return prev === comic_len ? 1 : currentSlide + 1;
    });
  }
  const prevSlide = (e) => {
    setCurrentSlide((prev) => {
      return prev === 1 ? comic_len : currentSlide - 1;
    });
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1> Hello World </h1>
      <img src={`/${currentSlide}.jpeg`} alt="comic 1" width={200} height={200}/>
      <button onClick={prevSlide}>prev</button>
      <button onClick={nextSlide}>siguiente</button>
    </div>
  )
}
