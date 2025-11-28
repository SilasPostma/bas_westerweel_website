
import ba1 from "../public/ba1.png";
import ba2 from "../public/ba2.png";
import ba3 from "../public/ba3.png";
import ba4 from "../public/ba4.png";
import ba5 from "../public/ba5.png";
import ba7 from "../public/ba7.png";
import ba8 from "../public/ba8.png";
import info from "../public/info.png";

export const scenes = {

  "home": {
    text: "Ik ben Bas. Verhalen zijn mijn vak en mijn leven. Vanaf jonge leeftijd raakte me hoe woorden verschil maken. Hoe één zin kan raken, verbinden en richting geven.\n\nMijn kracht zit in luisteren en doorvragen. Ik hoor wat iemand bedoelt en help dat scherp en helder op papier of podium te krijgen. Geen trucjes, geen toneel. Jij, met je eigen stem, die het verschil maakt. \n\nIn 2017 viel ik zelf stil – letterlijk. Een hartstilstand tijdens een voetbaltraining. Dankzij mijn teamgenoten leef ik nog. Sindsdien werk ik met meer focus dan ooit: aan het hart en de ziel van mensen en organisaties. Bouwen aan teams die elkaar echt zien. Luisteren, keuzes",
    redButtonText: "HOME",
    image: ba7,
    redButtonLink: "https://www.linkedin.com/in/baswesterweel/",
    headerButtons: [],
    barText: "Als ik naar mezelf (probeer te) kijken. Wie ben ik dan?"
  },
  "coach": {
    text: `Tussen al dat praatlawaai verdwijnt vaak wat je denkt en al helemaal wat je voelt. Ik heb door mijn hartstilstand geleerd naar mij hart te luisteren, letterlijk maar ook figuurlijk wawawawa\n\n"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.”\n\n"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.`,
    redButtonText: "MIJN JOURNEY",
    image: ba3,
    redButtonLink: "mailto:bas@baswesterweel.com", // FIXME
    headerButtons: [],
    barText: "Ik hou van persoonlijke gesprekken. Ik hoor het u denken."
  },
  "trainer_manifesto": {
    text: `Een Manifesto-sessie legt dit bloot. Persoonlijk en als team.\n\nWe schrijven geen wollige missie, maar een scherp A4 vol visie, principes en lef. Een kompas dat richting geeft bij keuzes en verandering.\n\nHet proces is intensief én bevrijdend. Je onderzoekt overtuigingen, schrijft ze uit, deelt ze, scherpt ze aan. Individueel én collectief. Resultaat: een levend document dat focus geeft en uitnodigt tot actie.\n\nDoel: maak je “waarom”.\n\nSterker dan je "waarom niet".`,
    redButtonText: "MIJN JOURNEY",
    image: ba1,
    headerButtons: [
      { text: "MANIFESTO", sceneId: "trainer_manifesto" },
      { text: "SPREEKKUUR", sceneId: "trainer_spreekkuur" },
      { text: "REFLEXOR", sceneId: "trainer_reflexor" },
    ],
    infoImage: info,
    barText: "Waar sta jij voor? Wat drijft jou? Waar wil je heen?"
  },
  "trainer_spreekkuur": {
    text: `Ontdek hoe jouw verhaal scherp, levendig & overtuigend wordt. Kort, praktisch, meteen toepasbaar. Geen kunstje, maar een spiegel en een set tools om je eigen stem te vinden en vol vertrouwen in te zetten.\n\nIedereen wil hetzelfde als hij een verhaal vertelt: dat de ander luistert, geraakt wordt, meegaat. Dat je verhaal verschil maakt. Soms lukt dat. Soms niet.\n\nOns uitgangspunt: verhalen zijn persoonlijk. Het gaat niet om techniek alleen, maar om wie jij bent. Daar bouwen we op door coaching en training te combineren. Doel: mensen sprekend zichzelf laten zijn.`,
    redButtonText: "MIJN JOURNEY",
    image: ba2,
    headerButtons: [
      { text: "MANIFESTO", sceneId: "trainer_manifesto" },
      { text: "SPREEKKUUR", sceneId: "trainer_spreekkuur" },
      { text: "REFLEXOR", sceneId: "trainer_reflexor" },
    ],
    infoImage: info,
    barText: "Hoe raak je je publiek met jouw verhaal op jouw manier?"
  },
  "trainer_reflexor": {
    text: `Mensen in beweging brengen rondom een purpose of strategie. Met Reflexor ontdek je hoe jouw verhaal scherper, levendiger en overtuigender wordt. Kort, praktisch, meteen toepasbaar. Geen kunstje, maar een spiegel en een set tools om je eigen stem te vinden en vol vertrouwen in te zetten.\n\nIedereen wil hetzelfde als hij een verhaal vertelt: dat de ander luistert, geraakt wordt, meegaat. Dat je verhaal verschil maakt. Soms lukt dat. Soms niet.\n\nOns uitgangspunt: verhalen zijn persoonlijk. Het gaat niet om techniek alleen, maar om wie jij bent. Daar bouwen we op door coaching en training te combineren. Doel: mensen sprekend zichzelf laten zijn.`,
    redButtonText: "MIJN JOURNEY",
    image: ba5,
    headerButtons: [
      { text: "MANIFESTO", sceneId: "trainer_manifesto" },
      { text: "SPREEKKUUR", sceneId: "trainer_spreekkuur" },
      { text: "REFLEXOR", sceneId: "trainer_reflexor" },
    ],
    infoImage: info,
    barText: "De kunst van met elkaar écht in gesprek gaan."
  },
  "presentator_podcast": {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.”\n\n"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.`,
    redButtonText: "MIJN JOURNEY",
    image: ba5, //MIST
    headerButtons: [
      { text: "PODCAST", sceneId: "presentator_podcast" },
      { text: "DAGVOORZITTER", sceneId: "presentator_dagvoorzitter" },
      { text: "AUDIO & VIDEO", sceneId: "presentator_audio_video" },
    ],
    barText: "Geluid prikkelt je voorstellingsvermogen."
  },
  "presentator_dagvoorzitter": {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.”\n\n"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.`,
    redButtonText: "MIJN JOURNEY",
    image: ba4,
    headerButtons: [
      { text: "PODCAST", sceneId: "presentator_podcast" },
      { text: "DAGVOORZITTER", sceneId: "presentator_dagvoorzitter" },
      { text: "AUDIO & VIDEO", sceneId: "presentator_audio_video" },
    ],
    barText: "Op het podium voel ik me op mijn gemak. Ik weet haast niet beter."
  },
  "presentator_audio_video": {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.”\n\n"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.`,
    redButtonText: "MIJN JOURNEY",
    image: ba8, //MIST
    headerButtons: [
      { text: "PODCAST", sceneId: "presentator_podcast" },
      { text: "DAGVOORZITTER", sceneId: "presentator_dagvoorzitter" },
      { text: "AUDIO & VIDEO", sceneId: "presentator_audio_video" },
    ],
    barText: "Het bleek me te passen en het ligt me nog steeds."
  },
};

export const buttonConfig = [
  { text: ["COA", "CH", ""], sceneId: "coach" },
  { text: ["TRAI", "NER", ""], sceneId: "trainer_manifesto" },
  { text: ["PRES", "ENT", "ATOR"], sceneId: "presentator_podcast" },
];
