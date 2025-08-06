package com.coffee.project.dto;

import lombok.Data;

// PasswordResetDTO：找回密码的数据对象。
@Data
public class PasswordResetDTO {
    private String username;
    private String newPassword;
    private String email;
}
