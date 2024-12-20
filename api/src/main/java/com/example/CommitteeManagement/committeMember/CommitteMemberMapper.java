package com.example.CommitteeManagement.committeMember;

import org.springframework.stereotype.Service;

import com.example.CommitteeManagement.committe.Committe;
import com.example.CommitteeManagement.member.Member;

@Service
public class CommitteMemberMapper {

    public CommitteMember toCommitteMember(EditDto data) {
        CommitteMember item = new CommitteMember();
        Member member = new Member();
        Committe committe = new Committe();
        member.setId(data.memberId());
        // item.s(data.code());
        committe.setId(data.committeId());

        item.setCommitte(committe);
        item.setMember(member);

        System.out.println(data.toString());
        System.out.println(item.toString());
        return item;
    }

    public ReadOtp toReadOtp(CommitteMember model) {

        return new ReadOtp(model.getId(), model.getCommitte(), model.getMember());
    }

}