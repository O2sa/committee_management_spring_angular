package com.example.CommitteeManagement.member;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MemberService {
    private final MemberRepository repository;
    private final MemberMapper mapper;

    public MemberService(MemberRepository repository, MemberMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<Member> getAll() {
        return repository.findAll();
    }

    public ReadOtp getById(Long id) {
        return mapper.toReadOtp(repository.getById(id));
    }

    public ReadOtp create(EditDto dto) {

        var item = repository.save(mapper.toMember(dto));
        return mapper.toReadOtp(item);
    }

    public ReadOtp update(Long id, EditDto dto) {
        Member item = repository.getById(id);
        Member mappedItem = mapper.toMember(dto);
        item.copyProps(mappedItem);
        repository.save(item);
        return mapper.toReadOtp(mappedItem);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}