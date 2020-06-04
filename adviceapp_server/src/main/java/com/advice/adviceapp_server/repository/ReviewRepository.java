package com.advice.adviceapp_server.repository;

import com.advice.adviceapp_server.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
