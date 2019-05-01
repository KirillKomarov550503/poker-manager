package com.kamarou.pokershmoker.service.dto.converter;

import com.kamarou.pokershmoker.dao.entity.GameConfigType;
import com.kamarou.pokershmoker.dao.entity.GeneralConfig;
import com.kamarou.pokershmoker.dao.entity.OtherConfig;
import com.kamarou.pokershmoker.dao.entity.Round;
import com.kamarou.pokershmoker.dao.entity.Tournament;
import com.kamarou.pokershmoker.service.dto.Converter;
import com.kamarou.pokershmoker.service.dto.entity.GeneralConfigDTO;
import com.kamarou.pokershmoker.service.dto.entity.OtherConfigDTO;
import com.kamarou.pokershmoker.service.dto.entity.RoundDTO;
import com.kamarou.pokershmoker.service.dto.entity.TournamentDTO;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TournamentConverter implements Converter<TournamentDTO, Tournament> {

  private final RoundConverter roundConverter;

  @Autowired
  public TournamentConverter(
      GeneralConfigConverter generalConfigConverter,
      OtherConfigConverter otherConfigConverter,
      RoundConverter roundConverter) {
    this.roundConverter = roundConverter;
  }

  @Override
  public TournamentDTO convertToDTO(Tournament entity) {
    return new TournamentDTO(entity.getId(), entity.getTournamentName(), entity.getDescription());
  }

  @Override
  public Tournament convertToEntity(TournamentDTO t) {
    Tournament tournament = new Tournament();
    tournament.setTournamentName(t.getTournamentName());
    tournament.setDescription(t.getTournamentDescription());
    GeneralConfig generalConfig = new GeneralConfig(0.0, 0, 0.0, tournament);
    tournament.setGeneralConfig(generalConfig);

    OtherConfig otherConfig = new OtherConfig(0.0, 0, GameConfigType.REBUY, false);
    otherConfig.setTournament(tournament);
    List<RoundDTO> roundDTOS = Collections.singletonList(new RoundDTO());
    tournament.setOtherConfig(otherConfig);

    Set<Round> rounds = roundDTOS.stream().map(roundDTO -> {
      Round round = roundConverter.convertToEntity(roundDTO);
      round.setTournament(tournament);
      return round;
    }).collect(Collectors.toSet());
    tournament.setRounds(rounds);
    return tournament;
  }
}
