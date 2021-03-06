package com.kamarou.pokershmoker.service.dto.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Objects;

public class GeneralConfigDTO implements Serializable {

  private String id;
  private double buyIn;
  private int chipsAmount;
  private double commission;
  private String tournamentID;

  public GeneralConfigDTO() {
  }

  public GeneralConfigDTO(String id, double buyIn, int chipsAmount, double commission,
      String tournamentID) {
    this.id = id;
    this.buyIn = buyIn;
    this.chipsAmount = chipsAmount;
    this.commission = commission;
    this.tournamentID = tournamentID;
  }

  @ApiModelProperty(hidden = true, readOnly = true)
  @JsonProperty(access = Access.READ_ONLY)
  public String getTournamentID() {
    return tournamentID;
  }

  @JsonIgnore
  public void setTournamentID(String tournamentID) {
    this.tournamentID = tournamentID;
  }

  @ApiModelProperty(hidden = true, readOnly = true)
  @JsonProperty(access = Access.READ_ONLY)
  public String getId() {
    return id;
  }

  @JsonIgnore
  public void setId(String id) {
    this.id = id;
  }

  public double getBuyIn() {
    return buyIn;
  }

  public void setBuyIn(double buyIn) {
    this.buyIn = buyIn;
  }

  public int getChipsAmount() {
    return chipsAmount;
  }

  public void setChipsAmount(int chipsAmount) {
    this.chipsAmount = chipsAmount;
  }

  public double getCommission() {
    return commission;
  }

  public void setCommission(double commission) {
    this.commission = commission;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GeneralConfigDTO that = (GeneralConfigDTO) o;
    return Double.compare(that.buyIn, buyIn) == 0 &&
        chipsAmount == that.chipsAmount &&
        Double.compare(that.commission, commission) == 0 &&
        Objects.equals(id, that.id) &&
        Objects.equals(tournamentID, that.tournamentID);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, buyIn, chipsAmount, commission, tournamentID);
  }

  @Override
  public String toString() {
    return "GeneralConfigDTO{" +
        "id='" + id + '\'' +
        ", buyIn=" + buyIn +
        ", chipsAmount=" + chipsAmount +
        ", commission=" + commission +
        ", tournamentID='" + tournamentID + '\'' +
        '}';
  }
}
