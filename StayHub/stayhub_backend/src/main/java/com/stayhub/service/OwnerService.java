package com.stayhub.service;

import com.stayhub.dto.OwnerDto;
import com.stayhub.entity.Owner;

public interface OwnerService {
    String registerOwner(OwnerDto ownerDto);
    Owner getOwnerProfileByEmail(String email); 
}

