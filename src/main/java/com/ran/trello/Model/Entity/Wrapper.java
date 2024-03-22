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
    private Integer position;
    @OneToMany
    @JoinTable(name = "wrapper_cards",
            joinColumns = @JoinColumn(name = "wrapper_id"),
            inverseJoinColumns = @JoinColumn(name = "card_id"))
    private List<TaskCard> cards = new ArrayList<>();
    @ManyToOne(targetEntity = Project.class)
    @JoinColumn(name = "project_id")
    private Integer projectId;

    public Wrapper(String title, Integer position, List<TaskCard> cards, Integer projectId) {
        this.title = title;
        this.position = position;
        this.cards = cards;
        this.projectId = projectId;
    }
}
