package com.stayhub.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

import com.stayhub.enums.BookingStatus;

@Getter
@Setter
@Entity
@Table(name = "bookings")
public class Booking extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;  // Booking is associated with a User

    @ManyToOne
    @JoinColumn(name = "pg_id", nullable = false)
    private Pg pg;  // Booking is associated with a PG

    @Column(nullable = false)
    private LocalDate checkInDate;

    @Column(nullable = false)
    private LocalDate checkOutDate;

    @Column(nullable = false)
    private double amountPaid;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;  // PENDING, CONFIRMED, REJECTED
    
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Owner owner;
}
