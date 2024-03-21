package com.ran.trello.Model.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class UserDTO {
    private Integer id;
    private String email;
    private String firstname;
    private String lastname;
    private List<Integer> projects;

}
