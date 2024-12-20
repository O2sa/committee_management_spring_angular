package com.example.CommitteeManagement.user;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ModelService {
    private final Repository repository;
    private final Mapper mapper;

    public ModelService(Repository repository, Mapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<Model> getAll() {
        return repository.findAll();
    }

    public ReadOtp getById(Long id) {
        return mapper.toReadOtp(repository.getById(id));
    }

    public ReadOtp create(EditDto dto) {

        var item = repository.save(mapper.toModel(dto));
        return mapper.toReadOtp(item);
    }

    public ReadOtp update(Long id, EditDto dto) {
        Model item = repository.getById(id);
        item.setFullName(dto.fullName());
        item.setUsername(dto.username());
        repository.save(item);
        return mapper.toReadOtp(item);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}