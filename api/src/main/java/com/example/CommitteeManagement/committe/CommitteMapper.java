package com.example.CommitteeManagement.committe;

import org.springframework.stereotype.Service;

import com.example.CommitteeManagement.constant.Constant;

@Service
public class CommitteMapper {

    public Committe toCommitte(EditDto dto) {
        Committe item = new Committe();

        Constant type = new Constant();
        type.setId(dto.typeId());

        item.setName(dto.name());

        item.setType(type);
        if (dto.parentId() != null){

        Committe parent = new Committe();
        parent.setId(dto.parentId());
            item.setParent(parent);

        }

        System.out.println(item.toString());
        return item;
    }

    public ReadOtp toReadOtp(Committe model) {

        return new ReadOtp(model.getId(), model.getName(), model.getParent());
    }

}