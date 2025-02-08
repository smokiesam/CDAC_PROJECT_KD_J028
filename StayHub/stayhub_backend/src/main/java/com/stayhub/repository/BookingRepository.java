package com.stayhub.repository;

import com.stayhub.entity.Booking;
import com.stayhub.enums.BookingStatus;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserId(Long userId);
    List<Booking> findByPgId(Long pgId);
    @Query("SELECT b FROM Booking b JOIN b.pg p JOIN p.owner o WHERE o.email = :email AND b.status = 'PENDING'")
    List<Booking> findPendingBookingsByOwnerEmail(@Param("email") String email);
    List<Booking> findByOwnerIdAndStatus(Long ownerId, BookingStatus status);
    List<Booking> findByUserEmail(String email);
}
