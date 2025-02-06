package com.stayhub.controller;

import com.stayhub.entity.Booking;
import com.stayhub.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/create")
    public Booking createBooking(@RequestBody Map<String, Object> request) {
        String userEmail = (String) request.get("userEmail"); 
        Long pgId = ((Number) request.get("pgId")).longValue();
        Booking booking = new Booking();
        booking.setCheckInDate(java.time.LocalDate.parse((String) request.get("checkInDate")));
        booking.setCheckOutDate(java.time.LocalDate.parse((String) request.get("checkOutDate")));
        booking.setAmountPaid(Double.parseDouble(request.get("amountPaid").toString()));
        booking.setStatus(com.stayhub.enums.BookingStatus.PENDING);
        
        return bookingService.createBooking(booking, userEmail, pgId);
    }

    @GetMapping("/user/{email}")
    public List<Booking> getUserBookings(@PathVariable String email) {
        return bookingService.getUserBookings(email);
    }

    @GetMapping("/pg/{pgId}")
    public List<Booking> getPGBookings(@PathVariable Long pgId) {
        return bookingService.getPGBookings(pgId);
    }
}
