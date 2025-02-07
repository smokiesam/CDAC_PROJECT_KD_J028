package com.stayhub.dto;

import com.stayhub.enums.BookingStatus;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BookingDto {
    private Long id;
    private String pgName;
    private String userEmail;
    private BookingStatus status;
}