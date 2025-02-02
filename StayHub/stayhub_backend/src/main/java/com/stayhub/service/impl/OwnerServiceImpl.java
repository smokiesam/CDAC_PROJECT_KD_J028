package com.stayhub.service.impl;

import com.stayhub.dto.OwnerDto;
import com.stayhub.entity.Owner;
import com.stayhub.enums.Role;
import com.stayhub.repository.OwnerRepository;
import com.stayhub.service.OwnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OwnerServiceImpl implements OwnerService {

    private final OwnerRepository ownerRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public String registerOwner(OwnerDto ownerDto) {
        Owner owner = new Owner();
        owner.setFirstName(ownerDto.getFirstName());
        owner.setLastName(ownerDto.getLastName());
        owner.setEmail(ownerDto.getEmail());
        owner.setPassword(passwordEncoder.encode(ownerDto.getPassword()));
        owner.setRole(Role.OWNER);

        ownerRepository.save(owner);
        return "Owner registered successfully";
    }
    
    @Override
    public Owner getOwnerProfileByEmail(String email) {
        return ownerRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Owner not found"));
    }
}
