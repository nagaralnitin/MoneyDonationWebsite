package com.example.zerohunger.service;

import com.example.zerohunger.entity.NGO;
import com.example.zerohunger.repository.NGORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NGOService {

    private final NGORepository ngoRepository;

    @Autowired
    public NGOService(NGORepository ngoRepository) {
        this.ngoRepository = ngoRepository;
    }

    public NGO saveNGO(NGO ngo) {
        return ngoRepository.save(ngo);
    }

    public List<NGO> getAllNGOs() {
        return ngoRepository.findAll();
    }

    public NGO getNGOById(Long id) {
        return ngoRepository.findById(id).orElseThrow(() -> new RuntimeException("NGO not found"));
    }

    public NGO updateNGO(Long id, NGO ngoDetails) {
        NGO ngo = ngoRepository.findById(id).orElseThrow(() -> new RuntimeException("NGO not found"));

        ngo.setName(ngoDetails.getName());
        ngo.setAddress(ngoDetails.getAddress());
        ngo.setPhone(ngoDetails.getPhone());
        ngo.setEmail(ngoDetails.getEmail());
        ngo.setMission(ngoDetails.getMission());

        return ngoRepository.save(ngo);
    }

    public void deleteNGO(Long id) {
        ngoRepository.deleteById(id);
    }
}
