import supabase from '../database/supabase';

async function deleteProjects() {
  const response = await supabase.from('Projects').delete();

  if (response.error) {
    console.error(response.error);
  } else {
    console.log(response.statusText);
  }
}

deleteProjects();
