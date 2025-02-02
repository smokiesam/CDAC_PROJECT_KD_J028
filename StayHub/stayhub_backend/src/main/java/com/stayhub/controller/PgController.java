package com.stayhub.controller;

import com.stayhub.entity.Pg;
import com.stayhub.dto.PgDto;
import com.stayhub.service.PgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/owner")
@CrossOrigin
public class PgController {

    @Autowired
    private PgService pgService;

    @PostMapping("/add-pg")
    public Pg addPg(@RequestBody PgDto pgDto, @RequestParam String email) {
        return pgService.addPg(pgDto, email);
    }

    @GetMapping("/pgs")
    public List<Pg> getPgsByOwner(@RequestParam String email) {
        return pgService.getPgsByOwner(email);
    }

}
