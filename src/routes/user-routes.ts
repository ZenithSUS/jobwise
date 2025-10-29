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
router.get('/:id', userController.getById);
router.get('/page/:page/limit/:limit', userController.getPagination);
router.delete('/:id', userController.deleteById);
router.put('/:id', userController.updateById);

export default router;
