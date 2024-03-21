package com.ran.trello.Model.DTO;

import com.ran.trello.Model.Entity.UserP;
import com.ran.trello.Model.Entity.Wrapper;
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

    public ProjectDTO(Integer id, String title, String description, String background, List<Wrapper> wrappers, List<UserP> users) {
    }
}
