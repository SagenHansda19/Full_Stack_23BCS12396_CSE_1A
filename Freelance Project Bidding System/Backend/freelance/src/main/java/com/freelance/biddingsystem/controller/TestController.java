package com.freelance.biddingsystem.controller;

import com.freelance.biddingsystem.model.User;
import com.freelance.biddingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test") // The base URL for this controller
public class TestController {

    @Autowired
    private UserService userService;

    // This method will listen for POST requests to http://localhost:8080/api/test/addUser
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}