import UserRepository from '../repositories/user-repository';
import { User } from '../helpers/database-type';

class UserService {
  /**
   * Constructs a new UserService instance
   * @param {UserRepository} userRepository - The UserRepository instance to be used
   */
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Create a new user and return the created record
   * @param {User} user - The user to be created
   * @returns {Promise<User | null>} - The created user or null
   * @throws {Error} - If there is an error during the operation
   */
  async createUser(user: User): Promise<User | null> {
    return this.userRepository.create(user);
  }

  /**
   * Get all users
   * @returns {Promise<User[]>} - An array of all users
   * @throws {Error} - If there is an error during the operation
   */
  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  /**
   * Get a user by id
   * @param {string} id - The user id to be retrieved
   * @returns {Promise<User>} - The user with the given id, or null if not found
   * @throws {Error} - If there is an error during the operation
   */
  async getUserById(id: string): Promise<User> {
    return this.userRepository.getById(id);
  }

  /**
   * Get a paginated list of users
   * @param {number} page - The page number to be retrieved
   * @param {number} limit - The number of users to be retrieved per page
   * @returns {Promise<User[]>} - An array of users with the given page and limit
   * @throws {Error} - If there is an error during the operation
   */
  async getPagination(page: number, limit: number): Promise<User[]> {
    return this.userRepository.getPagination(page, limit);
  }

  /**
   * Deletes a user by its id
   * @param {string} userId - The user id to be deleted
   * @returns {Promise<null>} - null
   * @throws {Error} - If there is an error during the operation
   */
  async deleteUserById(userId: string): Promise<User> {
    return this.userRepository.deleteUserById(userId);
  }

  /**
   * Updates a user by its id
   * @param {string} userId - The user id to be updated
   * @param {Partial<User>} user - The user object with the fields to be updated
   * @returns {Promise<User>} - The updated user
   * @throws {Error} - If there is an error during the operation
   */
  async updateUserById(userId: string, user: Partial<User>): Promise<User> {
    return this.userRepository.updateUserById(userId, user);
  }
}

export default UserService;
