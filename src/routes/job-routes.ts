import { Router } from 'express';
import JobController from '../controllers/job-controller';
import JobRepository from '../repositories/job-repository';
import JobService from '../services/job-service';

// Initialize repositories
const jobRep = new JobRepository();
const jobService = new JobService(jobRep);
const jobController = new JobController(jobService);

// Express Router
const router: Router = Router();

// Routes for Job
router.post('/', jobController.create);
router.get('/', jobController.getAll);
router.get('/:id', jobController.getById);
router.get('/page/:page/limit/:limit', jobController.getPagination);
router.delete('/:id', jobController.deleteById);
router.put('/:id', jobController.updateById);

export default router;
