import supabase from '../database/supabase';
import { User } from '../types/user';

class UserRepository {
  /**
   * Create a new user and return the created record
   * @param {User} user - The user to be created
   * @returns {Promise<User | null>} - The created user or null
   * @throws {Error} - If there is an error during the operation
   */
  async create(user: User): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from('Users')
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
        .from('Users')
        .select()
        .neq('role', 'admin');

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
