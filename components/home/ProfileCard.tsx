import Image, { StaticImageData } from "next/image";
import RedButton from "../ui/RedButton";
import HeaderButton from "../ui/HeaderButton";

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
  return (
    <div className="relative w-main-size h-main-size border-main border-[#EA4025] flex flex-col box-border">
      {/* Top half image */}
      <div className="h-[45%] relative">
        <Image src={image} alt="top" fill style={{ objectFit: "cover" }} />
      </div>

      {/* Red middle bar */}
      <div className="h-[10%] bg-[#EA4025] flex items-center justify-start ">
        <div className="text-white text-large font-bold transform translate-x-4">
          {barText}
        </div>
      </div>

      {/* Bottom half text */}
      <div className="h-[45%] pl-2 pt-1 pb-8.5 pr-10flex flex-col justify-start mb-2">
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

        {/* <p className="text-[#EA4025] font-extrabold text-large mb-1">
          Wie ben ik dan?
        </p> */}
        <p className="text-gray-700 text-small pr-15 whitespace-pre-wrap overflow-hidden">
          {text}
        </p>
      </div>
      <div className="absolute bottom-10 left-2 z-10 transform translate-y-1/2 w-35 h-5">
        {infoImage && (
          <Image
            src={infoImage}
            alt="top"
            fill
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <RedButton text={redButtonText} href={redButtonLink}></RedButton>

      {/* Text under square */}
      <div
        className="absolute -left-2 -bottom-1 z-0"
        style={{ transform: "translateY(100%)" }}
      >
        <div
          className={`text-black font-extrabold text-xl tracking-tighter cursor-pointer`}
          onClick={() => onSceneChange("home")}
        >
          BASWESTERWEEL
        </div>
      </div>
    </div>
  );
}
