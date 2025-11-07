import { Database } from '../types/supabase';

export type User = Database['public']['Tables']['Users']['Row'];
export type Message = Database['public']['Tables']['Messages']['Row'];
export type Project = Database['public']['Tables']['Projects']['Row'];
export type Resume = Database['public']['Tables']['Resumes']['Row'];
export type Job = Database['public']['Tables']['Jobs']['Row'];
export type Subscription = Database['public']['Tables']['Subscriptions']['Row'];
export type Application = Database['public']['Tables']['Applications']['Row'];
export type AIRecommendation =
  Database['public']['Tables']['AIRecommendations']['Row'];
export type Transaction = Database['public']['Tables']['Transactions']['Row'];
export type SupportTicket =
  Database['public']['Tables']['SupportTickets']['Row'];
