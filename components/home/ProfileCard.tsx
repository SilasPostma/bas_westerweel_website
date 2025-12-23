"use client";

import Image, { type StaticImageData } from "next/image";
import RedButton from "../ui/RedButton";
import HeaderButton from "../ui/HeaderButton";
import React from "react";

interface ProfileCardProps {
  text: string;
  redButtonText: string;
  image: StaticImageData;
  redButtonLink: string;
  onSceneChange: (id: string) => void;
  headerButtons?: { text: string; sceneId: string }[];
  activeScene: string;
  infoImage?: StaticImageData;
  barText: string;
}

export default function ProfileCard({
  text,
  redButtonText,
  image,
  redButtonLink,
  onSceneChange,
  headerButtons,
  activeScene,
  infoImage,
  barText,
}: ProfileCardProps) {
  const [useLineBreaks, setUseLineBreaks] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => {
      setUseLineBreaks(window.innerWidth >= 1200);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const formattedText = useLineBreaks
    ? text
        // HOME
        .replace("Uit mensen. Ik werkte", "Uit mensen.\n\nIk werkte")
        .replace("agency. Overal", "agency.\n\nOveral")
        // .replace("maken. Het", "maken.\n\nHet")

        // COACH
        .replace(
          "Want dat stuk zelfonderzoek",
          "\n\nWant dat stuk zelfonderzoek"
        )
        // .replace("Die momenten en die vragen", "\n\nDie momenten en die vragen")

        // TRAINER_MANIFESTO
        .replace("waarvoor? We", "waarvoor?\n\nWe")
        // De spatie voor 'tijd' is hier weggehaald zodat hij matcht met de tekst
        .replace("tijd. Samen", "tijd.\n\nSamen")

        // PRESENTER_DAGVOORZITTER
        .replace("bijeenkomst.\nDaar", "bijeenkomst.\n\nDaar")
        .replace("uniek. Als", "uniek.\n\nAls")
    : text;

  return (
    <div
      className="relative border-[#EA4025] flex flex-col box-border"
      style={{
        width: "var(--width-main-size)",
        height: "var(--height-main-size)",
        borderWidth: "var(--border-width-main)",
      }}
    >
      {/* Top half image */}
      <div className="h-(--top_img_height) relative">
        <Image
          src={image || "/placeholder.svg"}
          alt="top"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        className="bg-[#EA4025] flex items-center justify-start pl-4 pr-(--padding_bar) no-aliasing"
        style={{
          height: "12%",
        }}
      >
        <div
          className="text-white font-bold leading-tight"
          style={{ fontSize: "var(--text-large)" }}
        >
          {barText}
        </div>
      </div>

      <div
        className="pl-(--border-width-main) pt-1 pb-2 flex flex-col justify-start mb-2"
        style={{
          /* Height reduced to prevent overlap with bottom elements (RedButton/InfoImage) */
          height: "calc(88% - var(--top_img_height))",
          paddingRight: "var(--padding)",
        }}
      >
        {headerButtons && headerButtons.length > 0 && (
          <div className="flex flex-row gap-2 mb-2 items-center">
            {headerButtons.map((btn) => (
              <HeaderButton
                key={btn.text}
                text={btn.text}
                sceneId={btn.sceneId}
                onSceneChange={onSceneChange}
                isActive={activeScene === btn.sceneId}
              />
            ))}
          </div>
        )}
        {headerButtons && headerButtons.length == 0 && (
          <div className="mt-[23px]"></div>
        )}

        <p
          className="text-gray-700 whitespace-pre-wrap overflow-hidden leading-relaxed"
          style={{ fontSize: "var(--text-small)" }}
        >
          {formattedText}
        </p>
      </div>

      {infoImage && (
        <div
          className="absolute z-10 w-(--info-image-width) h-(--info-image-height)"
          style={{
            /* Left offset = border-width + button padding (12px/0.75rem for px-3) */
            left: "calc(var(--border-width-main) + 12px)",
            bottom: "calc(var(--border-width-main) + var(--text-medium) * 2.5)",
          }}
        >
          <Image
            src={infoImage}
            alt="info"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
      <RedButton text={redButtonText} href={redButtonLink}></RedButton>

      <div
        className="hidden md:block absolute z-0"
        style={{
          left: "calc(-0.5 * var(--border-width-main))",
          bottom: 0,
          transform: "translateY(calc(100% + var(--border-width-main)))",
        }}
      >
        <div
          className="text-black font-extrabold tracking-tighter cursor-pointer"
          style={{ fontSize: "var(--text-baswesterweel)" }}
          onClick={() => onSceneChange("home")}
        >
          BASWESTERWEEL
        </div>
      </div>
    </div>
  );
}
