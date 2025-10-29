import { Database } from '../types/supabase';

export type User = Database['public']['Tables']['Users']['Row'];
export type Message = Database['public']['Tables']['Messages']['Row'];
export type Resume = Database['public']['Tables']['Resumes']['Row'];
export type Job = Database['public']['Tables']['Jobs']['Row'];
export type Subscription = Database['public']['Tables']['Subscriptions']['Row'];
