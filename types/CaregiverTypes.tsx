import { StaticImageData } from "next/image";

type CaregiverImage = {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
};

type ClientType = {
  name: string;
};

export type CaregiverDataType = {
  name: string;
  id: string;
  image: StaticImageData;
  clients: ClientType[];
};
