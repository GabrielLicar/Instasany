"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ImageIcon } from "./icons/icons";

gsap.registerPlugin(ScrollTrigger);

export function SectionCards() {
  const cards = [
    {
      card1: ImageIcon.Image1,
      card2: ImageIcon.Image2,
      card3: ImageIcon.Image3,
      card4: ImageIcon.Image4,
      card5: ImageIcon.Image5,
      card6: ImageIcon.Image6,
    },
  ];

  const mockupRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);

  const section = sectionRef.current;

  useEffect(() => {
    const mockup = mockupRef.current;
    const title = titleRef.current;

    gsap.fromTo(
      mockup,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "65% center",
        },
      }
    );

    const card01 = card01Ref.current;
    const card02 = card02Ref.current;
    const card03 = card03Ref.current;
    const card04 = card04Ref.current;
    const card05 = card05Ref.current;
    const card06 = card06Ref.current;

    const leftImages = [card01, card02, card03];
    const rightImages = [card04, card05, card06];

    animateCards(leftImages, 50);
    animateCards(rightImages, -50);

  }, []);

  function animateCards(images: null[], position: number) {
    gsap.fromTo(images, {
        opacity: 0,
        x: position,
    }, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: .1,
        scrollTrigger: {
            trigger: section,
            start: 'center center'
        }
    })
  }

  return (
    <section className="w-full pb-20" ref={sectionRef}>
      <Image
        src={ImageIcon.MockupMain}
        alt="Mockup Main Image"
        width={311}
        height={650}
        className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-16 opacity-0"
        ref={mockupRef}
      />
      <h2
        className="text-center text-7xl font-semibold text-black mb-56 opacity-0"
        ref={titleRef}
      >
        Faça <span className="text-green-title-cards">você</span> mesmo de casa
      </h2>

      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative w-full max-w-area-cards h-area-cards mx-auto mt-56"
        >
          <Image
            ref={card01Ref}
            src={card.card1}
            className="absolute top-8 left-44 opacity-0"
            alt="Card 01"
            width={238}
            height={172}
          />
          <Image
            ref={card02Ref}
            src={card.card2}
            className="absolute left-0 bottom-32 opacity-0"
            alt="Card 02"
            width={238}
            height={172}
          />
          <Image
            ref={card03Ref}
            src={card.card3}
            className="absolute bottom-0 left-80 opacity-0"
            alt="Card 03"
            width={238}
            height={172}
          />
          <Image
            ref={card04Ref}
            src={card.card4}
            className="absolute top-0 right-32 opacity-0"
            alt="Card 04"
            width={238}
            height={172}
          />
          <Image
            ref={card05Ref}
            src={card.card5}
            className="absolute right-0 bottom-28 opacity-0"
            alt="Card 05"
            width={238}
            height={172}
          />
          <Image
            ref={card06Ref}
            src={card.card6}
            className="absolute bottom-0 right-80 opacity-0"
            alt="Card 06"
            width={238}
            height={172}
          />
        </div>
      ))}
    </section>
  );
}
