package com.wlamonserrat.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wlamonserrat.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
