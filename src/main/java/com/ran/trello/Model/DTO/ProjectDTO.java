package com.ran.trello.Model.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class ProjectDTO {
    private Integer id;
    private String title;
    private String description;
    private String background;
    private List<Integer> wrappersIds = new ArrayList<>();
    private List<Integer> userId;
}
