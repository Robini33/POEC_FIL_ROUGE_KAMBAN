package com.ran.trello.Controller;

import com.ran.trello.Model.Entity.Project;
import com.ran.trello.Service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {

    private ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> findAll() {
        return projectService.findAll();
    }

    @GetMapping("/{id}")
    public Project findById(@PathVariable Integer id) {
        return projectService.findById(id).get();
    }

    @GetMapping("/{title}")
    public List<Project> findByTitle(@PathVariable String title) {
        return projectService.findByTitle(title);
    }

    @PostMapping
    public Project save(@RequestBody Project project) {
        return projectService.save(project);
    }
    @PutMapping("/{id}")
    public Project update(@PathVariable Integer id, @RequestBody Project project) {
        return projectService.update(id, project);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id) {
        projectService.deleteById(id);
    }
}
