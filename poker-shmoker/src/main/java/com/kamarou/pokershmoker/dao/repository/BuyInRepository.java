package com.kamarou.pokershmoker.dao.repository;

import com.kamarou.pokershmoker.dao.entity.BuyIn;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyInRepository extends JpaRepository<BuyIn, String> {

}
