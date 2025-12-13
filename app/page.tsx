"use client";

import { useState } from "react";
import { scenes } from "../lib/data";
import ProfileCard from "../components/home/ProfileCard";
import SceneNavigation from "../components/home/SceneNavigation";

export default function Home() {
  const [activeScene, setActiveScene] = useState("home");

  const setScene = (x: string) => {
    setActiveScene(x);
  };

  // @ts-ignore - scenes keys are numbers
  const currentScene = scenes[activeScene];

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6 md:relative md:flex-row md:gap-0 md:items-center md:justify-center">
        <div
          className="block md:hidden self-start"
          style={{ marginLeft: "var(--border-width-main)" }}
        >
          <div
            className="text-black font-extrabold tracking-tighter cursor-pointer"
            style={{ fontSize: "var(--text-baswesterweel)" }}
            onClick={() => setScene("home")}
          >
            BASWESTERWEEL
          </div>
        </div>

        <ProfileCard
          text={currentScene.text}
          redButtonLink={currentScene.redButtonLink}
          redButtonText={currentScene.redButtonText}
          image={currentScene.image}
          onSceneChange={setScene}
          headerButtons={currentScene.headerButtons}
          activeScene={activeScene}
          infoImage={currentScene.infoImage}
          barText={currentScene.barText}
        />

        <SceneNavigation activeScene={activeScene} onSceneChange={setScene} />
      </div>
    </main>
  );
}
