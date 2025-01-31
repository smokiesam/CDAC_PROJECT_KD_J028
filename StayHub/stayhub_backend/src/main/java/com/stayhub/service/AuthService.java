package com.stayhub.service;

import org.springframework.stereotype.Service;

import com.stayhub.dto.LoginRequestDto;
import com.stayhub.dto.LoginResponseDto;

@Service
public interface AuthService {
    LoginResponseDto login(LoginRequestDto loginRequest);
    LoginResponseDto loginOwner(LoginRequestDto loginRequest);
}

