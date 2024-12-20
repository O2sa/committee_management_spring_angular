package com.example.CommitteeManagement.committeMember;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CommitteMemberService {
    private final CommitteMemberRepository repository;
    private final CommitteMemberMapper mapper;

    public CommitteMemberService(CommitteMemberRepository repository, CommitteMemberMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<CommitteMember> getAll() {
        return repository.findAll();
    }

    public ReadOtp getById(Long id) {
        return mapper.toReadOtp(repository.getById(id));
    }

    public ReadOtp create(EditDto dto) {

        var item = repository.save(mapper.toCommitteMember(dto));
        return mapper.toReadOtp(item);
    }

    public ReadOtp update(Long id, EditDto dto) {
        CommitteMember item = repository.getById(id);
        CommitteMember mappedItem = mapper.toCommitteMember(dto);
        item.setCommitte(mappedItem.getCommitte());
        item.setMember(mappedItem.getMember());


        repository.save(item);
        return mapper.toReadOtp(item);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}