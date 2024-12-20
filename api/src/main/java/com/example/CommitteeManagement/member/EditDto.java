package com.example.CommitteeManagement.member;

import java.util.Date;


public record EditDto(
        String name,
        Long genderId,
        Long socialityId,
        Long phone,
        Long mobile,
        Long idTypeId,
        Long idNumber,
        Date idDate,
        String idLocation,
        String birthPlace,
        Date birthDate,
        Long accommodationTypeId,
        Long qualificationId,
        String workplace,
        Long workTypeId,
        String experience,
        String photo,
        Long contactPersonMobile,
        Long contactPersonRelationId,
        String contactPerson
        ) {
}