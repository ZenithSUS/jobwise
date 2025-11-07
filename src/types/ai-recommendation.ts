export interface AIRecommendation {
  id: string; // uuid (PK)
  user_id: string; // FK → users.id
  recommended_jobs: any[] | Record<string, any>; // jsonb — list of job IDs or titles
  confidence_score: number; // numeric(5,2)
  created_at: string; // timestamp (ISO 8601 format)
}

export interface AIRecommendationCreate {
  user_id: string;
  recommended_jobs: any[] | Record<string, any>;
  confidence_score: number;
}
