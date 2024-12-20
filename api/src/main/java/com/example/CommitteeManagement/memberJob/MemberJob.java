package com.example.CommitteeManagement.memberJob;

import jakarta.persistence.*;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import com.example.CommitteeManagement.user.User;

@Entity
@Table(name = "cc_member_job")
public class MemberJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private Long id;

    @Column(name = "job_title", nullable = false, length = 100)
    private String title;

    @Column(name = "status", nullable = false)
    private Boolean status = true;

    @ManyToOne
    @JoinColumn(name = "add_by")
    private User addedBy;

    @CreationTimestamp
    @Column(name = "add_date", updatable = false)
    private Date addDate;

    public MemberJob(Long id, String title, Boolean status, User addedBy, Date addDate) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.addedBy = addedBy;
        this.addDate = addDate;
    }

    @Override
    public String toString() {
        return "MemberJob [id=" + id + ", title=" + title + ", status=" + status + ", addedBy=" + addedBy + ", addDate="
                + addDate + ", getId()=" + getId() + ", getTitle()=" + getTitle() + ", getStatus()=" + getStatus()
                + ", getAddedBy()=" + getAddedBy() + ", getAddDate()=" + getAddDate() + ", getClass()=" + getClass()
                + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
    }

    public MemberJob() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public User getAddedBy() {
        return addedBy;
    }

    public void setAddedBy(User addedBy) {
        this.addedBy = addedBy;
    }

    public Date getAddDate() {
        return addDate;
    }

    public void setAddDate(Date addDate) {
        this.addDate = addDate;
    }

    // Getters and Setters
}
