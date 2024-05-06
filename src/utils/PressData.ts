import { PressDomainModel } from "../models/press-model";
import { PressTypeEnum } from "./enum";

const pressInterview: PressDomainModel = {
  title: "Charlas y entrevistas",
  press: [
    {
      id: 1,
      description: "Evento Mundo de las Ideas",
      descriptionItalic: "Finanzas, de la imaginación a la realidad",
      externalLink: "https://www.youtube.com/embed/t_CaJKsyP6A?si=FDbO8ww-7Cl7YBb2",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Finterview-2.png?alt=media&token=715458ad-c8fa-4d19-9992-02d08fc405fb",
    },
    {
      id: 2,
      description: "Evento TEDx",
      descriptionItalic: "Economía al servicio de las personas",
      externalLink: "https://www.youtube.com/embed/8jSc6M5BOPQ?si=EWkQEGV-cMr2MtgZ",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Finterview-1.png?alt=media&token=aaab1f92-8d86-4147-902d-7587b7535aa9",
    },
    {
      id: 3,
      description: "Evento UNLP",
      descriptionItalic: "Emprendiendo en la incertidumbre",
      externalLink: "https://www.youtube.com/embed/AxQNdZjudJw?si=DfCMi5cIuDBfUoPo",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Finterview-3.png?alt=media&token=6db6fed7-64d7-4b10-aefc-34fb53219677",
    },
    {
      id: 4,
      description: "Evento Mundo de las Ideas",
      descriptionItalic: "Finanzas, de la imaginación a la realidad",
      externalLink: "https://www.youtube.com/embed/t_CaJKsyP6A?si=FDbO8ww-7Cl7YBb2",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Finterview-2.png?alt=media&token=715458ad-c8fa-4d19-9992-02d08fc405fb",
    },
    {
      id: 5,
      description: "Evento TEDx",
      descriptionItalic: "Economía al servicio de las personas",
      externalLink: "https://www.youtube.com/embed/8jSc6M5BOPQ?si=EWkQEGV-cMr2MtgZ",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Finterview-1.png?alt=media&token=aaab1f92-8d86-4147-902d-7587b7535aa9",
    },
    {
      id: 6,
      description: "Evento UNLP",
      descriptionItalic: "Emprendiendo en la incertidumbre",
      externalLink: "https://www.youtube.com/embed/AxQNdZjudJw?si=DfCMi5cIuDBfUoPo",
      type: PressTypeEnum.VIDEO,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Finterview-3.png?alt=media&token=6db6fed7-64d7-4b10-aefc-34fb53219677",
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
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fnotes-1.png?alt=media&token=48d10fed-64e2-4e2c-b445-5e8ec1bdf7f7",
    },
    {
      id: 2,
      description: "Mindcotine: ¡Dejá de fumar con esta app!",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fnotes-2.png?alt=media&token=7a191685-da0c-4cb1-b0a7-aab714dd6f82",
    },
    {
      id: 3,
      description: "Modesta: cuandola moda se recicla",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fnotes-3.png?alt=media&token=e5490745-ddd2-4498-9d39-bf68cbaaf73e",
    },
    {
      id: 4,
      description: "El futuro de la salud: la manipulación de los genes para prevenir enfermedades",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fnotes-1.png?alt=media&token=48d10fed-64e2-4e2c-b445-5e8ec1bdf7f7",
    },
    {
      id: 5,
      description: "Mindcotine: ¡Dejá de fumar con esta app!",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fnotes-2.png?alt=media&token=7a191685-da0c-4cb1-b0a7-aab714dd6f82",
    },
    {
      id: 6,
      description: "Modesta: cuandola moda se recicla",
      externalLink: "",
      type: PressTypeEnum.NOTE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Fnotes-3.png?alt=media&token=e5490745-ddd2-4498-9d39-bf68cbaaf73e",
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
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Farticle-1.png?alt=media&token=3779126d-4fd6-4eff-87bb-48c05c0bcf56",
    },
    {
      id: 2,
      description: "Yo vs mi otro Yo: ¿Quién decide?",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Farticle-2.png?alt=media&token=440cc54e-63da-4e53-b855-a4d016903592",
    },
    {
      id: 3,
      description: "Revista SybproMag",
      descriptionItalic: "¿Cómo actuamos cuando ganamos o perdemos dinero?",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Farticle-3.png?alt=media&token=d67ddfe3-fdbb-493c-955d-d42bdc5f8fd0",
    },
    {
      id: 4,
      description: "Revista SybproMag",
      descriptionItalic: "El valor de las experiencias",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Farticle-1.png?alt=media&token=3779126d-4fd6-4eff-87bb-48c05c0bcf56",
    },
    {
      id: 5,
      description: "Yo vs mi otro Yo: ¿Quién decide?",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Farticle-2.png?alt=media&token=440cc54e-63da-4e53-b855-a4d016903592",
    },
    {
      id: 6,
      description: "Revista SybproMag",
      descriptionItalic: "¿Cómo actuamos cuando ganamos o perdemos dinero?",
      externalLink: "",
      type: PressTypeEnum.ARTICLE,
      imagePath: "https://firebasestorage.googleapis.com/v0/b/abes-vita.appspot.com/o/luciano%2Farticle-3.png?alt=media&token=d67ddfe3-fdbb-493c-955d-d42bdc5f8fd0",
    },
  ],
};

const pressData = { pressInterview, pressNotes, pressArticles };

export default pressData;
