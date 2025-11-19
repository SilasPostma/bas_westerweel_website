import Image from "next/image";
import ba8 from "../public/ba8.png";
import pb from "../public/playbutton.png";
import coachw from "../public/coach wit.png";
import trainerw from "../public/trainer wit.png";
import presentatorw from "../public/presentator wit.png";
import boeken from "../public/boek een dag.png";
import RedButton from "../components/RedButton";
import SquareButton from "../components/SquareButton";
import RoundButton from "../components/RoundButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center flex-col space-y-10 relative">
      <div className="relative flex items-center justify-center">
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
            <p className="text-gray-700 text-[clamp(10px,1.4vh,18px)] pr-15">
              Ik ben Bas. Verhalen zijn mijn vak en mijn leven. Vanaf jonge
              leeftijd raakte me hoe woorden verschil maken. Hoe één zin kan
              raken, verbinden en richting geven.
              <br />
              <br />
              Mijn kracht zit in luisteren en doorvragen. Ik hoor wat iemand
              bedoelt en help dat scherp en helder op papier of podium te
              krijgen. Geen trucjes, geen toneel. Jij, met je eigen stem, die
              het verschil maakt.
              <br />
              <br />
              In 2017 viel ik zelf stil – letterlijk. Een hartstilstand tijdens
              een voetbaltraining. Dankzij mijn teamgenoten leef ik nog.
              Sindsdien werk ik met meer focus dan ooit: aan het hart en de ziel
              van mensen en organisaties. Bouwen aan teams die elkaar echt zien.
              Luisteren, keuzes
            </p>
          </div>
          <RedButton text="MIJN JOURNEY"></RedButton>

          {/* Text under square */}
          <div className="relative -bottom-11 -left-2 w-78 h-8">
            {" "}
            <div className="text-black font-extrabold text-2xl tracking-tighter">
              {" "}
              BASWESTERWEEL{" "}
            </div>{" "}
          </div>
        </div>
        <RoundButton className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2" />

        <div className="absolute right-[-6vh] top-1/2 -translate-y-1/2 flex flex-col space-y-4">
          <SquareButton
            rows={[
              { text: "COA", align: "left" },
              { text: "CH", align: "right" },
              { text: "", align: "left" },
            ]}
          />

          <SquareButton
            rows={[
              { text: "TRAI", align: "left" },
              { text: "NER", align: "right" },
              { text: "", align: "left" },
            ]}
          />

          <SquareButton
            rows={[
              { text: "PRES", align: "left" },
              { text: "ENT", align: "right" },
              { text: "ATOR", align: "left" },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
