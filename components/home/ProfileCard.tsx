import Image, { StaticImageData } from "next/image";
import RedButton from "../ui/RedButton";

interface ProfileCardProps {
  text: string;
  redButtonText: string;
  image: StaticImageData;
  redButtonLink: string;
  onSceneChange: (id: string) => void;
}

export default function ProfileCard({ text, redButtonText, image, redButtonLink, onSceneChange }: ProfileCardProps) {
  return (
    <div className="relative w-main-size h-main-size border-main border-[#EA4025] flex flex-col box-border">
      {/* Top half image */}
      <div className="h-[45%] relative">
        <Image src={image} alt="top" fill style={{ objectFit: "cover" }} />
      </div>

      {/* Red middle bar */}
      <div className="h-[10%] bg-[#EA4025] flex items-center justify-start ">
        <div className="text-white text-large font-bold transform translate-x-4">
          Als ik naar mezelf (probeer te) kijken.
        </div>
      </div>

      {/* Bottom half text */}
      <div className="h-[45%] pl-2 pt-1 pb-8.5 pr-10flex flex-col justify-start">
        <p className="text-[#EA4025] font-extrabold text-large mb-1">
          Wie ben ik dan?
        </p>
        <p className="text-gray-700 text-small pr-15 whitespace-pre-wrap overflow-hidden">
          {text}
        </p>
      </div>
      <RedButton text={redButtonText} href={redButtonLink}></RedButton>

      {/* Text under square */}
      <div className="absolute -left-2 -bottom-1 z-0" style={{ transform: 'translateY(100%)' }}>
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
