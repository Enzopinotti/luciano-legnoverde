import { PressDomainModel } from "../models/press-model";
import { IndexPdfEnum, PressTypeEnum } from "./enum";


const pressInterview: PressDomainModel = {
  title: "Charlas y entrevistas",
  press: [
    {
      id: 1,
      description: "Evento Mundo de las Ideas",
      descriptionItalic: "Finanzas, de la imaginación a la realidad",
      externalLink: "https://www.youtube.com/embed/t_CaJKsyP6A?si=FDbO8ww-7Cl7YBb2",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Ffinanzas-img-realidad.png?alt=media&token=4f15e812-28e9-48d4-a705-b046cb1b89b7",
    },
    {
      id: 2,
      description: "Evento TEDx",
      descriptionItalic: "Economía al servicio de las personas",
      externalLink: "https://www.youtube.com/embed/8jSc6M5BOPQ?si=EWkQEGV-cMr2MtgZ",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Feconomia-svc-personas.png?alt=media&token=2027b4eb-2697-442b-a7ab-a8da5036c7bf",
    },
    {
      id: 3,
      description: "Evento UNLP",
      descriptionItalic: "Emprendiendo en la incertidumbre",
      externalLink: "https://www.youtube.com/embed/AxQNdZjudJw?si=DfCMi5cIuDBfUoPo",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Femprendiendo-incertidumbre.png?alt=media&token=bd59b043-15f0-482f-84fd-b568f0b8c476",
    },
    {
      id: 4,
      description: "Evento Mundo de las Ideas",
      descriptionItalic: "Finanzas, de la imaginación a la realidad",
      externalLink: "https://www.youtube.com/embed/t_CaJKsyP6A?si=FDbO8ww-7Cl7YBb2",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Ffinanzas-img-realidad.png?alt=media&token=4f15e812-28e9-48d4-a705-b046cb1b89b7",
    },
    {
      id: 5,
      description: "Evento TEDx",
      descriptionItalic: "Economía al servicio de las personas",
      externalLink: "https://www.youtube.com/embed/8jSc6M5BOPQ?si=EWkQEGV-cMr2MtgZ",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Feconomia-svc-personas.png?alt=media&token=2027b4eb-2697-442b-a7ab-a8da5036c7bf",
    },
    {
      id: 6,
      description: "Evento UNLP",
      descriptionItalic: "Emprendiendo en la incertidumbre",
      externalLink: "https://www.youtube.com/embed/AxQNdZjudJw?si=DfCMi5cIuDBfUoPo",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Femprendiendo-incertidumbre.png?alt=media&token=bd59b043-15f0-482f-84fd-b568f0b8c476",
    },
  ],
};

const pressNotes: PressDomainModel = {
  title: "Notas",
  press: [
    {
      id: 1,
      description: "El futuro de la salud: la manipulación de los genes para prevenir enfermedades",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fel-futuro-de-la-salu.png?alt=media&token=8415919a-67fe-4eb2-8502-16504f1495d7",
    },
    {
      id: 2,
      description: "Mindcotine: ¡Dejá de fumar con esta app!",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fmindcotine-deja-de-fumar.png?alt=media&token=071eab3a-e23c-47f0-92c9-f99fe73c8734",
    },
    {
      id: 3,
      description: "Modesta: cuandola moda se recicla",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fmoda-se-recicla.png?alt=media&token=060ae7db-27fb-40a3-860e-e54db490335d",
    },
    {
      id: 4,
      description: "El futuro de la salud: la manipulación de los genes para prevenir enfermedades",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fel-futuro-de-la-salu.png?alt=media&token=8415919a-67fe-4eb2-8502-16504f1495d7",
    },
    {
      id: 5,
      description: "Mindcotine: ¡Dejá de fumar con esta app!",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fmindcotine-deja-de-fumar.png?alt=media&token=071eab3a-e23c-47f0-92c9-f99fe73c8734",
    },
    {
      id: 6,
      description: "Modesta: cuandola moda se recicla",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fmoda-se-recicla.png?alt=media&token=060ae7db-27fb-40a3-860e-e54db490335d",
    },
  ],
};

const pressArticles: PressDomainModel = {
  title: "Artículos",
  press: [
    {
      id: 1,
      description: "Revista SybproMag",
      descriptionItalic: "El valor de las experiencias",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      pdfPath: IndexPdfEnum.FIRST,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fel-valor-xp.png?alt=media&token=20a8676e-e036-49ac-8b40-9f8a117454e2",
    },
    {
      id: 2,
      description: "Yo vs mi otro Yo: ¿Quién decide?",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      pdfPath: IndexPdfEnum.SECOND,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fyo-vs-yo.png?alt=media&token=9867ac66-c286-44d3-a81d-87d664bd166a",
    },
    {
      id: 3,
      description: "Revista SybproMag",
      descriptionItalic: "¿Cómo actuamos cuando ganamos o perdemos dinero?",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      pdfPath: IndexPdfEnum.THIRD,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fcomo-actuamos-ganamos-o-perdemos.png?alt=media&token=203711f0-13bf-4190-9a87-86a9cae90128",
    },
    {
      id: 4,
      description: "Revista SybproMag",
      descriptionItalic: "El valor de las experiencias",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      pdfPath: IndexPdfEnum.FIRST,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fel-valor-xp.png?alt=media&token=20a8676e-e036-49ac-8b40-9f8a117454e2",
    },
    {
      id: 5,
      description: "Yo vs mi otro Yo: ¿Quién decide?",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      pdfPath: IndexPdfEnum.SECOND,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fyo-vs-yo.png?alt=media&token=9867ac66-c286-44d3-a81d-87d664bd166a",
    },
    {
      id: 6,
      description: "Revista SybproMag",
      descriptionItalic: "¿Cómo actuamos cuando ganamos o perdemos dinero?",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      pdfPath: IndexPdfEnum.THIRD,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fcomo-actuamos-ganamos-o-perdemos.png?alt=media&token=203711f0-13bf-4190-9a87-86a9cae90128",
    },
  ],
};

const pressData = { pressInterview, pressNotes, pressArticles };

export default pressData;
