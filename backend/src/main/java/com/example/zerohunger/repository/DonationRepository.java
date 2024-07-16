package com.example.zerohunger.repository;

import com.example.zerohunger.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DonationRepository extends JpaRepository<Donation, Long> {
    @Query("SELECT SUM(d.amount) FROM Donation d")
    double sumTotalDonations();

    List<Donation> findByNgoId(Long ngoId);
}
