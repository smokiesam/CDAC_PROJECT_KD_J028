package com.stayhub.service;

import com.stayhub.entity.Booking;
import java.util.List;

public interface BookingService {
    Booking createBooking(Booking booking, String userEmail, Long pgId);
    List<Booking> getUserBookings(String userEmail);
    List<Booking> getPGBookings(Long pgId);
}
