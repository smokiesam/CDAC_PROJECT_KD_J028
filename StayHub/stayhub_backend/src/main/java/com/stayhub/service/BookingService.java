package com.stayhub.service;

import com.stayhub.entity.Booking;
import com.stayhub.enums.BookingStatus;

import java.time.LocalDateTime;
import java.util.List;

public interface BookingService {
    Booking createBooking(Booking booking, String userEmail, Long pgId);
    List<Booking> getUserBookings(String userEmail);
    List<Booking> getPGBookings(Long pgId);
    public List<Booking> findPendingBookingsByOwnerEmail(String email);
    List<Booking> getPendingBookingsForOwner(String ownerEmail);
    void approveBooking(Long bookingId);
    public Booking getBookingById(Long bookingId);
    void updateBookingStatus(Long bookingId, BookingStatus status);
    List<Booking> getAllBookingsByUserEmail(String email);
    LocalDateTime getBookingDate(Long bookingId);
}
