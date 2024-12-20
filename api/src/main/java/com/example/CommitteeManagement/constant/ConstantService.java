package com.example.CommitteeManagement.constant;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ConstantService {
    private final ConstantRepository repository;
    private final ConstantMapper mapper;

    public ConstantService(ConstantRepository repository, ConstantMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<Constant> getAll() {
        return repository.findAll();
    }

    public ReadOtp getById(Long id) {
        return mapper.toReadOtp(repository.getById(id));
    }

    public ReadOtp create(EditDto dto) {

        var item = repository.save(mapper.toConstant(dto));
        return mapper.toReadOtp(item);
    }

    public ReadOtp update(Long id, EditDto dto) {
        Constant item = repository.getById(id);
        item.setCode(dto.code());
        item.setName(dto.name());
        repository.save(item);
        return mapper.toReadOtp(item);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}