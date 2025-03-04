export interface MessageType {
  id: number;
  title: string;
  description: string;
}

export interface AccountType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  specialty: string;
  password: string;
}


export interface EventData {
  id: number;
  title: string;
  slug: string;
  image: string;
  map_location: string;
  hotel_name: string;
  start_date: string; // ISO date string
  end_date: string;   // ISO date string
  ics_link: string;
  is_active: boolean;
  overview: Section;
  accreditation: Section;
  faculty: Section;
  scientific_program: Section;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  html_data: string;
  days:string;
  address:string;
}

interface Section {
  title: string;
  description: string;
}

export interface User {
  id: number;
  email: string;
  role: string;
  email_verified_at: string | null;
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
  first_name: string;
  last_name: string;
  speciality: string | null;
  event_id: number;
}
