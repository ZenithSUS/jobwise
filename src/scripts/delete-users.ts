import supabase from '../database/supabase';

async function deleteAllUsers() {
  const response = await supabase
    .from('Users')
    .delete()
    .in('role', ['freelancer', 'client', 'admin']);

  if (response.error) {
    console.error(response.error);
  } else {
    console.log(response.statusText);
  }
}

deleteAllUsers();
