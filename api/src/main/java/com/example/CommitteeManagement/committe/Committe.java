package com.example.CommitteeManagement.committe;

import jakarta.persistence.*;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import com.example.CommitteeManagement.constant.Constant;
import com.example.CommitteeManagement.user.User;



@Entity
public class Committe {

    @Override
    public String toString() {
        return "Committe [id=" + id + ", name=" + name + ", type=" + type + ", status=" + status + ", parent=" + parent
                + ", addedBy=" + addedBy + ", addDate=" + addDate + ", getId()=" + getId() + ", getName()=" + getName()
                + ", getType()=" + getType() + ", getStatus()=" + getStatus() + ", getParent()=" + getParent()
                + ", getAddedBy()=" + getAddedBy() + ", getAddDate()=" + getAddDate() + ", getClass()=" + getClass()
                + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @ManyToOne
    @JoinColumn(name = "type", nullable = false)
    private Constant type;

    @Column(name = "status", nullable = false)
    private Boolean status = true;

    @ManyToOne
    @JoinColumn(name = "parent")
    private Committe parent;

    @ManyToOne
    @JoinColumn(name = "add_by")
    private User addedBy;

     @CreationTimestamp
    @Column(name = "add_date",updatable = false)
    private Date addDate;

    public Committe() {
    }

    public Committe(Long id, String name, Constant type, Boolean status, Committe parent, User addedBy, Date addDate) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
        this.parent = parent;
        this.addedBy = addedBy;
        this.addDate = addDate;
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

    public Constant getType() {
        return type;
    }

    public void setType(Constant type) {
        this.type = type;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Committe getParent() {
        return parent;
    }

    public void setParent(Committe parent) {
        this.parent = parent;
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