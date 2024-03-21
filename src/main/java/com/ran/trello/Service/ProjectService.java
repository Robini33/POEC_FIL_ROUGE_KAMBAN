package com.ran.trello.Service;

import com.ran.trello.Model.Entity.Project;
import com.ran.trello.Model.Repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> findAll() { return projectRepository.findAll(); }

    public Project save(Project project) { return projectRepository.save(project); }

    public Optional<Project> findById(Integer id) { return projectRepository.findById(id); }
    public void deleteById(Integer id) { projectRepository.deleteById(id); } // <--->

    public List<Project> findByTitle(String title) { return projectRepository.findByTitle(title); }

    public Project update(Integer id, Project project) {
        Project projectToUpdate = findById(project.getId()).get();
        projectToUpdate.setTitle(project.getTitle());
        projectToUpdate.setDescription(project.getDescription());
        projectToUpdate.setBackground(project.getBackground());
        projectToUpdate.setWrappers(project.getWrappers());
        projectToUpdate.setUsers(project.getUsers());
        return projectRepository.save(projectToUpdate);
    }
}
