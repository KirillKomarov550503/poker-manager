package com.kamarou.pokershmoker.service.dto.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

public class TournamentDTO implements Serializable {

  private String id;
  private String tournamentName;
  private String tournamentDescription;
  private GeneralConfigDTO generalConfigDTO;
  private OtherConfigDTO otherConfigDTO;

  public TournamentDTO() {
  }

  public TournamentDTO(String id, String tournamentName, String tournamentDescription,
      GeneralConfigDTO generalConfigDTO,
      OtherConfigDTO otherConfigDTO) {
    this.id = id;
    this.tournamentName = tournamentName;
    this.tournamentDescription = tournamentDescription;
    this.generalConfigDTO = generalConfigDTO;
    this.otherConfigDTO = otherConfigDTO;
  }

  @ApiModelProperty(readOnly = true, hidden = true)
  @JsonProperty(access = Access.READ_ONLY)
  public String getId() {
    return id;
  }

  @JsonIgnore
  public void setId(String id) {
    this.id = id;
  }

  public String getTournamentName() {
    return tournamentName;
  }

  public void setTournamentName(String tournamentName) {
    this.tournamentName = tournamentName;
  }

  public String getTournamentDescription() {
    return tournamentDescription;
  }

  public void setTournamentDescription(String tournamentDescription) {
    this.tournamentDescription = tournamentDescription;
  }


  public GeneralConfigDTO getGeneralConfigDTO() {
    return generalConfigDTO;
  }

  public void setGeneralConfigDTO(
      GeneralConfigDTO generalConfigDTO) {
    this.generalConfigDTO = generalConfigDTO;
  }

  public OtherConfigDTO getOtherConfigDTO() {
    return otherConfigDTO;
  }

  public void setOtherConfigDTO(OtherConfigDTO otherConfigDTO) {
    this.otherConfigDTO = otherConfigDTO;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TournamentDTO that = (TournamentDTO) o;
    return Objects.equals(tournamentName, that.tournamentName) &&
        Objects.equals(tournamentDescription, that.tournamentDescription) &&
        Objects.equals(generalConfigDTO, that.generalConfigDTO) &&
        Objects.equals(otherConfigDTO, that.otherConfigDTO);
  }

  @Override
  public int hashCode() {
    return Objects.hash(tournamentName, tournamentDescription, generalConfigDTO, otherConfigDTO);
  }

  @Override
  public String toString() {
    return "TournamentDTO{" +
        "id='" + id + '\'' +
        ", tournamentName='" + tournamentName + '\'' +
        ", tournamentDescription='" + tournamentDescription + '\'' +
        ", generalConfigDTO=" + generalConfigDTO +
        ", otherConfigDTO=" + otherConfigDTO +
        '}';
  }
}
