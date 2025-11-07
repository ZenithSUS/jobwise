import { Request, Response } from 'express';
import JobService from '../services/job-service';
import { Job } from '../helpers/database-type';

class JobController {
  constructor(private readonly jobService: JobService) {}

  /**
   * Creates a new job
   * @param req
   * @param res
   * @returns The created job or null
   */
  create = async (req: Request, res: Response) => {
    try {
      const job: Job = req.body;

      if (!job || typeof job !== 'object') {
        return res.status(400).json({ error: 'Invalid job data' });
      }

      const createdJob = await this.jobService.createJob(job);
      return res.status(201).json(createdJob);
    } catch (error) {
      console.error('Error creating job:', error);
      return res.status(500).json({ error: 'Failed to create job' });
    }
  };

  /**
   * Gets all jobs
   * @param req
   * @param res
   * @returns An array of all jobs
   */
  getAll = async (req: Request, res: Response) => {
    try {
      const jobs = await this.jobService.getAllJobs();
      return res.status(200).json(jobs);
    } catch (error) {
      console.error('Error getting jobs:', error);
      return res.status(500).json({ error: 'Failed to get jobs' });
    }
  };

  /**
   * Gets a job by its user id
   * @param req
   * @param res
   * @returns The job with the given user id, or null if not found
   */
  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid job id' });
      }

      const job = await this.jobService.getOneJob(id);
      return res.status(200).json(job);
    } catch (error) {
      console.error('Error getting job:', error);
      return res.status(500).json({ error: 'Failed to get job' });
    }
  };

  /**
   * Get a paginated list of jobs
   * @param req
   * @param res
   * @returns An array of jobs with the given page and limit
   */
  getPagination = async (req: Request, res: Response) => {
    try {
      const { page, limit } = req.params;

      if (
        !page ||
        typeof page !== 'string' ||
        !limit ||
        typeof limit !== 'string'
      ) {
        return res.status(400).json({ error: 'Invalid page or limit' });
      }

      const jobs = await this.jobService.getPaginationJobs(
        Number(page),
        Number(limit),
      );
      return res.status(200).json(jobs);
    } catch (error) {
      console.error('Error getting jobs:', error);
      return res.status(500).json({ error: 'Failed to get jobs' });
    }
  };

  /**
   * Deletes a job by its id
   * @param req
   * @param res
   * @returns The deleted job or null
   */
  deleteById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid job id' });
      }

      const job = await this.jobService.deleteJobById(id);
      return res.status(200).json(job);
    } catch (error) {
      console.error('Error deleting job:', error);
      return res.status(500).json({ error: 'Failed to delete job' });
    }
  };

  /**
   * Updates a job by its user id
   * @param req
   * @param res
   * @returns The updated job or null
   */
  updateById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const job: Partial<Job> = req.body;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid job id' });
      }

      if (!job || typeof job !== 'object') {
        return res.status(400).json({ error: 'Invalid job data' });
      }

      const updatedJob = await this.jobService.updateJobByUserId(id, job);
      return res.status(200).json(updatedJob);
    } catch (error) {
      console.error('Error updating job:', error);
      return res.status(500).json({ error: 'Failed to update job' });
    }
  };
}

export default JobController;
