package com.stayhub.service.impl;

import com.stayhub.entity.Booking;
import com.stayhub.entity.User;
import com.stayhub.enums.BookingStatus;
import com.stayhub.exception.ResourceNotFoundException;
import com.stayhub.entity.Pg;
import com.stayhub.repository.BookingRepository;
import com.stayhub.repository.UserRepository;
import com.stayhub.repository.PgRepository;
import com.stayhub.service.BookingService;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
    public LocalDateTime getBookingDate(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        return booking.getCreatedOn();
    }

    @Override
    public List<Booking> getPGBookings(Long pgId) {
        return bookingRepository.findByPgId(pgId);
    }
    
    @Override
    public List<Booking> getPendingBookingsForOwner(String ownerEmail) {
        List<Booking> bookings = bookingRepository.findPendingBookingsByOwnerEmail(ownerEmail);
        if (bookings.isEmpty()) {
            throw new ResourceNotFoundException("No pending bookings found for owner with email: " + ownerEmail);
        }
        return bookings;
    }

    
    public List<Booking> findPendingBookingsByOwnerEmail(String email) {
        return bookingRepository.findPendingBookingsByOwnerEmail(email);
    }
    
    @Override
    public void approveBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found"));

        if (booking.getStatus().equals(BookingStatus.APPROVED)) {
            throw new IllegalStateException("Booking is already approved");
        }

        booking.setStatus(BookingStatus.APPROVED);
        bookingRepository.save(booking);
    }
    
    @Override
    public Booking getBookingById(Long bookingId) {
        return bookingRepository.findById(bookingId)
            .orElseThrow(() -> new ResourceNotFoundException("Booking not found with ID: " + bookingId));
    }

    @Override
    @Transactional
    public void updateBookingStatus(Long bookingId, BookingStatus status) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found with id: " + bookingId));

        booking.setStatus(status);
        bookingRepository.save(booking);
    }
    
    @Override
    public List<Booking> getAllBookingsByUserEmail(String email) {
        return bookingRepository.findByUserEmail(email);
    }
    
}
