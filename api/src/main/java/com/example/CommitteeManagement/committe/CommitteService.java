package com.example.CommitteeManagement.committe;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class CommitteService {
    private final CommitteRepository repository;
    private final CommitteMapper mapper;

    public CommitteService(CommitteRepository repository, CommitteMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<Committe> getAll() {
        return repository.findAll();
    }

    public ReadOtp getById(Long id) {
        return mapper.toReadOtp(repository.getById(id));
    }

    public ReadOtp create(EditDto dto) {

        var item = repository.save(mapper.toCommitte(dto));
        return mapper.toReadOtp(item);
    }

    public ReadOtp update(Long id, EditDto dto) {
        Committe item = repository.getById(id);
        Committe updatedItem= mapper.toCommitte(dto);
        item.setParent(updatedItem.getParent());
        item.setName(updatedItem.getName());
        item.setType(updatedItem.getType());
        repository.save(item);
        return mapper.toReadOtp(item);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}