package com.stayhub.service.impl;

import com.stayhub.entity.Pg;
import com.stayhub.exception.ResourceNotFoundException;
import com.stayhub.entity.Owner;
import com.stayhub.dto.PgDto;
import com.stayhub.repository.PgRepository;
import com.stayhub.repository.OwnerRepository;
import com.stayhub.service.PgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PgServiceImpl implements PgService {

    @Autowired
    private PgRepository pgRepository;

    @Autowired
    private OwnerRepository ownerRepository;

    @Override
    public Pg addPg(PgDto pgDto, String ownerEmail) { 
        Owner owner = ownerRepository.findByEmail(ownerEmail)
                .orElseThrow(() -> new RuntimeException("Owner not found"));

        Pg pg = new Pg();
        pg.setName(pgDto.getName());
        pg.setLocation(pgDto.getLocation());
        pg.setRent(pgDto.getRent());
        pg.setOwner(owner);

        return pgRepository.save(pg);
    }


    @Override
    public List<Pg> getPgsByOwner(String ownerEmail) {
        Owner owner = ownerRepository.findByEmail(ownerEmail)
                .orElseThrow(() -> new RuntimeException("Owner not found"));
        
        return pgRepository.findByOwner(owner);
    }
    
    @Override
    public List<Pg> searchPgListings(String location, Integer minRent, Integer maxRent) {
        return pgRepository.searchPgListings(location, minRent, maxRent);
    }

    @Override
    public boolean deletePgByOwner(Long pgId, String ownerEmail) {
        Optional<Pg> pgOptional = pgRepository.findById(pgId);

        if (pgOptional.isPresent()) {
            Pg pg = pgOptional.get();

            if (pg.getOwner().getEmail().equals(ownerEmail)) {
                pgRepository.delete(pg); 
                return true;
            }
        }
        return false;
    }
    
    @Override
    public Pg updatePg(String email, Pg updatedPg) {
        // Find the PG by its ID
        Pg existingPg = pgRepository.findById(updatedPg.getId())
                .orElseThrow(() -> new ResourceNotFoundException("PG not found"));

        // Ensure that the email matches the owner's email
        if (!existingPg.getOwner().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized: You can only update your own PGs");
        }

        // Update PG details
        existingPg.setName(updatedPg.getName()); // Now you can update the name
        existingPg.setLocation(updatedPg.getLocation());
        existingPg.setRent(updatedPg.getRent());

        // Save the updated PG
        return pgRepository.save(existingPg);
    }



}
