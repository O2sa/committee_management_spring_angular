package com.example.CommitteeManagement.memberJob;

import org.springframework.stereotype.Service;

@Service
public class MemberJobMapper {

    public MemberJob toMemberJob(EditDto data) {
        MemberJob item = new MemberJob();
        item.setTitle(data.title());

        return item;
    }

    public ReadOtp toReadOtp(MemberJob model) {
  
        return new ReadOtp(model.getId(), model.getTitle());
    }

}