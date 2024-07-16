package com.example.zerohunger.controller;

import com.example.zerohunger.entity.Donation;
import com.example.zerohunger.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/donations")
public class DonationController {
    private final DonationService donationService;

    @Autowired
    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> handleDonation(@RequestBody Map<String, String> donationData) {
        String name = donationData.get("name");
        String email = donationData.get("email");
        String phone = donationData.get("phone");
        String address = donationData.get("address");
        String amountString = donationData.get("amount");
        String message = donationData.get("message");
        String ngoIdString = donationData.get("ngoId");
        String ageString = donationData.get("age"); // Added age field

        double amount = Double.parseDouble(amountString);
        Long ngoId = Long.parseLong(ngoIdString);
        int age = Integer.parseInt(ageString); // Parsing age

        Donation donation = new Donation(name, email, phone, address, amount, message, ngoId, age); // Passing age to the constructor
        Donation savedDonation = donationService.saveDonation(donation);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Donation received successfully!");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/total")
    public ResponseEntity<Map<String, Double>> getTotalDonations() {
        double totalAmount = donationService.getTotalDonations();
        Map<String, Double> response = new HashMap<>();
        response.put("totalAmount", totalAmount);
        return ResponseEntity.ok(response);
    }
}
