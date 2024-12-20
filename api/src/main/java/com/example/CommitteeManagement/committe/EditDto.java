package com.example.CommitteeManagement.committe;

public record EditDto(
        String name, Long typeId, Long parentId) {
}