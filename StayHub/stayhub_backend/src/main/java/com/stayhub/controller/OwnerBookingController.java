package com.stayhub.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stayhub.dto.BookingDto;
import com.stayhub.entity.Booking;
import com.stayhub.service.BookingService;

@RestController
@RequestMapping("/api/owner/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class OwnerBookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/pending")
    public ResponseEntity<List<BookingDto>> getPendingBookings(@RequestParam String email) {
        List<Booking> bookings = bookingService.getPendingBookingsForOwner(email);
        List<BookingDto> bookingDTOs = bookings.stream().map(booking -> {
            BookingDto dto = new BookingDto();
            dto.setId(booking.getId());
            dto.setPgName(booking.getPg().getName());
            dto.setUserEmail(booking.getUser().getEmail());
            dto.setStatus(booking.getStatus());
            return dto;
        }).collect(Collectors.toList());
        return ResponseEntity.ok(bookingDTOs);
    }

    @PutMapping("/approve/{bookingId}")
    public ResponseEntity<Booking> approveBooking(@PathVariable Long bookingId) {
        bookingService.approveBooking(bookingId);
        Booking updatedBooking = bookingService.getBookingById(bookingId); // Add this method in BookingService
        return ResponseEntity.ok(updatedBooking);
    }

}

