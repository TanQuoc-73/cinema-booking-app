package com.tanquoc73.be.controller;

import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.security.oauth2.core.user.OAuth2User;


@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "Ket noi thanh cong!"; 
    }
    @GetMapping("/home")
    public String home(Model model, OAuth2AuthenticationToken authentication){
        OAuth2User user = authentication.getPrincipal();
        model.addAttribute("name", user.getAttribute("name"));
        model.addAttribute("email", user.getAttribute("email"));
        return "home";
    }
}
