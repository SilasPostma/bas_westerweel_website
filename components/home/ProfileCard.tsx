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
        .replace(
          "Over ondernemerschap. Over verschil maken.",
          "Over ondernemerschap.\n\nOver verschil maken."
        )
        .replace("Die momenten en die vragen", "\n\nDie momenten en die vragen")
        .replace(
          "Want dat stuk zelfonderzoek",
          "\n\nWant dat stuk zelfonderzoek"
        )
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
      <div className="h-[45%] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt="top"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        className="bg-[#EA4025] flex items-center justify-start"
        style={{
          height: barText.length > 50 ? "12%" : "10%",
          minHeight: "10%",
        }}
      >
        <div
          className="text-white font-bold transform translate-x-4 leading-tight"
          style={{ fontSize: "var(--text-large)" }}
        >
          {barText}
        </div>
      </div>

      <div
        className="pl-2 pt-1 pb-8.5 flex flex-col justify-start mb-2"
        style={{
          height: barText.length > 50 ? "43%" : "45%",
          paddingRight: "calc(var(--width-square-size) * 0.7)",
        }}
      >
        {headerButtons && headerButtons.length > 0 && (
          <div className="flex flex-row gap-2 mb-2">
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
      <div
        className="absolute left-2 z-10"
        style={{
          bottom:
            "calc(var(--border-width-main) + var(--text-medium) * 2.5 + 16px)",
          width: "calc(var(--width-main-size) * 0.58)",
          height: "calc(var(--text-medium) * 1.8)",
        }}
      >
        {infoImage && (
          <Image
            src={infoImage || "/placeholder.svg"}
            alt="info"
            fill
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <RedButton text={redButtonText} href={redButtonLink}></RedButton>

      <div
        className="hidden md:block absolute z-0"
        style={{
          left: "var(--border-width-main)",
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
