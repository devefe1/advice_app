package com.advice.adviceapp_server.repository;

import com.advice.adviceapp_server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Long> {
}
