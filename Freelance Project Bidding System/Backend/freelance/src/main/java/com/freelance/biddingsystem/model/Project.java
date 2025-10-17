package com.freelance.biddingsystem.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data // Lombok annotation for getters/setters
@Entity
@Table(name = "Projects") // Must match your DB table name
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // You need to define the employer relationship later
    @Column(name = "employer_id")
    private Long employerId;

    private String title;
    private String description;

    @Column(name = "created_on")
    private Instant createdOn = Instant.now();

    // Other fields like budget_range, deadline, status can be added here
}