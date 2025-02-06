package com.stayhub.service.impl;

import com.stayhub.entity.Booking;
import com.stayhub.entity.User;
import com.stayhub.entity.Pg;
import com.stayhub.repository.BookingRepository;
import com.stayhub.repository.UserRepository;
import com.stayhub.repository.PgRepository;
import com.stayhub.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PgRepository pgRepository;

    @Override
    public Booking createBooking(Booking booking, String userEmail, Long pgId) {
        // Fetch user by email
        Optional<User> userOptional = userRepository.findByEmail(userEmail);
        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found with email: " + userEmail);
        }

        // Fetch PG by ID
        Optional<Pg> pgOptional = pgRepository.findById(pgId);
        if (pgOptional.isEmpty()) {
            throw new RuntimeException("PG not found with ID: " + pgId);
        }

        // Set user and PG in booking object
        booking.setUser(userOptional.get());
        booking.setPg(pgOptional.get());

        // Save booking
        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getUserBookings(String userEmail) {
        Optional<User> userOptional = userRepository.findByEmail(userEmail);
        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        return bookingRepository.findByUserId(userOptional.get().getId());
    }

    @Override
    public List<Booking> getPGBookings(Long pgId) {
        return bookingRepository.findByPgId(pgId);
    }
}
