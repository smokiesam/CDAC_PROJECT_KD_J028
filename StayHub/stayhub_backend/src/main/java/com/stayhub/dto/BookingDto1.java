package com.stayhub.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.stayhub.enums.BookingStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class BookingDto1 {
	private Long id;
    private String pgName;
    private LocalDateTime bookingDate; // Maps from createdOn
    private BookingStatus status;
}
