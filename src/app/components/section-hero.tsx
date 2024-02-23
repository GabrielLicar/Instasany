'use client';

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GridContainer } from "./grid";
import { Icon } from "./icons/icons";

export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(textHero, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out'
    })

    gsap.fromTo(mLeft, {
      rotate: 0
    }, {
      rotate: -10,
      duration: 1
    })
    gsap.fromTo(mRight, {
      rotate: 0
    }, {
      rotate: 10,
      duration: 1
    })
  }, [])

  return (
    <section className="relative w-full bg-hero bg-no-repeat bg-top bg-green-background h-section-hero border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
          <h3 className="text-xl font-medium text-green-actived mb=4">
            Novo curso focado em instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-2.5">
            Destrave as suas habilidades
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={Icon.IFile} alt="Icon File" width={16} height={16} />
              <span className="text-white font-medium">
                Assinar lista de espera
              </span>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-background font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons mt-4 h-28">
          <Image
            src={Icon.Hand}
            alt="Icon Hand"
            width={48}
            height={48}
            className="absolute bottom-0 left-0"
          />
          <Image
            src={Icon.Hand2}
            alt="Icon Hand 02"
            width={48}
            height={48}
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={Icon.Mockup}
            alt="Mockup smartphone"
            width={328}
            height={662}
            className="relative top-[1.1rem] left-[3.3rem]"
            ref={mockupLeftRef}
          />
          <Image
            src={Icon.Mockup}
            alt="Mockup smartphone"
            width={328}
            height={662}
            className="relative top-[1.1rem] right-[3.3rem]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
