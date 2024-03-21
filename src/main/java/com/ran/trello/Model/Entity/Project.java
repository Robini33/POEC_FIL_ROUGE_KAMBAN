package com.ran.trello.Model.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Project {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private String background;
    private List<Wrapper> wrappers = new ArrayList<>();
    private List<UserP> users;

    public Project(String title, String description, String background, List<Wrapper> wrappers, List<UserP> users) {
        this.title = title;
        this.description = description;
        this.background = background;
        this.wrappers = wrappers;
        this.users = users;
    }
}
