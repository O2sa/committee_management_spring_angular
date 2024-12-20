package com.example.CommitteeManagement.constant;

import org.springframework.stereotype.Service;

@Service
public class ConstantMapper {

    public Constant toConstant(EditDto data) {
        Constant item = new Constant();
        item.setCode(data.code());
        item.setName(data.name());

        return item;
    }

    public ReadOtp toReadOtp(Constant model) {
  
        return new ReadOtp(model.getId(), model.getName(), model.getCode());
    }

}