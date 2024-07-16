package com.example.zerohunger.controller;

import com.example.zerohunger.entity.Donation;
import com.example.zerohunger.entity.NGO;
import com.example.zerohunger.service.DonationService;
import com.example.zerohunger.service.NGOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ngos")
public class NGOController {

    private final NGOService ngoService;
    private final DonationService donationService;

    @Autowired
    public NGOController(NGOService ngoService, DonationService donationService) {
        this.ngoService = ngoService;
        this.donationService = donationService;
    }

    @PostMapping
    public ResponseEntity<NGO> createNGO(@RequestBody NGO ngo) {
        NGO savedNGO = ngoService.saveNGO(ngo);
        return ResponseEntity.ok(savedNGO);
    }

    @GetMapping
    public ResponseEntity<List<NGO>> getAllNGOs() {
        List<NGO> ngos = ngoService.getAllNGOs();
        return ResponseEntity.ok(ngos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<NGO> getNGOById(@PathVariable Long id) {
        NGO ngo = ngoService.getNGOById(id);
        return ResponseEntity.ok(ngo);
    }

    @GetMapping("/{id}/donations")
    public ResponseEntity<List<Donation>> getDonationsByNGOId(@PathVariable Long id) {
        List<Donation> donations = donationService.getDonationsByNGOId(id);
        return ResponseEntity.ok(donations);
    }

    @PutMapping("/{id}")
    public ResponseEntity<NGO> updateNGO(@PathVariable Long id, @RequestBody NGO ngoDetails) {
        NGO updatedNGO = ngoService.updateNGO(id, ngoDetails);
        return ResponseEntity.ok(updatedNGO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNGO(@PathVariable Long id) {
        ngoService.deleteNGO(id);
        return ResponseEntity.noContent().build();
    }
}
