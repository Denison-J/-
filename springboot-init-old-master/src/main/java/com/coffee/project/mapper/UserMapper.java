package com.coffee.project.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import com.coffee.project.domain.User;
/***
 * mapper/
 * Mapper（DAO）层，直接操作数据库。
 * UserMapper：对应用户表的 Mapper 接口，定义数据库操作方法，如 selectByUsername()、insertUser() 等。
 */
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
