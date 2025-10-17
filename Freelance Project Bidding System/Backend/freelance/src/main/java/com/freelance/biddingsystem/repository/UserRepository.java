package com.freelance.biddingsystem.repository;

import com.freelance.biddingsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Spring Data JPA automatically creates a query for this method
    // It will search for a user by their email address
    Optional<User> findByEmail(String email);
}