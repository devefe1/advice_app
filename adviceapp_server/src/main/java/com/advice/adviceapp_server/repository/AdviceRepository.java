package com.advice.adviceapp_server.repository;

import com.advice.adviceapp_server.model.Advice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdviceRepository extends JpaRepository <Advice,Long> {
}
