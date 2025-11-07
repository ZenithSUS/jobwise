import supabase from '../database/supabase';
import { Project } from '../helpers/database-type';

class ProjectRepository {
  private table = 'Projects';

  /**
   * Creates a new project and returns the created record
   * @param {Project} project - The project to be created
   * @returns {Promise<Project | null>} - The created project or null
   * @throws {Error} - If there is an error during the operation
   */
  async create(project: Project) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .insert([project])
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all projects
   * @returns {Promise<Project[]>} - An array of all projects
   * @throws {Error} - If there is an error during the operation
   */
  async getAll() {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .select()
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Gets a project by its user id
   * @param {string} userId - The user id of the project to be retrieved
   * @returns {Promise<Project | null>} - The project with the given user id, or null if not found
   * @throws {Error} - If there is an error during the operation
   */
  async getOne(id: string) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .select(`*, user:Users ( full_name, email, bio, skills )`, {
          count: 'exact',
        })
        .eq('id', id)
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a paginated list of projects
   * @param {number} page - The page number to be retrieved
   * @param {number} limit - The number of projects to be retrieved per page
   * @returns {Promise<Project[]>} - An array of projects with the given page and limit
   * @throws {Error} - If there is an error during the operation
   */
  async getPagination(page: number, limit: number) {
    try {
      const offset = (page - 1) * limit;
      const { data, error } = await supabase
        .from(this.table)
        .select(`*, user:Users ( full_name, email, bio, skills )`, {
          count: 'exact',
        })
        .limit(limit)
        .range(offset, offset + limit - 1);

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates a project by its id
   * @param {string} projectId - The project id to be updated
   * @param {Partial<Project>} project - The project object with the fields to be updated
   * @returns {Promise<Project | null>} - The updated project or null
   * @throws {Error} - If there is an error during the operation
   */
  async updateProjectById(projectId: string, project: Partial<Project>) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .update(project)
        .eq('id', projectId)
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a project by its user id
   * @param {string} userId - The user id of the project to be deleted
   * @returns {Promise<Project | null>} - The deleted project or null
   * @throws {Error} - If there is an error during the operation
   */
  async deleteById(id: string) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .delete()
        .eq('id', id)
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default ProjectRepository;
