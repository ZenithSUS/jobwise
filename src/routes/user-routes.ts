import { Router } from 'express';
import UserController from '../controllers/user-controller';
import UserRepository from '../repositories/user-repository';
import UserService from '../services/user-service';

// Initialize repositories and services
const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

// Express Router
const router: Router = Router();

// Routes for User
router.post('/', userController.create);
router.get('/', userController.getAll);

export default router;
