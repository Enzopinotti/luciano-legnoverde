import { PressTypeEnum } from "../utils/enum";

export interface PressModel {
  id: number;
  description: string;
  imagePath: string;
  externalLink: string;
  type: PressTypeEnum;
  descriptionItalic?: string;
}

export interface PressDomainModel {
  title: string;
  press: PressModel[];
}