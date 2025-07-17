import { City } from "./city.model";
import { Province } from "./province.model";

// https://www.paziresh24.com/api/getbaseinfo
export interface ApiResponse {
  status: number;
  message: string;
  result: Location;
}

export interface Location {
  city: City[];
  province: Province[];
}