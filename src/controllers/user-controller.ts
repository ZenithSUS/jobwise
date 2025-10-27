import { Request, Response } from 'express';
import UserService from '../services/user-service';
import { User } from '../types/user';

class UserController {
  // Dependency injection to inject the UserService class
  constructor(private userService: UserService) {}

  /**
   * Create a new user
   * @param req
   * @param res
   * @returns {Promise<void>} The created user
   */
  create = async (req: Request, res: Response) => {
    try {
      const user: User = req.body;

      // Validate user data if is an object and not empty
      if (!user || typeof user !== 'object' || Object.keys(user).length === 0) {
        return res.status(400).json({ error: 'Invalid user data' });
      }

      const createdUser = await this.userService.createUser(user);

      res.status(201).json(createdUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  };

  /**
   * Get all users
   * @param req
   * @param res
   * @returns {Promise<void>} An array of all users
   */
  getAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ error: 'Failed to get users' });
    }
  };
}

export default UserController;
