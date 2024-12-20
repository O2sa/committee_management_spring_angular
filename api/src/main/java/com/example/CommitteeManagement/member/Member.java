package com.example.CommitteeManagement.member;

import jakarta.persistence.*;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import com.example.CommitteeManagement.constant.Constant;
import com.example.CommitteeManagement.user.User;

@Entity
@Table(name = "cc_members_data")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(name = "member_name", nullable = false, length = 80)
    private String name;

    @ManyToOne
    @JoinColumn(name = "gender", nullable = false)
    private Constant gender;

    @ManyToOne
    @JoinColumn(name = "sociality", nullable = false)
    private Constant sociality;

    @Column(name = "phone")
    private Long phone;

    @Column(name = "mobile", nullable = false)
    private Long mobile;

    @ManyToOne
    @JoinColumn(name = "id_type", nullable = false)
    private Constant idType;

    @Column(name = "id_number", nullable = false)
    private Long idNumber;

    @Column(name = "id_date", nullable = false)
    private Date idDate;

    @Column(name = "id_location", nullable = false, length = 30)
    private String idLocation;

    @Column(name = "birth_place", nullable = false, length = 30)
    private String birthPlace;

    @Column(name = "birthdate", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date birthdate;

    @ManyToOne
    @JoinColumn(name = "accomm_type")
    private Constant accommodationType;

    @ManyToOne
    @JoinColumn(name = "qualification", nullable = false)
    private Constant qualification;

    @Column(name = "workplace", length = 30)
    private String workplace;

    @ManyToOne
    @JoinColumn(name = "work_type")
    private Constant workType;

    @Column(name = "experience", length = 200)
    private String experience;

    @Column(name = "photo", length = 100)
    private String photo;

    @Column(name = "person", nullable = false, length = 30)
    private String contactPerson;

    @ManyToOne
    @JoinColumn(name = "person_relation")
    private Constant contactPersonRelation;

    @Column(name = "person_mobile", nullable = false)
    private Long contactPersonMobile;

    @ManyToOne
    @JoinColumn(name = "add_by")
    private User addedBy;

    @CreationTimestamp
    @Column(name = "add_date", updatable = false)
    private Date addDate;

    public Member() {
    }

    public Member(Long id, String name, Constant gender, Constant sociality, Long phone, Long mobile, Constant idType,
            Long idNumber, Date idDate, String idLocation, String birthPlace, Date birthdate,
            Constant accommodationType, Constant qualification, String workplace, Constant workType, String experience,
            String photo, String contactPerson, Constant contactPersonRelation, Long contactPersonMobile, User addedBy,
            Date addDate) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.sociality = sociality;
        this.phone = phone;
        this.mobile = mobile;
        this.idType = idType;
        this.idNumber = idNumber;
        this.idDate = idDate;
        this.idLocation = idLocation;
        this.birthPlace = birthPlace;
        this.birthdate = birthdate;
        this.accommodationType = accommodationType;
        this.qualification = qualification;
        this.workplace = workplace;
        this.workType = workType;
        this.experience = experience;
        this.photo = photo;
        this.contactPerson = contactPerson;
        this.contactPersonRelation = contactPersonRelation;
        this.contactPersonMobile = contactPersonMobile;
        this.addedBy = addedBy;
        this.addDate = addDate;
    }

    @Override
    public String toString() {
        return "Member [id=" + id + ", name=" + name + ", gender=" + gender + ", sociality=" + sociality + ", phone="
                + phone + ", mobile=" + mobile + ", idType=" + idType + ", idNumber=" + idNumber + ", idDate=" + idDate
                + ", idLocation=" + idLocation + ", birthPlace=" + birthPlace + ", birthdate=" + birthdate
                + ", accommodationType=" + accommodationType + ", qualification=" + qualification + ", workplace="
                + workplace + ", workType=" + workType + ", experience=" + experience + ", photo=" + photo
                + ", contactPerson=" + contactPerson + ", contactPersonRelation=" + contactPersonRelation
                + ", contactPersonMobile=" + contactPersonMobile + ", addedBy=" + addedBy + ", addDate=" + addDate
                + ", getId()=" + getId() + ", getName()=" + getName() + ", getGender()=" + getGender()
                + ", getSociality()=" + getSociality() + ", getPhone()=" + getPhone() + ", getMobile()=" + getMobile()
                + ", getIdType()=" + getIdType() + ", getIdNumber()=" + getIdNumber() + ", getIdDate()=" + getIdDate()
                + ", getIdLocation()=" + getIdLocation() + ", getBirthPlace()=" + getBirthPlace() + ", getBirthdate()="
                + getBirthdate() + ", getAccommodationType()=" + getAccommodationType() + ", getQualification()="
                + getQualification() + ", getWorkplace()=" + getWorkplace() + ", getWorkType()=" + getWorkType()
                + ", getExperience()=" + getExperience() + ", getPhoto()=" + getPhoto() + ", getContactPerson()="
                + getContactPerson() + ", getContactPersonRelation()=" + getContactPersonRelation()
                + ", getContactPersonMobile()=" + getContactPersonMobile() + ", getAddedBy()=" + getAddedBy()
                + ", getAddDate()=" + getAddDate() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
                + ", toString()=" + super.toString() + "]";
    }

    public void copyProps(Member member) {
        this.name = member.getName();
        this.gender = member.getGender();
        this.sociality = member.getSociality();
        this.phone = member.getPhone();
        this.mobile = member.getMobile();
        this.idType = member.getIdType();
        this.idNumber = member.getIdNumber();
        this.idDate = member.getIdDate();
        this.idLocation = member.getIdLocation();
        this.birthPlace = member.getBirthPlace();
        this.birthdate = member.getBirthdate();
        this.accommodationType = member.getAccommodationType();
        this.qualification = member.getQualification();
        this.workplace = member.getWorkplace();
        this.workType = member.getWorkType();
        this.experience = member.getExperience();
        this.photo = member.getPhoto();
        this.contactPerson = member.getContactPerson();
        this.contactPersonRelation = member.getContactPersonRelation();
        this.contactPersonMobile = member.getContactPersonMobile();

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

    public Constant getGender() {
        return gender;
    }

    public void setGender(Constant gender) {
        this.gender = gender;
    }

    public Constant getSociality() {
        return sociality;
    }

    public void setSociality(Constant sociality) {
        this.sociality = sociality;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public Long getMobile() {
        return mobile;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

    public Constant getIdType() {
        return idType;
    }

    public void setIdType(Constant idType) {
        this.idType = idType;
    }

    public Long getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(Long idNumber) {
        this.idNumber = idNumber;
    }

    public Date getIdDate() {
        return idDate;
    }

    public void setIdDate(Date idDate) {
        this.idDate = idDate;
    }

    public String getIdLocation() {
        return idLocation;
    }

    public void setIdLocation(String idLocation) {
        this.idLocation = idLocation;
    }

    public String getBirthPlace() {
        return birthPlace;
    }

    public void setBirthPlace(String birthPlace) {
        this.birthPlace = birthPlace;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Constant getAccommodationType() {
        return accommodationType;
    }

    public void setAccommodationType(Constant accommodationType) {
        this.accommodationType = accommodationType;
    }

    public Constant getQualification() {
        return qualification;
    }

    public void setQualification(Constant qualification) {
        this.qualification = qualification;
    }

    public String getWorkplace() {
        return workplace;
    }

    public void setWorkplace(String workplace) {
        this.workplace = workplace;
    }

    public Constant getWorkType() {
        return workType;
    }

    public void setWorkType(Constant workType) {
        this.workType = workType;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public Constant getContactPersonRelation() {
        return contactPersonRelation;
    }

    public void setContactPersonRelation(Constant contactPersonRelation) {
        this.contactPersonRelation = contactPersonRelation;
    }

    public Long getContactPersonMobile() {
        return contactPersonMobile;
    }

    public void setContactPersonMobile(Long contactPersonMobile) {
        this.contactPersonMobile = contactPersonMobile;
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
