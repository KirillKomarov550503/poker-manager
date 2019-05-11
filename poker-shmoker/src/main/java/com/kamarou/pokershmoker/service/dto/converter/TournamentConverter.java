package com.kamarou.pokershmoker.service.dto.converter;

import com.kamarou.pokershmoker.dao.entity.GeneralConfig;
import com.kamarou.pokershmoker.dao.entity.OtherConfig;
import com.kamarou.pokershmoker.dao.entity.Round;
import com.kamarou.pokershmoker.dao.entity.Tournament;
import com.kamarou.pokershmoker.service.dto.Converter;
import com.kamarou.pokershmoker.service.dto.entity.GeneralConfigDTO;
import com.kamarou.pokershmoker.service.dto.entity.OtherConfigDTO;
import com.kamarou.pokershmoker.service.dto.entity.RoundDTO;
import com.kamarou.pokershmoker.service.dto.entity.TournamentDTO;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TournamentConverter implements Converter<TournamentDTO, Tournament> {
  @Override
  public TournamentDTO convertToDTO(Tournament entity) {
    GeneralConfigDTO configDTO = new GeneralConfigDTO(entity.getGeneralConfig().getId(),
        entity.getGeneralConfig().getBuyIn(), entity.getGeneralConfig().getChipsAmount(),
        entity.getGeneralConfig().getCommission(),
        entity.getGeneralConfig().getTournament().getId());
    OtherConfigDTO otherConfigDTO = new OtherConfigDTO(entity.getOtherConfig().getId(),
        entity.getOtherConfig().getGameConfigType(),
        entity.getOtherConfig().getChipsAmount(), entity.getOtherConfig().getCommission(),
        entity.getOtherConfig().isConfigPresent(),
        entity.getOtherConfig().getTournament().getId());
    return new TournamentDTO(entity.getId(), entity.getTournamentName(), entity.getDescription(),
        configDTO, otherConfigDTO);
  }

  @Override
  public Tournament convertToEntity(TournamentDTO t) {
    Tournament tournament = new Tournament();
    tournament.setTournamentName(t.getTournamentName());
    tournament.setDescription(t.getTournamentDescription());
    GeneralConfigDTO generalConfigDTO = t.getGeneralConfigDTO();
    GeneralConfig generalConfig = new GeneralConfig(generalConfigDTO.getCommission(),
        generalConfigDTO.getChipsAmount(),
        generalConfigDTO.getBuyIn(), tournament);
    tournament.setGeneralConfig(generalConfig);

    OtherConfigDTO otherConfigDTO = t.getOtherConfigDTO();
    OtherConfig otherConfig = new OtherConfig(otherConfigDTO.getCommission(),
        otherConfigDTO.getChipsAmount(), otherConfigDTO.getGameConfigType(),
        otherConfigDTO.isConfigPresent());
    otherConfig.setTournament(tournament);
    tournament.setOtherConfig(otherConfig);
    return tournament;
  }
}
