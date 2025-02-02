package com.stayhub.controller;

import com.stayhub.dto.OwnerDto;
import com.stayhub.entity.Owner;
import com.stayhub.service.OwnerService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/owners")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OwnerController {

    private final OwnerService ownerService;

    @PostMapping("/register")
    public ResponseEntity<String> registerOwner(@Valid @RequestBody OwnerDto ownerDto) {
        return ResponseEntity.ok(ownerService.registerOwner(ownerDto));
    }
    
    @GetMapping("/profile")
    public Owner getOwnerProfile(@RequestParam("email") String email) {
        return ownerService.getOwnerProfileByEmail(email);
    }

}
