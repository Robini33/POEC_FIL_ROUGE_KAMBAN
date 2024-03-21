package com.ran.trello.Model.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Wrapper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;

    @OneToMany(mappedBy = "wrapper")
    private List<TaskCard> cards = new ArrayList<>();
    private Integer projectId;

    public Wrapper(String title, List<TaskCard> cards, int projectId) {
        this.title = title;
        this.cards = cards;
        this.projectId = projectId;
    }

}
