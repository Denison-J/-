package com.coffee.project.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.coffee.project.domain.User;
import com.coffee.project.dto.LoginDTO;
import com.coffee.project.dto.PasswordResetDTO;
import com.coffee.project.dto.RegisterDTO;
import com.coffee.project.mapper.UserMapper;
import com.coffee.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * service/
 * 业务逻辑层，写核心功能代码。
 * UserService：用户业务接口，定义服务功能。
 * impl/UserServiceImpl：接口实现类，写具体业务逻辑，如用户注册、登录、密码加密等。*/
/**
 * 用户服务类实现，提供用户相关的业务逻辑处理。
 * 包括用户注册、登录和密码重置等功能。
 */
@Service
public class UserServiceImpl implements UserService {

    /**
     * 自动注入用户数据访问对象（Mapper），用于与数据库交互。
     */
    @Autowired
    private UserMapper userMapper;

    /**
     * 实现用户注册功能。
     *
     * @param registerDTO 注册请求数据，包含用户名、密码和邮箱
     * @return 注册是否成功
     * @throws RuntimeException 如果用户名已存在
     */
    @Override
    public boolean register(RegisterDTO registerDTO) {
        // 检查用户名是否已存在
        User existing = userMapper.selectOne(
                new QueryWrapper<User>().eq("username", registerDTO.getUsername())
        );
        if (existing != null) {
            throw new RuntimeException("用户名已存在");
        }
        // 创建用户对象并设置属性
        User user = new User();
        user.setUsername(registerDTO.getUsername());
        user.setPassword(registerDTO.getPassword()); // 建议加密（如BCrypt）
        user.setEmail(registerDTO.getEmail());
        // 插入用户到数据库，返回插入是否成功
        return userMapper.insert(user) > 0;
    }

    /**
     * 实现用户登录功能。
     *
     * @param loginDTO 登录请求数据，包含用户名和密码
     * @return 登录成功的用户对象
     * @throws RuntimeException 如果用户名或密码错误
     */
    @Override
    public User login(LoginDTO loginDTO) {
        // 查询用户名和密码匹配的用户
        User user = userMapper.selectOne(
                new QueryWrapper<User>()
                        .eq("username", loginDTO.getUsername())
                        .eq("password", loginDTO.getPassword()) // 实际中应是加密比对
        );
        if (user == null) throw new RuntimeException("用户名或密码错误");
        return user;
    }

    /**
     * 实现用户密码重置功能。
     *
     * @param request 密码重置请求数据，包含用户名、邮箱和新密码
     * @return 密码重置是否成功
     * @throws RuntimeException 如果用户名或邮箱不匹配
     */
    @Override
    public boolean passwordReset(PasswordResetDTO request) {
        // 查询用户名和邮箱匹配的用户
        User user = userMapper.selectOne(
                new QueryWrapper<User>()
                        .eq("username", request.getUsername())
                        .eq("email", request.getEmail())
        );
        if (user == null) throw new RuntimeException("用户名或邮箱不匹配");
        // 更新用户密码
        user.setPassword(request.getNewPassword());
        // 更新用户信息到数据库，返回更新是否成功
        return userMapper.updateById(user) > 0;
    }
}
