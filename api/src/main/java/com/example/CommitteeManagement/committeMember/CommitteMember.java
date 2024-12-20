package com.example.CommitteeManagement.committeMember;

import jakarta.persistence.*;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import com.example.CommitteeManagement.committe.Committe;
import com.example.CommitteeManagement.member.Member;
import com.example.CommitteeManagement.user.User;

@Entity
public class CommitteMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Override
    public String toString() {
        return "CommitteMember [id=" + id + ", status=" + status + ", addDate=" + addDate + ", member=" + member
                + ", addedBy=" + addedBy + ", committe=" + committe + ", getId()=" + getId() + ", getStatus()="
                + getStatus() + ", getAddDate()=" + getAddDate() + ", getMember()=" + getMember() + ", getAddedBy()="
                + getAddedBy() + ", getCommitte()=" + getCommitte() + ", getClass()=" + getClass() + ", hashCode()="
                + hashCode() + ", toString()=" + super.toString() + "]";
    }

    @Column(name = "status", nullable = false)
    private Boolean status = true;

    @CreationTimestamp
    @Column(name = "add_date", updatable = false)
    private Date addDate;

    @ManyToOne
    @JoinColumn(name = "member")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "add_by")
    private User addedBy;

    @ManyToOne
    @JoinColumn(name = "committe")
    private Committe committe;

    public CommitteMember(Long id, Boolean status, Date addDate, Member member, User addedBy, Committe committe) {
        this.id = id;
        this.status = status;
        this.addDate = addDate;
        this.member = member;
        this.addedBy = addedBy;
        this.committe = committe;
    }

    public CommitteMember() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Date getAddDate() {
        return addDate;
    }

    public void setAddDate(Date addDate) {
        this.addDate = addDate;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public User getAddedBy() {
        return addedBy;
    }

    public void setAddedBy(User addedBy) {
        this.addedBy = addedBy;
    }

    public Committe getCommitte() {
        return committe;
    }

    public void setCommitte(Committe committe) {
        this.committe = committe;
    }

    // Getters and Setters
}
