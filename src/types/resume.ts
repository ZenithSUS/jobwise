export interface Resume {
  id: string; // UUID (Primary Key)
  user_id: string; // FK → users.id
  file_url: string; // resume file path (PDF or text)
  parsed_text: string; // extracted text content
  embedding_vector?: number[]; // optional vector for AI retrieval
  created_at: Date; // upload date
}
