package com.stayhub.service.impl;

import com.stayhub.entity.Pg;
import com.stayhub.entity.Owner;
import com.stayhub.dto.PgDto;
import com.stayhub.repository.PgRepository;
import com.stayhub.repository.OwnerRepository;
import com.stayhub.service.PgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PgServiceImpl implements PgService {

    @Autowired
    private PgRepository pgRepository;

    @Autowired
    private OwnerRepository ownerRepository;

    @Override
    public Pg addPg(PgDto pgDto, String ownerEmail) { // Match the interface method
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


}
