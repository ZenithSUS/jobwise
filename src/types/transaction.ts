export type TransactionStatus = 'pending' | 'completed' | 'failed';

export interface Transaction {
  id: string; // uuid (PK)
  user_id: string; // FK → users.id
  subscription_id: string; // FK → subscriptions.id
  amount: number; // numeric(10,2)
  currency: string; // e.g. "USD"
  status: TransactionStatus; // enum
  stripe_payment_id: string; // Stripe reference
  created_at: string; // timestamp (ISO 8601 format)
}

export interface TransactionCreate {
  user_id: string; // FK → users.id
  subscription_id: string; // FK → subscriptions.id
  amount: number; // numeric(10,2)
  currency: string; // e.g. "USD"
}

export interface TransactionUpdate {
  status: TransactionStatus; // enum
  stripe_payment_id: string; // Stripe reference
}
