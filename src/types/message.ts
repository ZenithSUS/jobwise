export interface Message {
  id: string; // uuid
  sender_id: string; // FK → users.id
  receiver_id: string; // FK → users.id
  content: string; // message body
  is_read: boolean; // whether the message is read
  created_at: string; // timestamp (ISO string)
}
