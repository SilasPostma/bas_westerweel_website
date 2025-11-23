
import ba1 from "../public/ba1.png";
import ba2 from "../public/ba2.png";
import ba3 from "../public/ba3.png";
import ba4 from "../public/ba4.png";
import ba5 from "../public/ba5.png";
import ba7 from "../public/ba7.png";
import ba8 from "../public/ba8.png";

export const scenes = {

  "home": {
    text: "HOME",
    redButtonText: "HOME",
    image: ba7,
    redButtonLink: "https://www.linkedin.com/in/baswesterweel/",
  },
  "coach": {
    text: "Ik ben Bas. Verhalen zijn mijn vak en mijn leven. Vanaf jonge leeftijd raakte me hoe woorden verschil maken. Hoe één zin kan raken, verbinden en richting geven.\n\nMijn kracht zit in luisteren en doorvragen. Ik hoor wat iemand bedoelt en help dat scherp en helder op papier of podium te krijgen. Geen trucjes, geen toneel. Jij, met je eigen stem, die het verschil maakt. \n\nIn 2017 viel ik zelf stil – letterlijk. Een hartstilstand tijdens een voetbaltraining. Dankzij mijn teamgenoten leef ik nog. Sindsdien werk ik met meer focus dan ooit: aan het hart en de ziel van mensen en organisaties. Bouwen aan teams die elkaar echt zien. Luisteren, keuzes",
    redButtonText: "MIJN JOURNEY",
    image: ba3,
    redButtonLink: "mailto:silas.p.postma@gmail.com", // FIXME
  },
  "trainer_manifesto": {
    text: "trainer_manifesto",
    redButtonText: "MIJN JOURNEY",
    image: ba1,
  },
  "trainer_spreekkuur": {
    text: "trainer_spreekkuur",
    redButtonText: "MIJN JOURNEY",
    image: ba2,
  },
  "trainer_reflexor": {
    text: "trainer_reflexor",
    redButtonText: "MIJN JOURNEY",
    image: ba5,
  },
  "presentator_podcast": {
    text: "presentator_podcast",
    redButtonText: "MIJN JOURNEY",
    image: ba5, //MIST
  },
  "presentator_dagvoorzitter": {
    text: "presentator_dagvoorzitter",
    redButtonText: "MIJN JOURNEY",
    image: ba4,
  },
  "presentator_audio_video": {
    text: "presentator_audio_video",
    redButtonText: "MIJN JOURNEY",
    image: ba8, //MIST
  },
};

export const buttonConfig = [
  { text: ["COA", "CH", ""], sceneId: "coach" },
  { text: ["TRAI", "NER", ""], sceneId: "trainer_manifesto" },
  { text: ["PRES", "ENT", "ATOR"], sceneId: "presentator_podcast" },
];
