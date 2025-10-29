export enum ApplicationStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Rejected = 'rejected',
}

export interface Application {
  id: string; // uuid (PK)
  job_id: string; // FK → jobs.id
  freelancer_id: string; // FK → users.id
  cover_letter: string; // freelancer's custom pitch
  status: 'pending' | 'accepted' | 'rejected'; // enum
  created_at: string; // timestamp (ISO string)
}
