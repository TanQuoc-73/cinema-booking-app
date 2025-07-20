package com.tanquoc73.be.controller;

import com.tanquoc73.be.model.User;
import com.tanquoc73.be.repository.UserRepository;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/me")
    public Map<String, Object> getCurrentUser(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            return Map.of("error", "Unauthorized");
        }
        return Map.of(
                "email", principal.getAttribute("email"),
                "name", principal.getAttribute("name"),
                "provider", principal.getAttribute("iss") != null ? "google" : "facebook"
        );
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }
        user.setProvider("local");
        userRepository.save(user);
        return "User registered";
    }
}
