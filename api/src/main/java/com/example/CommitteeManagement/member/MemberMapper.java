package com.example.CommitteeManagement.member;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.example.CommitteeManagement.constant.Constant;

@Service
public class MemberMapper {

    public Member toMember(EditDto data) {
        Member item = new Member();

        Constant gender = new Constant();
        gender.setId(data.genderId());
        Constant sociality = new Constant();
        sociality.setId(data.socialityId());

        Constant idType = new Constant();
        idType.setId(data.idTypeId());

        Constant contactPersonRelation = new Constant();
        contactPersonRelation.setId(data.contactPersonRelationId());

        Constant accommodationType = new Constant();
        accommodationType.setId(data.accommodationTypeId());

        
        Constant workType = new Constant();
        workType.setId(data.workTypeId());

        Constant qualification = new Constant();
        qualification.setId(data.qualificationId());

        item.setAccommodationType(accommodationType);
        item.setContactPersonRelation(contactPersonRelation);
        item.setSociality(sociality);
        item.setGender(gender);
        item.setWorkType(workType);
        item.setIdType(idType);
        item.setQualification(qualification);
        item.setWorkplace(data.workplace());
        item.setContactPersonMobile(data.contactPersonMobile());
        item.setBirthdate(data.birthDate());
        item.setBirthPlace(data.birthPlace());
        item.setContactPerson(data.contactPerson());
        item.setExperience(data.experience());
        item.setIdDate(data.idDate());
        item.setName(data.name());
        item.setMobile(data.mobile());
        item.setPhone(data.phone());
        item.setWorkplace(data.workplace());
        item.setIdLocation(data.idLocation());
        item.setIdNumber(data.idNumber());

        return item;
    }

    public ReadOtp toReadOtp(Member model) {

        return new ReadOtp(model.getId(), model.getName(), model.getGender(), model.getSociality(), model.getPhone(),
                model.getMobile(), model.getIdType(), model.getIdDate(), model.getBirthPlace(), model.getBirthdate(),
                model.getAccommodationType(), model.getWorkplace(), model.getWorkType(), model.getExperience(),
                model.getPhoto(), model.getContactPersonMobile());
    }

}