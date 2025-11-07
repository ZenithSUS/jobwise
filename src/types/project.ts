export interface Project {
  id: string; // uuid (PK)
  freelancer_id: string; // FK → users.id
  title: string; // Project name
  description: string; // Project overview
  price: number; // numeric(10,2)
  demo_url?: string; // Optional live demo
  thumbnail_url: string; // Project screenshot
  created_at: string; // timestamp (ISO 8601 format)
}

export interface ProjectCreate {
  freelancer_id: string; // FK → users.id
  title: string; // Project name
  description: string; // Project overview
  price: number; // numeric(10,2)
  demo_url?: string; // Optional live demo
  thumbnail_url: string; // Project screenshot
}

export interface ProjectUpdate {
  title?: string; // Project name
  description?: string; // Project overview
  price?: number; // numeric(10,2)
  demo_url?: string; // Optional live demo
  thumbnail_url?: string; // Project screenshot
}
