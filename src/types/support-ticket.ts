export type TicketStatus = 'open' | 'resolved' | 'closed';

export interface SupportTicket {
  id: string; // uuid (PK)
  user_id: string; // FK → users.id
  subject: string; // Ticket subject
  description: string; // Full issue report
  status: TicketStatus; // enum
  created_at: string; // timestamp (ISO 8601 format)
}

export interface SupportTicketCreate {
  user_id: string; // FK → users.id
  subject: string; // Ticket subject
  description: string; // Full issue report
}
