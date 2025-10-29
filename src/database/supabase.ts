import { createClient } from '@supabase/supabase-js';
import config from '../config';

const supabaseUrl = config.SUPABASE_URL;
const supabaseKey =
  config.NODE_ENV === 'production'
    ? config.SUPABASE_API_KEY
    : config.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
