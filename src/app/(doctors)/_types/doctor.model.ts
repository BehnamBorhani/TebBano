export interface Doctor {
  _id: string;
  id: string;
  server_id: number;
  type: string;
  title: string;
  prefix: string;
  image: string;
  view: string;
  display_expertise: string;
  satisfaction: number;
  rates_count: number;
  centers: Center[];
  display_address: string;
  waiting_time: number | null;
  badges: string[];
  is_bulk: boolean;
  consult_active_booking: boolean;
  presence_active_booking: boolean;
  url: string;
  actions: Action[];
  experience: number | null;
  position: number;
  has_presciption: boolean;
  insurances: string[];
  experiment_details: ExperimentDetails;
  expertises: Expertise[];
  presence_freeturn: number;
  gender: number;
  expertise: string[];
  rate_info: RateInfo;
  consult_services: ConsultService[];
  doctor_id: string;
  freeturns_info: FreeturnInfo[];
  number_of_visits: number;
  waiting_time_info: number | null;
  slug: string;
  graduation_date: string | null;
  star: number;
  available_time_status: number;
  services: Service[];
  university_name: string[];
  display_name: string;
  record_type: string;
  center_id: string[];
  consult_freeturn: number;
  name: string;
  medical_code: string;
  calculated_rate: number;
}

interface Center {
  id: string;
  status: number;
  user_center_id: string;
  server_id: number;
  name: string;
  display_number: string;
  address: string;
  province_name: string;
  city_name: string;
  center_type: number;
  map: Map;
  active_booking: boolean;
}

interface Map {
  lat: number;
  lon: number;
}

interface Action {
  title: string;
  outline: boolean;
  top_title: string;
  url: string;
}

interface ExperimentDetails {
  search_index: string;
  consult_search_index: string;
}

interface Expertise {
  degree: Degree;
  alias_title: string;
  expertise: ExpertiseDetails;
  expertise_groups: ExpertiseGroup[];
}

interface Degree {
  id: number;
  name: string;
}

interface ExpertiseDetails {
  name: string;
}

interface ExpertiseGroup {
  name: string;
}

interface RateInfo {
  waiting_time: number;
  waiting_time_count: number;
  doctor_encounter: number;
  quality_of_treatment: number;
  rate: number;
  comments_count: number;
  rates_count: number;
  count_dislike: number;
}

interface ConsultService {
  id: string;
  free_price: number;
}

interface FreeturnInfo {
  center_id: string;
  available_time: string;
  freeturn: string;
}

interface Service {
  id: string;
  center_id: string;
  workhours: WorkHour[];
}

interface WorkHour {
  types: Type[];
}

interface Type {
  name: string;
}
