package com.freelance.biddingsystem.repository;

import com.freelance.biddingsystem.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    // Spring Data JPA automatically provides methods like findAll(), save(), findById(), etc.
}