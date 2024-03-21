package com.ran.trello.Service;

import com.ran.trello.Model.DTO.ProjectDTO;
import com.ran.trello.Model.Entity.Project;
import com.ran.trello.Model.Repository.ProjectRepository;
import com.ran.trello.Model.Repository.UserPRepository;
import com.ran.trello.Model.Repository.WrapperRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    private final UserPRepository userPRepository;

    private final WrapperRepository wrapperRepository;

    public ProjectService(ProjectRepository projectRepository, UserPRepository userPRepository, WrapperRepository wrapperRepository) {
        this.projectRepository = projectRepository;
        this.userPRepository = userPRepository;
        this.wrapperRepository = wrapperRepository;
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
