package com.coffee.project.dto;

import lombok.Data;

// RegisterDTO：注册时前端提交的数据对象。

@Data
public class RegisterDTO {
    private String username;
    private String password;
    private String email;
}
