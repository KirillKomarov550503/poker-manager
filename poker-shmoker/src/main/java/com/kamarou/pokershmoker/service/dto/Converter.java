package com.kamarou.pokershmoker.service.dto;

public interface Converter<DTO, Entity> {

  DTO convertToDTO(Entity entity);

  Entity convertToEntity(DTO dto);
}
