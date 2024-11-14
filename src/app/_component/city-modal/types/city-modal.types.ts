import { Location } from "./api-response.model";

export type CityModalProps = {
  isOpen: boolean;
  locations: Location;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<{
      en_slug: string;
      name: string;
    }>
  >;
};
