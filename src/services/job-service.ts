import { Job } from '../helpers/database-type';
import JobRepository from '../repositories/job-repository';

class JobService {
  constructor(private readonly jobRepository: JobRepository) {}

  /**
   * Creates a new job and returns the created record
   * @param {Job} job - The job to be created
   * @returns {Promise<Job | null>} - The created job or null
   * @throws {Error} - If there is an error during the operation
   */
  async createJob(job: Job) {
    return await this.jobRepository.create(job);
  }

  /**
   * Get all jobs
   * @returns {Promise<Job[]>} - An array of all jobs
   * @throws {Error} - If there is an error during the operation
   */
  async getAllJobs() {
    return await this.jobRepository.getAll();
  }

  /**
   * Gets a job by its id
   * @param {string} userId - The id of the job to be retrieved
   * @returns {Promise<Job | null>} - The job with the given user id, or null if not found
   * @throws {Error} - If there is an error during the operation
   */
  async getOneJob(id: string) {
    return await this.jobRepository.getOne(id);
  }

  /**
   * Get a paginated list of jobs
   * @param {number} page - The page number to be retrieved
   * @param {number} limit - The number of jobs to be retrieved per page
   * @returns {Promise<Job[]>} - An array of jobs with the given page and limit
   * @throws {Error} - If there is an error during the operation
   */
  async getPaginationJobs(page: number, limit: number) {
    return await this.jobRepository.getPagination(page, limit);
  }

  /**
   * Deletes a job by its id
   * @param {string} id - The job id to be deleted
   * @returns {Promise<Job | null>} - The deleted job or null
   * @throws {Error} - If there is an error during the operation
   */
  async deleteJobById(id: string) {
    return await this.jobRepository.deleteById(id);
  }

  async updateJobByUserId(jobId: string, job: Partial<Job>) {
    return await this.jobRepository.updateJobById(jobId, job);
  }
}

export default JobService;
