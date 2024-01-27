import Navi from "./Navi/Navi.jsx";
import React, { useState } from "react";

import TwitterIcon from "./Images/TwitterIcon";
import YouTubeIcon from "./Images/YouTubeIcon";
import StarRating from "./Images/StarRating.jsx";
import FacebookIcon  from "./Images/FacebookIcon";

import { Card, CardContent } from "@/components/ui/card";

import darkImage from "./Images/MovieImages/dark.jpg";
import darkBgImage from "./Images/MovieBgImages/dark-bg.jpg";

import eliteImage from "./Images/MovieImages/elite.jpg";
import eliteBgImage from "./Images/MovieBgImages/elite-bg.jpg";

import squidGameImage from "./Images/MovieImages/squid-game.jpg";
import squidGameBgImage from "./Images/MovieBgImages/squid-game-bg.jpg";

import lockeAndKeyImage from "./Images/MovieImages/locke-and-key.jpg";
import lockeAndKeyBgImage from "./Images/MovieBgImages/locke-and-key-bg.jpg";

import moneyHeiestImage from "./Images/MovieImages/money-heiest.jpg";
import moneyHeiestBgImage from "./Images/MovieBgImages/money-heist-bg.jpg";

import strangerThingsImage from "./Images/MovieImages/stranger-things.jpg";
import strangerThingsBgImage from "./Images/MovieBgImages/stranger-things-bg.jpg";

import breakingBadImage from "./Images/MovieImages/breaking-bad.jpg";
import breakingBadBgImage from "./Images/MovieBgImages/breaking-bad-bg.jpeg";

import peakyBlinderImage from "./Images/MovieImages/peaky-blinders.jpeg";
import peakyBlinderBgImage from "./Images/MovieBgImages/peaky-blinders-bg.jpeg";

import berlinImage from "./Images/MovieImages/berlin.jpeg";
import berlinBgImage from "./Images/MovieBgImages/berlin-bg.jpg";

