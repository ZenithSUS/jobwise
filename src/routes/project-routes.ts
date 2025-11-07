import { Router } from 'express';
import ProjectController from '../controllers/project-controller';
import ProjectRepository from '../repositories/project-repository';
import ProjectService from '../services/project-service';

// Initialize repositories
const projectRepo = new ProjectRepository();
const projectService = new ProjectService(projectRepo);
const projectController = new ProjectController(projectService);

// Express Router
const router: Router = Router();

// Routes for Project
router.post('/', projectController.create);
router.get('/', projectController.getAll);
router.get('/:id', projectController.getById);
router.get('/page/:page/limit/:limit', projectController.getPagination);
router.delete('/:id', projectController.deleteById);
router.put('/:id', projectController.updateById);

export default router;
