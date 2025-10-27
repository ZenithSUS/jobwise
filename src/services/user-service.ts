import UserRepository from '../repositories/user-repository';
import { User } from '../types/user';

class UserService {
  // Dependency injection to inject the UserRepository class
  constructor(private userRepository: UserRepository) {}

  /**
   * Create a new user and return the created record
   * @param {User} user - The user to be created
   * @returns {Promise<User | null>} - The created user or null
   * @throws {Error} - If there is an error during the operation
   */
  async createUser(user: User) {
    return this.userRepository.create(user);
  }

  /**
   * Get all users
   * @returns {Promise<User[]>} - An array of all users
   * @throws {Error} - If there is an error during the operation
   */
  async getAllUsers() {
    return this.userRepository.getAll();
  }
}

export default UserService;
