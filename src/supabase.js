import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://tfrtnrdhfaseykpxujlx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcnRucmRoZmFzZXlrcHh1amx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMzk1NjUsImV4cCI6MjAwNDkxNTU2NX0.PUkSp9-m15JcLR2DvtA0e11k74KzzYY0ytV8ZoEhlLM';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;