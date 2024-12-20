package com.example.CommitteeManagement.member;

import java.util.Date;

import com.example.CommitteeManagement.constant.Constant;

public record ReadOtp(
      Long id,
           String name,
        Constant gender,
        Constant sociality,
        Long phone,
        Long mobile,
        Constant idType,
        Date idDate,
        String birthPlace,
        Date birthDate,
        Constant accommodationType,
        String workplace,
        Constant workType,
        String experience,
        String photo,
        Long contactPersonMobile) {

}