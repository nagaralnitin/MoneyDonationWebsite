package com.example.zerohunger.controller;

import com.example.zerohunger.entity.ContactMessage;
import com.example.zerohunger.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    private final ContactMessageRepository contactMessageRepository;

    @Autowired
    public ContactController(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> handleContact(@RequestBody Map<String, String> contactData) {
        String name = contactData.get("name");
        String email = contactData.get("email");
        String phone = contactData.get("phone");
        String message = contactData.get("message");

        ContactMessage contactMessage = new ContactMessage(name, email, phone, message);
        contactMessageRepository.save(contactMessage);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Contact message received successfully!");
        return ResponseEntity.ok(response);
    }
}
