package com.coffee.project.service;

import com.coffee.project.domain.User;
import com.coffee.project.dto.LoginDTO;
import com.coffee.project.dto.PasswordResetDTO;
import com.coffee.project.dto.RegisterDTO;

public interface UserService {
    boolean register(RegisterDTO registerDTO);
    User login(LoginDTO loginDTO);
    boolean passwordReset(PasswordResetDTO request);
}
