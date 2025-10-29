import { Request, Response } from 'express';
import UserService from '../services/user-service';
import { User } from '../helpers/database-type';

class UserController {
  /**
   * Constructs a new UserController instance with the given UserService
   * @param {UserService} userService - The UserService instance to be injected
   */
  constructor(private readonly userService: UserService) {}

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

  /**
   * Get a user by id
   * @param req
   * @param res
   * @returns {Promise<void>} The user with the given id
   */
  getById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid user id' });
      }

      const user = await this.userService.getUserById(id);

      return res.status(200).json(user);
    } catch (error) {
      console.error('Error getting user by id:', error);
      res.status(500).json({ error: 'Failed to get user by id' });
    }
  };

  /**
   * Get a paginated list of users
   * @param req
   * @param res
   * @returns {Promise<void>} An array of users with the given page and limit
   */
  getPagination = async (req: Request, res: Response) => {
    try {
      const { page, limit } = req.params;

      if (!page || !limit) {
        return res.status(400).json({ error: 'Missing page or limit' });
      }

      const users = await this.userService.getPagination(
        Number(page),
        Number(limit),
      );
      return res.status(200).json(users);
    } catch (error) {
      console.error('Error getting users by pagination:', error);
      res.status(500).json({ error: 'Failed to get users by pagination' });
    }
  };

  /**
   * Delete a user by id
   * @param req
   * @param res
   * @returns {Promise<void>} The deleted user
   */
  deleteById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid user id' });
      }

      const deletedUser = await this.userService.deleteUserById(id);
      return res.status(200).json(deletedUser);
    } catch (error) {
      console.error('Error deleting user by id:', error);
      res.status(500).json({ error: 'Failed to delete user by id' });
    }
  };

  updateById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data: Partial<User> = req.body;

      if (!id || typeof id !== 'string')
        return res.status(400).json({ error: 'Invalid user id' });

      if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        return res.status(400).json({ error: 'Invalid user data' });
      }

      const updatedUser = await this.userService.updateUserById(id, data);
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user by id:', error);
      res.status(500).json({ error: 'Failed to update user by id' });
    }
  };
}

export default UserController;
