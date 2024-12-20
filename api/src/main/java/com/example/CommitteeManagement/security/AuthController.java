package com.example.CommitteeManagement.security;

import com.example.CommitteeManagement.security.JwtUtil;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginOtp authRequest) {

        Map<String, Object> response = new HashMap<>();
        response.put("token", authService.login(authRequest));

        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterOtp registerRequest) {
        // Check if the username already exists
        return authService.register(registerRequest);
    }
}
