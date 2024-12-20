package com.example.CommitteeManagement.user;

import java.util.Date;

public record ReadOtp(
      Long id,
      String fullName, String username, Date addDate) {

}