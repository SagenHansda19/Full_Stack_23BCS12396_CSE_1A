package com.freelance.biddingsystem.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data // Lombok annotation to create getters, setters, etc.
@Entity
@Table(name = "Users") // This must match your table name
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole role;

    @Column(name = "joined_on")
    private Instant joinedOn = Instant.now();
}