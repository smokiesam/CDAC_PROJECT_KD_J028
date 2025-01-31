package com.stayhub.service.impl;

import com.stayhub.dto.LoginRequestDto;
import com.stayhub.dto.LoginResponseDto;
import com.stayhub.entity.Owner;
import com.stayhub.entity.User;
import com.stayhub.exception.InvalidCredentialsException;
import com.stayhub.repository.OwnerRepository;
import com.stayhub.repository.UserRepository;
import com.stayhub.service.AuthService;
import com.stayhub.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private OwnerRepository ownerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        User user = userRepository.findByEmail(loginRequestDto.getEmail())
                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password"));

        if (!passwordEncoder.matches(loginRequestDto.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());

        return new LoginResponseDto(token, user.getRole().name());
    }

    @Override
    public LoginResponseDto loginOwner(LoginRequestDto loginRequestDto) {
        Owner owner = ownerRepository.findByEmail(loginRequestDto.getEmail())
                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password"));

        if (!passwordEncoder.matches(loginRequestDto.getPassword(), owner.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        String token = jwtUtil.generateToken(owner.getEmail(), owner.getRole().name()); // Assuming Owner has a role

        return new LoginResponseDto(token, owner.getRole().name());
    }
}
