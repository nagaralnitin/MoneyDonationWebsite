package com.example.zerohunger.service;

import com.example.zerohunger.entity.Donation;
import com.example.zerohunger.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonationService {

    private final DonationRepository donationRepository;

    @Autowired
    public DonationService(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    public Donation saveDonation(Donation donation) {
        return donationRepository.save(donation);
    }

    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    public double getTotalDonations() {
        return donationRepository.sumTotalDonations();
    }

    public List<Donation> getDonationsByNGOId(Long ngoId) {
        return donationRepository.findByNgoId(ngoId);
    }
}
