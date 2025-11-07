import supabase from '../database/supabase';
import { Job } from '../helpers/database-type';

class JobRepository {
  private table = 'Jobs';

  /**
   * Creates a new job and returns the created record
   * @param {Job} job - The job to be created
   * @returns {Promise<Job | null>} - The created job or null
   * @throws {Error} - If there is an error during the operation
   */
  async create(job: Job) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .insert([job])
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all jobs
   * @returns {Promise<Job[]>} - An array of all jobs
   * @throws {Error} - If there is an error during the operation
   */
  async getAll() {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .select(`*, user:Users ( full_name, email, bio, skills )`)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Gets a job by its user id
   * @param {string} userId - The user id of the job to be retrieved
   * @returns {Promise<Job | null>} - The job with the given user id, or null if not found
   * @throws {Error} - If there is an error during the operation
   */
  async getOne(id: string) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .select(`*, user:Users ( full_name, email, bio, skills )`)
        .eq('id', id)
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a paginated list of jobs
   * @param {number} page - The page number to be retrieved
   * @param {number} limit - The number of jobs to be retrieved per page
   * @returns {Promise<Job[]>} - An array of jobs with the given page and limit
   * @throws {Error} - If there is an error during the operation
   */
  async getPagination(page: number, limit: number) {
    try {
      const offset = (page - 1) * limit;

      const { data, error } = await supabase
        .from(this.table)
        .select(`*, user:Users ( full_name, email, bio, skills )`)
        .limit(limit)
        .range(offset, offset + limit - 1)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a job by its user id
   * @param {string} userId - The user id of the job to be deleted
   * @returns {Promise<Job | null>} - The deleted job or null
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

  /**
   * Updates a job by its id
   * @param {string} jobId - The job id to be updated
   * @param {Partial<Job>} job - The job object with the fields to be updated
   * @returns {Promise<Job | null>} - The updated job or null
   * @throws {Error} - If there is an error during the operation
   */
  async updateJobById(jobId: string, job: Partial<Job>) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .update(job)
        .eq('id', jobId)
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default JobRepository;
