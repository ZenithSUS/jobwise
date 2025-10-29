import supabase from '../database/supabase';
import { User } from '../types/user';

class UserRepository {
  private table = 'Users';

  /**
   * Create a new user and return the created record
   * @param {User} user - The user to be created
   * @returns {Promise<User | null>} - The created user or null
   * @throws {Error} - If there is an error during the operation
   */
  async create(user: User): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .insert([user])
        .select()
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all users
   * @returns {Promise<User[]>} - An array of all users
   * @throws {Error} - If there is an error during the operation
   */
  async getAll(): Promise<User[]> {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .select()
        .neq('role', 'admin');

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a user by id
   * @param {string} id - The user id to be retrieved
   * @returns {Promise<User>} - The user with the given id, or null if not found
   * @throws {Error} - If there is an error during the operation
   */
  async getById(id: string): Promise<User> {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .select()
        .eq('id', id)
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a paginated list of users
   * @param {number} page - The page number to be retrieved
   * @param {number} limit - The number of users to be retrieved per page
   * @returns {Promise<User[]>} - An array of users with the given page and limit
   * @throws {Error} - If there is an error during the operation
   */
  async getPagination(page: number, limit: number): Promise<User[]> {
    try {
      const offset = (page - 1) * limit;
      const { data, error } = await supabase
        .from(this.table)
        .select()
        .range(offset, offset + limit - 1);

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a user by its id
   * @param {string} userId - The user id to be deleted
   * @returns {Promise<User>} - The deleted user
   * @throws {Error} - If there is an error during the operation
   */
  async deleteUserById(userId: string): Promise<User> {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .delete()
        .eq('id', userId)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates a user by its id
   * @param {string} userId - The user id to be updated
   * @param {Partial<User>} user - The user object with the fields to be updated
   * @returns {Promise<User>} - The updated user
   * @throws {Error} - If there is an error during the operation
   */
  async updateUserById(userId: string, user: Partial<User>): Promise<User> {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .update(user)
        .eq('id', userId)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
