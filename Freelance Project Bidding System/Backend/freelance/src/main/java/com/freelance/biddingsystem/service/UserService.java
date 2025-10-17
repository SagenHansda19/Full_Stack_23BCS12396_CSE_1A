package com.freelance.biddingsystem.service;

import com.freelance.biddingsystem.model.User;
import com.freelance.biddingsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        // In a real app, you would hash the password here before saving
        // For this test, we'll save it directly.
        return userRepository.save(user);
    }
}