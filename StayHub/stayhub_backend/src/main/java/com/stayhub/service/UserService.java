package com.stayhub.service;

import com.stayhub.dto.UserDto;
import com.stayhub.entity.User;

public interface UserService {
    User registerUser(UserDto userDto);
}

