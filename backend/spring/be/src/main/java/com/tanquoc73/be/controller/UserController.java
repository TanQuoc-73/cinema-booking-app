package com.tanquoc73.be.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

    @GetMapping("/api/user/me")
    public Map<String, Object> currentUser(@AuthenticationPrincipal OAuth2User principal) {
        return principal.getAttributes(); // Trả về tất cả thông tin từ Google/Facebook
    }
}
