package com.coffee.project.controller;

import com.coffee.project.common.Result;
import com.coffee.project.domain.User;
import com.coffee.project.dto.LoginDTO;
import com.coffee.project.dto.PasswordResetDTO;
import com.coffee.project.dto.RegisterDTO;
import com.coffee.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * controller/
 * 控制器层，处理前端请求。
 * UserController：处理用户相关的接口，比如登录、注册、密码重置。
 */

/**
 * 用户控制器类，用于处理与用户相关的 HTTP 请求。
 * 该控制器类通过 RESTful API 提供用户注册、登录和密码重置等功能。
 */
@RestController // 标记该类为一个 RESTful 控制器，Spring 会自动处理 HTTP 请求并返回 JSON 格式的数据
@RequestMapping("/user") // 指定该控制器类处理的请求基础路径为 "/user"
public class UserController {

    /**
     * 自动注入用户服务类，用于调用具体的业务逻辑。
     */
    @Autowired
    private UserService userService;

    /**
     * 处理用户注册的 POST 请求。
     *
     * @param request 注册请求数据，通过 JSON 格式接收
     * @return 返回注册结果，成功时返回成功消息
     */
    @PostMapping("/register") // 指定该方法处理 "/user/register" 路径的 POST 请求
    public Result<?> register(@RequestBody RegisterDTO request) {
        userService.register(request);
        return Result.success("注册成功");
    }

    /**
     * 处理用户登录的 POST 请求。
     *
     * @param request 登录请求数据，通过 JSON 格式接收
     * @return 返回登录结果，成功时返回用户信息
     */
    @PostMapping("/login") // 指定该方法处理 "/user/login" 路径的 POST 请求
    public Result<?> login(@RequestBody LoginDTO request) {
        User user = userService.login(request);
        return Result.success(user);
    }

    /**
     * 处理用户密码重置的 POST 请求。
     *
     * @param request 密码重置请求数据，通过 JSON 格式接收
     * @return 返回密码重置结果，成功时返回成功消息
     */
    @PostMapping("/reset-password") // 指定该方法处理 "/user/reset-password" 路径的 POST 请求
    public Result<?> passwordReset(@RequestBody PasswordResetDTO request) {
        userService.passwordReset(request);
        return Result.success("密码重置成功");
    }
}