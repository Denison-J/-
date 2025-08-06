package com.coffee.project.dto;

import lombok.Data;
/**
 * dto/ （Data Transfer Object）
 * 用于数据传输的对象。它和实体类不同，一般用于接口参数的接收或返回结构。
 * LoginDTO：登录时前端提交的数据对象。
 */
@Data
public class LoginDTO {
    private String username;
    private String password;
}
