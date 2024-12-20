package com.example.CommitteeManagement.constant;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import com.example.CommitteeManagement.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "re_constants")
public class Constant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_constants")
    private Long id;

    @Column(name = "name_constants", nullable = false, length = 100)
    private String name;

    @Column(name = "code_constants", nullable = false, length = 100)
    private String code;

    @Column(name = "status", nullable = false)
    private Boolean status = true;

    @ManyToOne
    @JoinColumn(name = "add_by")
    private User addedBy;

    @CreationTimestamp
    @Column(name = "add_date",updatable = false)
    private Date addDate;

    
    public Constant(Long id, String name, String code, Boolean status, User addedBy,
            Date addDate) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.status = status;
        this.addedBy = addedBy;
        this.addDate = addDate;
    }

    public Constant() {
    }

    @Override
    public String toString() {
        return "Constant [id=" + id + ", name=" + name + ", code=" + code + ", status=" + status + ", addedBy="
                + addedBy + ", addDate=" + addDate + ", getId()=" + getId() + ", getName()=" + getName()
                + ", getCode()=" + getCode() + ", getStatus()=" + getStatus() + ", getAddedBy()=" + getAddedBy()
                + ", getAddDate()=" + getAddDate() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
                + ", toString()=" + super.toString() + "]";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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
