"use client";

import { useState } from "react";
import { scenes } from "../lib/data";
import ProfileCard from "../components/home/ProfileCard";
import SceneNavigation from "../components/home/SceneNavigation";

export default function Home() {
  const [activeScene, setActiveScene] = useState(1);

  const setScene = (x: number) => {
    setActiveScene(x);
  };

  // @ts-ignore - scenes keys are numbers
  const currentScene = scenes[activeScene];

  return (
    <main className="min-h-screen bg-white flex items-center justify-center flex-col space-y-10 relative">
      <div className="relative flex items-center justify-center">
        <ProfileCard text={currentScene.text} />
        <SceneNavigation activeScene={activeScene} onSceneChange={setScene} />
      </div>
    </main>
  );
}
