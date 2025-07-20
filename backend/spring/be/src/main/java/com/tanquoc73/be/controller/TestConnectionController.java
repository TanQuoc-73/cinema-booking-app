package com.tanquoc73.be.controller;

import com.tanquoc73.be.model.User;
import com.tanquoc73.be.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TestConnectionController {

    private final UserRepository userRepository;

    public TestConnectionController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/test")
    public String testConnection() {
        return "Api hoat dong";
    }
}
