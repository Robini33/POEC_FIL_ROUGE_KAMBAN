package com.ran.trello.Model.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WrapperRepository<Wrapper> extends JpaRepository<Wrapper, Integer> {
}
