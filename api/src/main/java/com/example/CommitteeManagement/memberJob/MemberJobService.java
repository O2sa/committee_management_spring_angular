package com.example.CommitteeManagement.memberJob;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class MemberJobService {
    private final MemberJobRepository repository;
    private final MemberJobMapper mapper;

    public MemberJobService(MemberJobRepository repository, MemberJobMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<MemberJob> getAll() {
        return repository.findAll();
    }

    public ReadOtp getById(Long id) {
        return mapper.toReadOtp(repository.getById(id));
    }

    public ReadOtp create(EditDto dto) {

        var item = repository.save(mapper.toMemberJob(dto));
        return mapper.toReadOtp(item);
    }

    public ReadOtp update(Long id, EditDto dto) {
        MemberJob item = repository.getById(id);
        item.setTitle(dto.title());
        repository.save(item);
        return mapper.toReadOtp(item);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}