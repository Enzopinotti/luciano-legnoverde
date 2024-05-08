import { IndexPdfEnum, PressTypeEnum } from "../utils/enum";

export interface PressModel {
  id: number;
  description: string;
  imagePath: string;
  externalLink: string;
  type: PressTypeEnum;
  descriptionItalic?: string;
  pdfPath?: IndexPdfEnum;
}

export interface PressDomainModel {
  title: string;
  press: PressModel[];
}