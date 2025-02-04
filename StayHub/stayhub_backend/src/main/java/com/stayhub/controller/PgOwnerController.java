package com.stayhub.controller;

import com.stayhub.entity.Pg;
import com.stayhub.dto.PgDto;
import com.stayhub.service.PgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/owner")
@CrossOrigin
public class PgOwnerController {

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
    
    @DeleteMapping("/delete-pg")
    public String deletePg(@RequestParam Long pgId, @RequestParam String email) {
        boolean deleted = pgService.deletePgByOwner(pgId, email);
        if (deleted) {
            return "PG deleted successfully!";
        } else {
            return "PG not found or unauthorized delete request.";
        }
    }

    @PutMapping("/update-pg/{pgId}")
    public ResponseEntity<?> updatePg(@RequestParam String email, @PathVariable Long pgId, @RequestBody Pg updatedPg) {
        updatedPg.setId(pgId);
        return ResponseEntity.ok(pgService.updatePg(email, updatedPg));
    }




}
