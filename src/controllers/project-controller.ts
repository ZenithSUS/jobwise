import { Request, Response } from 'express';
import ProjectService from '../services/project-service';
import { Project } from '../helpers/database-type';

class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  /**
   * Creates a new project
   * @param req
   * @param res
   * @returns The created project or an error
   */
  create = async (req: Request, res: Response) => {
    try {
      const data: Project = req.body;

      if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        return res.status(400).json({ error: 'Invalid project data' });
      }

      const createdProject = await this.projectService.createProject(data);
      return res.status(201).json(createdProject);
    } catch (error) {
      console.error('Error creating project:', error);
      return res.status(500).json({ error: 'Failed to create project' });
    }
  };

  /**
   * Get all projects
   * @param req
   * @param res
   * @returns All projects or an error
   */
  getAll = async (req: Request, res: Response) => {
    try {
      const projects = await this.projectService.getAllProjects();
      return res.status(200).json(projects);
    } catch (error) {
      console.error('Error getting all projects:', error);
      return res.status(500).json({ error: 'Failed to get all projects' });
    }
  };

  /**
   * Get a project by id
   * @param req
   * @param res
   * @returns The project or an error
   */
  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const project = await this.projectService.getProjectById(id);
      return res.status(200).json(project);
    } catch (error) {
      console.error('Error getting project by id:', error);
      return res.status(500).json({ error: 'Failed to get project by id' });
    }
  };

  /**
   * Get a paginated list of projects
   * @param req
   * @param res
   * @returns A paginated list of projects or an error
   */
  getPagination = async (req: Request, res: Response) => {
    try {
      const page = Number(req.params.page) || 1;
      const limit = Number(req.params.limit) || 10;

      const projects = await this.projectService.getPagination(page, limit);
      return res.status(200).json(projects);
    } catch (error) {
      console.error('Error getting projects by pagination:', error);
      return res
        .status(500)
        .json({ error: 'Failed to get projects by pagination' });
    }
  };

  /**
   * Delete a project by id
   * @param req
   * @param res
   * @returns The deleted project or an error
   */
  deleteById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid project id' });
      }

      const deletedProject = await this.projectService.deleteProjectById(id);
      return res.status(200).json(deletedProject);
    } catch (error) {
      console.error('Error deleting project by id:', error);
      return res.status(500).json({ error: 'Failed to delete project by id' });
    }
  };

  /**
   * Update a project by id
   * @param req
   * @param res
   * @returns The updated project or an error
   */
  updatedById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid project id' });
      }

      const updatedProject = await this.projectService.updateProjectById(
        id,
        req.body,
      );
      return res.status(200).json(updatedProject);
    } catch (error) {
      console.error('Error updating project by id:', error);
      return res.status(500).json({ error: 'Failed to update project by id' });
    }
  };
}

export default ProjectController;
