import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	'https://thpmdxhnvymghwxjnqko.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocG1keGhudnltZ2h3eGpucWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MTA2MzYsImV4cCI6MjAxNjA4NjYzNn0.iSvURo8-6F-ns9QmFtEnuBE0pvQdHw6vf2VaMUAVQz0',
);