import wednesdayImage from "./Images/MovieImages/wednesday.jpg";
import wednesdayBgImage from "./Images/MovieBgImages/wednesday-bg.jpg";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Movies = () => {
  const star = [4,3,3,4,4,3,4,4,3,3];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [moneyHeiestImage, squidGameImage, darkImage,lockeAndKeyImage, strangerThingsImage, eliteImage, breakingBadImage, peakyBlinderImage, berlinImage, wednesdayImage];
  const bgImages = [moneyHeiestBgImage ,squidGameBgImage, darkBgImage,lockeAndKeyBgImage, strangerThingsBgImage, eliteBgImage, breakingBadBgImage, peakyBlinderBgImage, berlinBgImage, wednesdayBgImage];
  const movieName = ["MONEY HEIST", "SQUID GAME", "DARK", "LOCKE AND KEY", "STRANGER_THINGS", "ELITE", "BREAKING BAD", "PEAKY BLINDER", "BERLIN", "WEDNESDAY"];
  const movie_name =["Money Heist", "Squid Game", "Dark", "Locke and Key", "Stranger Things", "Elite", "Breaking Bad", "Peaky Bliner", "Berlin", "Wednesday"];
  const year = ["2017 |", "2021 |", "2017 |", "2020 |", "2016 |", "2018 |", "2008 |", "2013 |", "2023 |", "2022 |"];
  const seasons = ["5 Seasons |","1 Season |", "3 Seasons |", "3 Seasons |", "5 Seasons |", "7 Seasons |", "5 Seasons |", "6 Seasons |", "1 Season |", "1 Season"];
  const cateogry = ["Thriller", "Thriller", "Thriller", "Fantasy", "Sci-Fi", "Drama", "Drama", "Drama", "Drama", "fantasy"];
  const story = ["Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
                "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
                "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
                "After their dad's murder, three siblings move with their mom to his ancestral estate, where they discover magical keys that unlock powers — and secrets.",
                "A young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
                "When three working-class teens enroll in an exclusive private school in Spain, the clash between them and the wealthy students leads to murder.",
                "A modest high school chemistry teacher, who discovers a new purpose in life, he learns he has terminal cancer. Turns to a life of crime to provide for his family.",
                "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
                "During his glory days, Berlin and a gang assembled in Paris for one of his greatest plans ever: stealing 44 million euros' worth of jewels in one night.",
                "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy."];
  const starring = ["Ursula Corbero,Alvaro Morte,Itziar Ituno", "Lee Jung-jae,Park Hae-soo,Wi Ha-jun", "Louis Hofmann,Oliver Masucci", "Darby Stanchfeild, Connor Jessup", "Winona Ryder,David Harbour","Itzan Escamilla,Miguel Bernardeau","Brayan Cranston, Aaron Paul, Anna Gunn","Cillian Murphy, Sam Neill, Helen McCrory", "Pedro Alonso, Michelle Jenner","Jenna Ortega,Gwendoline Christie"];
  const creators = ["Alex Pina", "Hwang Dong-hyuk", "Baran bo Odar, Jantije Friese", "Joe Hill", "The Duffer Brothers","Carlos Montero, Dario Madrona", "Vince Gilligan", "Steven Knight", "Esther Matinez Lobato, Alex Pina", "Alfred Gough,Miles Millar"];
  const movieColour = ["text-red-700", "text-slate-600", "text-red-400", "text-red-900", "text-blue-500","text-pink-600", "text-gray-900", "text-gray-900", "text-red-700", "text-violet-700"]

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  }

  return (
    <div className="h-full group" style={{ 
        backgroundImage: `url(${bgImages[selectedImageIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div> 
        <Navi/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-7 pb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-white items-center justify-center">
          <div className={`px-3 font-bold text-6xl ${movieColour[selectedImageIndex]}`}>
            {movieName[selectedImageIndex]}
          </div>
          <div className="px-3 font-bold text-3xl pt-2">
            {movie_name[selectedImageIndex]}
          </div>
          <div className="flex flex-row p-3 text-xl">
            <div>
              {year[selectedImageIndex]} 
            </div>
            <div className="pl-3">
              {seasons[selectedImageIndex]} 
            </div>
            <div className="pl-3">
              {cateogry[selectedImageIndex]}
            </div>
          </div>
          <div>
            <StarRating ratings={star[selectedImageIndex]}/>
          </div>
          <div className="p-3 text-2xl font-bold">
            {story[selectedImageIndex]}
          </div>
          <div className="p-3 text-xl">
            <span className="text-amber-950 font-bold">Starring:</span> {starring[selectedImageIndex]}
          </div>
          <div className="p-3 text-xl">
            <span className="text-amber-950 font-bold">Creators: </span> {creators[selectedImageIndex]}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex items-center">
          <Carousel opts={{ align: "start" }} className="w-full max-w-xl mx-auto items-center justify-center">
            <CarouselContent className="flex items-center">
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1" onClick={() => handleImageClick(index)}>
                    <Card className="border-none duration-500">
                      <CardContent className="flex aspect-square items-center justify-center p-6 hover:-translate-y-5 duration-500" >
                        <img src={image} alt={`Image ${index + 1}`} className="max-w-full h-auto hover:shadow-2xl hover:filter duration-500" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white hover:bg-white duration-500"/>
            <CarouselNext className="text-white hover:bg-white duration-500 "/>
            </Carousel>
        </div>
      </div>
      <div className="col-span-1 flex flex-row items-center justify-between ml-10 p-11 text-white">
        <div className="text-green-600 rounded-xl p-1 m-1 hover:bg-green-500 hover:text-white hover:-translate-y-3 duration-500 font-bold text-2xl">
          <button>Watch Now</button>
        </div>
        <div className="flex flex-row items-center">
          <div className="hover:-translate-y-3 duration-500 hover:bg-white hover:text-black rounded-full">
            <FacebookIcon/>
          </div>
          <div className="ml-5 hover:-translate-y-3 duration-500 hover:bg-white hover:text-black rounded-3xl flex w-10 h-10 items-center justify-center">
            <YouTubeIcon/>
          </div>
          <div className="ml-5 hover:-translate-y-3 duration-500 hover:bg-white hover:text-black rounded-2xl w-10 h-10 items-center justify-center flex">
            <TwitterIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;