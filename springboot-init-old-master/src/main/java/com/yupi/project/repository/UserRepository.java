package com.yupi.project.repository;

import com.yupi.project.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByOpenid(String openid);
    User findByUserName(String userName);
}