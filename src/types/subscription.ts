export interface Subscription {
  id: string; // UUID (Primary Key)
  name: string; // e.g. "Free", "Standard", "Pro"
  price_monthly: number; // numeric(10,2)
  features: Record<string, any> | string[]; // JSON list of plan features
  post_limit: number; // job post limit for clients
  visibility_boost: boolean; // freelancer visibility boost
  ai_limit: number; // AI recommendations per month
}
