import Image from "next/image";
import ba8 from "../../public/ba8.png";
import RedButton from "../ui/RedButton";

interface ProfileCardProps {
  text: string;
}

export default function ProfileCard({ text }: ProfileCardProps) {
  return (
    <div className="relative min-w-[400px] min-h-[400px] w-[clamp(400px,70vh,800px)] h-[clamp(400px,70vh,800px)] border-[clamp(3px,1.5vh,10px)] border-[#EA4025] flex flex-col box-border">
      {/* Top half image */}
      <div className="flex-1 relative">
        <Image src={ba8} alt="top" fill style={{ objectFit: "cover" }} />
      </div>

      {/* Red middle bar */}
      <div className="h-1/10 bg-[#EA4025] flex items-center justify-start ">
        <div className="text-white text-[clamp(12px,1.5vh,20px)] font-bold transform translate-x-4">
          Als ik naar mezelf (probeer te) kijken.
        </div>
      </div>

      {/* Bottom half text */}
      <div className="flex-1 p-4 flex flex-col justify-start">
        <p className="text-[#EA4025] font-extrabold text-[clamp(12px,1.5vh,20px)] mb-2">
          Wie ben ik dan?
          <br />
        </p>
        <p className="text-gray-700 text-[clamp(8px,1vh,15px)] pr-15 whitespace-pre-wrap">
          {text}
        </p>
      </div>
      <RedButton text="MIJN JOURNEY"></RedButton>

      {/* Text under square */}
      <div className="relative -bottom-11 -left-2 w-78 h-8">
        {" "}
        <div
          className={`text-black font-extrabold text-2xl tracking-tighter`}
        >
          {" "}
          BASWESTERWEEL{" "}
        </div>{" "}
      </div>
    </div>
  );
}
