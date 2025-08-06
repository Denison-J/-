package com.coffee.project.domain;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

@Data
@TableName("user")
/**
 * domain
 实体类（Entity），用于映射数据库中的表。
 User：用户表对应的实体类，包含用户名、密码、邮箱等属性。
 */
public class User {
    private Long id;
    private String username;
    private String password;
    private String email;
    private String phone;
    private Date createTime;
}
