package com.stayhub.service.impl;

import com.stayhub.dto.ProfileResponseDto;
import com.stayhub.dto.UserDto;
import com.stayhub.entity.User;
import com.stayhub.enums.Role;
import com.stayhub.repository.UserRepository;
import com.stayhub.service.UserService;
import org.modelmapper.ModelMapper; // Import ModelMapper
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper; // Inject ModelMapper

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.modelMapper = modelMapper; 
    }

    @Override
    public User registerUser(UserDto userDto) { 
        // Check if user already exists (unchanged)
        if (userRepository.findByEmail(userDto.getEmail()).isPresent()) {
            throw new RuntimeException("User already exists with email: " + userDto.getEmail());
        }

        // Confirm passwords match (unchanged)
        if (!userDto.getPassword().equals(userDto.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match");
        }

        // Create User entity (do NOT map confirmPassword)
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());

        // Encode the password
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        // Handle role (unchanged)
        if (userDto.getRole() != null) {
            try {
                user.setRole(Role.valueOf(userDto.getRole().toUpperCase()));
            } catch (IllegalArgumentException e) {
                throw new RuntimeException("Invalid role: " + userDto.getRole());
            }
        } else {
            user.setRole(Role.USER); // Default role if none provided
        }

        return userRepository.save(user);
    }
    
//    @Override
//    public UserDto getUserProfile(String email) {
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        UserDto userDto = new UserDto();
//        userDto.setFirstName(user.getFirstName());
//        userDto.setLastName(user.getLastName());
//        userDto.setEmail(user.getEmail());
//        return userDto;
//    }
    
    @Override
    public ProfileResponseDto getUserProfile(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        ProfileResponseDto profileResponseDto = new ProfileResponseDto();
        profileResponseDto.setFirstName(user.getFirstName());
        profileResponseDto.setLastName(user.getLastName());
        profileResponseDto.setEmail(user.getEmail());
        return profileResponseDto;
    }


}