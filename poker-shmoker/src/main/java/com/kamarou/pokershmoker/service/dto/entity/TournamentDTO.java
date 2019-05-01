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

  public TournamentDTO() {
  }

  public TournamentDTO(String id, String tournamentName, String tournamentDescription) {
    this.id = id;
    this.tournamentName = tournamentName;
    this.tournamentDescription = tournamentDescription;
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
        Objects.equals(tournamentDescription, that.tournamentDescription);
  }

  @Override
  public int hashCode() {
    return Objects.hash(tournamentName, tournamentDescription);
  }

  @Override
  public String toString() {
    return "TournamentDTO{" +
        "id='" + id + '\'' +
        ", tournamentName='" + tournamentName + '\'' +
        ", tournamentDescription='" + tournamentDescription + '\'' +
        '}';
  }
}
