package com.example.CommitteeManagement.committeMember;

import java.util.Date;

import com.example.CommitteeManagement.committe.Committe;
import com.example.CommitteeManagement.member.Member;

public record ReadOtp(
      Long id,
      Committe committe, Member member) {

}