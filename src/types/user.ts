export type UserRole = 'freelancer' | 'client' | 'admin';

export interface User {
  id: string; // UUID (Primary Key)
  email: string; // unique
  password_hash: string; // encrypted password
  role: UserRole; // enum
  full_name: string;
  bio?: string; // optional short bio
  profile_image?: string; // URL to avatar
  skills?: string[]; // array of skill tags
  hourly_rate?: number; // numeric(10,2)
  created_at: Date; // timestamp
  updated_at: Date; // timestamp
  subscription_plan_id?: string | null; // FK → subscriptions.id
}
