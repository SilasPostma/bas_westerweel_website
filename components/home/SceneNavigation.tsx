import SquareButton from "../ui/SquareButton";
import { buttonConfig } from "../../lib/data";

interface SceneNavigationProps {
  activeScene: string;
  onSceneChange: (sceneId: string) => void;
}

export default function SceneNavigation({
  activeScene,
  onSceneChange,
}: SceneNavigationProps) {
  return (
    /* Positioned buttons to align with right border of main square */

    <div
      className="flex flex-row justify-center gap-4 md:absolute md:flex-col md:top-1/2 md:right-0 md:gap-4 md:-translate-y-1/2 md:translate-x-[calc(50%-(var(--border-width-main)/2))]"
    >
      {buttonConfig.map((config) => (
        <SquareButton
          key={config.sceneId}
          rows={[
            { text: config.text[0], align: "left" },
            { text: config.text[1], align: "right" },
            { text: config.text[2], align: "left" },
          ]}
          sceneId={config.sceneId}
          onSceneChange={onSceneChange}
          isActive={activeScene.split("_")[0] === config.sceneId.split("_")[0]}
        />
      ))}
    </div>
  );
}
