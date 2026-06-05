const SUPA_URL='https://oqkpqdxjjkpmbabijvsf.supabase.co';
const SUPA_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xa3BxZHhqamtwbWJhYmlqdnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NzMzNzIsImV4cCI6MjA5NjI0OTM3Mn0.VVYVzmoCLsDyV1Cea2WcorTNjyMw6zlw6AmlmUq0sZI';
const db=supabase.createClient(SUPA_URL,SUPA_KEY);

async function requireAuth(){
  const {data:{session}}=await db.auth.getSession();
  if(!session){window.location.href='index.html';return null;}
  return session;
}
