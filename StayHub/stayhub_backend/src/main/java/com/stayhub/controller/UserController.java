package com.stayhub.controller;

import com.stayhub.dto.ProfileResponseDto;
import com.stayhub.dto.UserDto;
import org.springframework.http.HttpStatus; // Import HttpStatus
import org.springframework.http.ResponseEntity; // Import ResponseEntity
import com.stayhub.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserDto userDto) {
        userService.registerUser(userDto);
        return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED); // Use ResponseEntity
    }
    
    @GetMapping("/profile")
    public ResponseEntity<ProfileResponseDto> getUserProfile(@RequestParam("email") String email) {
        ProfileResponseDto profileResponseDto = userService.getUserProfile(email);
        return ResponseEntity.ok(profileResponseDto);
    }

}