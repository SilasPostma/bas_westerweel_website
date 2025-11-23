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
    <div className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col space-y-4"
    style={{
    right: 'calc(0.5 * var(--border-width-square))',
  }}>
      {buttonConfig.map((config) => (
        <SquareButton
          key={config.sceneId} // Important for lists
          rows={[
            { text: config.text[0], align: "left" },
            { text: config.text[1], align: "right" },
            { text: config.text[2], align: "left" },
          ]}
          sceneId={config.sceneId}
          onSceneChange={onSceneChange}
          isActive={activeScene.split('_')[0] === config.sceneId.split('_')[0]}
        />
      ))}
    </div>
  );
}
