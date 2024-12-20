package com.example.CommitteeManagement.user;

import org.springframework.stereotype.Service;

@Service
public class Mapper {

    public Model toModel(EditDto data) {
        Model item = new Model();
        item.setFullName(data.fullName());
        item.setUsername(data.fullName());
        item.setPassword(data.password());

        return item;
    }

    public ReadOtp toReadOtp(Model model) {
        // var addByModel = model.getAddedBy();
        // var addBy = new ReadOtp(addByModel.getId(), addByModel.getFullName(), addByModel.getFullName(),
        //         addByModel.getAddDate(), null);
        System.out.println(model.toString());
        return new ReadOtp(model.getId(), model.getFullName(), model.getUsername(), model.getAddDate());
    }

}