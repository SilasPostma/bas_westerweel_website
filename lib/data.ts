
import ba2 from "../public/ba2.png";
import ba5 from "../public/ba5.png";
import ba7 from "../public/ba7.png";
import info from "../public/info.png";

import AudioVideo from "../public/AudioVideo.png";
import coach from "../public/coach.png";
import Dagvoorzitter from "../public/Dagvoorzitter.jpeg";
import Manifesto from "../public/Manifesto.png";
import Reflexor from "../public/Reflexor.png";

export const scenes = {

  "home": {
    text: "Altijd verbindend. Soms wat rusteloos omdat ik er alles uit wil halen. Uit partnerships, vriendschappen, organisaties. Uit mensen. Ik werkte op zeer diverse plekken: van radio tot tv-studio, was directeur van een dierentuin, zanger in een band en medeoprichter van een succesvol agency. Overal nam ik wijze lessen mee. Over ondernemerschap. Over verschil maken.\n\nHet was er altijd al, maar na een hartaanval acht jaar geleden kwam de omslag om me volledig in te zetten om mensen en organisaties niet alleen goed of groots, maar vooral ook genereus te maken.",
    redButtonText: "CONTACT MIJ",
    image: ba7,
    redButtonLink: "mailto:bas@baswesterweel.com", 
    headerButtons: [],
    barText: "Als ik naar mezelf (probeer te) kijken. Wie ben ik dan?"
  },
  "coach": {
    text: `Overal bij horen en toch alleen zijn. Het overkomt ons allemaal. En dan zijn er vragen. Veel vragen die onzekerheden aanwakkeren.\n\nDie momenten en die vragen kunnen we gebruiken als bouwstenen om te groeien.\n\nIk luister, ik reflecteer, ik prikkel en inspireer. Want dat stuk zelfonderzoek, dat doe je het beste samen.`,
    redButtonText: "MIJN JOURNEY",
    image: coach,
    redButtonLink: "https://www.linkedin.com/in/baswesterweel/",
    headerButtons: [],
    barText: "Ik hou van persoonlijke gesprekken. Ik hoor het u denken."
  },
  "trainer_manifesto": {
    text: "Elke dag trekken we massaal naar ons werk om iets te presteren. Maar zeker in deze turbulente tijden komt de vraag steeds meer naar boven: waarheen en waarvoor? We voelen het wel, maar zijn er vaak onvoldoende duidelijk over. Na deze sessie is dat verleden tijd. Samen schrijven wij een kort manifesto met onze purpose, principes en waarden: de voorwaarden waaronder wij, maar ook onze klanten, succesvol willen zijn.",
    redButtonText: "IK GEEF JE GRAAG WAT MEER INFO",
    redButtonLink: "mailto:bas@baswesterweel.com", 
    image: Manifesto,
    headerButtons: [
      { text: "MANIFESTO", sceneId: "trainer_manifesto" },
      { text: "SPREEKKUUR", sceneId: "trainer_spreekkuur" },
      { text: "REFLEXOR", sceneId: "trainer_reflexor" },
    ],
    infoImage: info,
    barText: "Waar sta jij voor? Wat drijft jou? Waar wil je heen?"
  },
  "trainer_spreekkuur": {
    text: "Je stem is een van je grootste krachten om te verbinden en om je te uiten, maar we trainen die stem maar zelden.\n\nIn een Spreekkuur maak ik je bewust van je eigen stem. Letterlijk en figuurlijk, zodat jij verhalen en presentaties kunt geven die het verschil maken en onthouden worden.\n\nIedereen kan uiteindelijk sprekend zichzelf zijn.",
    redButtonText: "IK GEEF JE GRAAG WAT MEER INFO",
    redButtonLink: "mailto:bas@baswesterweel.com", 
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
    text: "De mens is een groepsdier en in organisaties kruipen we vaak naar elkaar toe in talloze meetings. Daarin willen we gehoord worden.\n\nGezien worden. Daarbij ontkomen we niet aan interpretatie en oordeel.\n\nAls je je daarvan bewust bent, kunnen bijeenkomsten plekken worden waar verandering en groei op een andere manier tot stand komen.",
    redButtonText: "IK GEEF JE GRAAG WAT MEER INFO",
    redButtonLink: "mailto:bas@baswesterweel.com", 
    image: Reflexor,
    headerButtons: [
      { text: "MANIFESTO", sceneId: "trainer_manifesto" },
      { text: "SPREEKKUUR", sceneId: "trainer_spreekkuur" },
      { text: "REFLEXOR", sceneId: "trainer_reflexor" },
    ],
    infoImage: info,
    barText: "De kunst van met elkaar écht in gesprek gaan."
  },
  "presentator_podcast": {
    text: "Samen aan tafel in een donkere studio, vooroverleunend, mond bijna tegen de microfoon aan.\n\nÉcht luisteren, échte gesprekken, échte verhalen maken. Ik vond het als radiomaker altijd al fascinerend en dat vind ik als podcastmaker ook.\n\nEen podcast is in mijn ogen, en vooral oren, radio in optima forma.",
    redButtonText: "LUISTER DE PODCAST",
    redButtonLink: "https://open.spotify.com/show/6r9qdWjG0oYnbgMx00qBsf",
    image: ba5, //MIST
    headerButtons: [
      { text: "PODCAST", sceneId: "presentator_podcast" },
      { text: "DAGVOORZITTER", sceneId: "presentator_dagvoorzitter" },
      { text: "AUDIO & VIDEO", sceneId: "presentator_audio_video" },
    ],
    barText: "Geluid prikkelt je voorstellingsvermogen."
  },
  "presentator_dagvoorzitter": {
    text: "Voor een camera in een studio staan vind ik minder leuk dan voor een publiek staan tijdens een congres of bijeenkomst.\nDaar gebeurt altijd het onverwachte; daar houd ik van, dat zoek ik op. Interactie, plotselinge inzichten en vaak een lach en soms ook een traan.\n\nDat maakt iedere live bijeenkomst zo uniek.\n\nAls moderator wil ik de sprekers laten stralen en hen naar een zaal brengen waar het verhaal impact kan maken.",
    redButtonText: "CHECK MIJN BESCHIKBAARHEID",
    redButtonLink: "https://www.hetsprekersburo.nl/dagvoorzitters/bas-westerweel", 
    image: Dagvoorzitter,
    headerButtons: [
      { text: "PODCAST", sceneId: "presentator_podcast" },
      { text: "DAGVOORZITTER", sceneId: "presentator_dagvoorzitter" },
      { text: "AUDIO & VIDEO", sceneId: "presentator_audio_video" },
    ],
    barText: "Op het podium voel ik me op mijn gemak. Ik weet haast niet beter."
  },
  "presentator_audio_video": {
    text: "Steeds opnieuw achter een microfoon in een studio kruipen en het werk van een ander mogen inspreken is heerlijk.\n\nEen verhaal van een schrijver stem mogen geven is bijzonder.\n\nVooral als mijn stem bij het verhaal past en het verhaal bij mijn stem.",    redButtonText: "CONTACT DE STUDIO",
    redButtonLink: "https://www.storytel.com/nl/narrators/bas-westerweel-71077",
    image: AudioVideo,
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
