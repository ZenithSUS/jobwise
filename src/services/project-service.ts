import { Project } from '../helpers/database-type';
import ProjectRepository from '../repositories/project-repository';

class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  /**
   * Creates a new project and returns the created record
   * @param {Project} project - The project to be created
   * @returns {Promise<Project | null>} - The created project or null
   * @throws {Error} - If there is an error during the operation
   */
  async createProject(project: Project) {
    return this.projectRepository.create(project);
  }

  /**
   * Get all projects
   * @returns {Promise<Project[]>} - An array of all projects
   * @throws {Error} - If there is an error during the operation
   */
  async getAllProjects() {
    return this.projectRepository.getAll();
  }

  /**
   * Gets a project by its id
   * @param {string} id - The id of the project to be retrieved
   * @returns {Promise<Project | null>} - The project with the given id, or null if not found
   * @throws {Error} - If there is an error during the operation
   */
  async getProjectById(id: string) {
    return this.projectRepository.getOne(id);
  }

  /**
   * Get a paginated list of projects
   * @param {number} page - The page number to be retrieved
   * @param {number} limit - The number of projects to be retrieved per page
   * @returns {Promise<Project[]>} - An array of projects with the given page and limit
   * @throws {Error} - If there is an error during the operation
   */
  async getPagination(page: number, limit: number) {
    return this.projectRepository.getPagination(page, limit);
  }

  /**
   * Updates a project by its id
   * @param {string} projectId - The id of the project to be updated
   * @param {Partial<Project>} project - The project object with the fields to be updated
   * @returns {Promise<Project | null>} - The updated project or null
   * @throws {Error} - If there is an error during the operation
   */
  async updateProjectById(projectId: string, project: Partial<Project>) {
    return this.projectRepository.updateProjectById(projectId, project);
  }

  /**
   * Deletes a project by its id
   * @param {string} projectId - The id of the project to be deleted
   * @returns {Promise<Project | null>} - The deleted project or null
   * @throws {Error} - If there is an error during the operation
   */
  async deleteProjectById(projectId: string) {
    return this.projectRepository.deleteById(projectId);
  }
}

export default ProjectService;
