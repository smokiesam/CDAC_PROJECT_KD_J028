package com.stayhub.controller;

import com.stayhub.entity.Pg;
import com.stayhub.service.PgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pgs")  // This keeps general PG search separate
@CrossOrigin(origins = "http://localhost:3000")  // Adjust as needed
public class PgController {

    @Autowired
    private PgService pgService;

    @GetMapping("/search")
    public List<Pg> searchPgListings(
            @RequestParam(required = false) String location,
            @RequestParam(required = false) Integer minRent,
            @RequestParam(required = false) Integer maxRent) {
        return pgService.searchPgListings(location, minRent, maxRent);
    }
}
