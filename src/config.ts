import dotenv from 'dotenv';

dotenv.config();

interface Config {
  PORT: number;
  NODE_ENV: string;
  JWT_SECRET: string;
  SUPABASE_URL: string;
  SUPABASE_API_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
}

const config: Config = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  SUPABASE_URL: process.env.SUPABASE_URL || '',
  SUPABASE_API_KEY: process.env.SUPABASE_API_KEY || '',
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
};

export default config;
