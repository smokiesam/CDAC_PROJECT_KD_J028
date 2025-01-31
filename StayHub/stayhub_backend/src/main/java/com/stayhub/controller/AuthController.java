package com.stayhub.controller;

import com.stayhub.dto.AuthResponse;
import com.stayhub.dto.LoginRequestDto;
import com.stayhub.dto.LoginResponseDto;
import com.stayhub.service.AuthService;
import com.stayhub.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;

    public AuthController(AuthService authService, JwtUtil jwtUtil) {
        this.authService = authService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login/user")
    public ResponseEntity<AuthResponse> loginUser(@RequestBody LoginRequestDto request) {
        LoginResponseDto response = authService.login(request);
        return ResponseEntity.ok(new AuthResponse(response.getToken(), response.getRole()));
    }

    @PostMapping("/login/owner")
    public ResponseEntity<AuthResponse> loginOwner(@RequestBody LoginRequestDto request) {
        LoginResponseDto response = authService.loginOwner(request);
        return ResponseEntity.ok(new AuthResponse(response.getToken(), response.getRole()));
    }

    @GetMapping("/verify")
    public ResponseEntity<String> verifyToken(HttpServletRequest request) {
        String token = jwtUtil.resolveToken(request);
        if (token != null) {
            String username = jwtUtil.extractUsername(token);
            String role = jwtUtil.extractRole(token);

            if (jwtUtil.validateToken(token, username, role)) {
                return ResponseEntity.ok("Token is valid");
            }
        }
        return ResponseEntity.status(401).body("Token invalid or expired");
    }


    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        String token = jwtUtil.resolveToken(request);
        if (token != null) {
            jwtUtil.invalidateToken(token);
        }
        return ResponseEntity.ok("Logout successful");
    }
}

