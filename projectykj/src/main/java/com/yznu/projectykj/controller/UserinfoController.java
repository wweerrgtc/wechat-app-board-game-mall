package com.yznu.projectykj.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yznu.projectykj.entity.Goodsinfo;
import com.yznu.projectykj.entity.Userinfo;
import com.yznu.projectykj.service.IGoodsinfoService;
import com.yznu.projectykj.service.IUserinfoService;
import com.yznu.projectykj.util.RestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author ykj
 * @since 2022-05-10
 */
@RestController
@CrossOrigin
@RequestMapping("/userinfo")
public class UserinfoController {

    @Autowired
    private IUserinfoService userinfoService;

    @Autowired
    private IGoodsinfoService goodsinfoService;


    @RequestMapping("/login")
    public RestResult<Userinfo> login(Userinfo userinfo){

        QueryWrapper<Userinfo> queryWrapper = new QueryWrapper<>(userinfo);

        List<Userinfo> list = userinfoService.list(queryWrapper);
        if (list.size() != 0){
            Userinfo user = list.get(0);

            return RestResult.success(user);
        }

        return RestResult.error("用户名或密码错误");
    }

    @RequestMapping("/updateUserinfo")
    public RestResult<Userinfo> updateUserinfo(Userinfo userinfo){

        userinfoService.updateById(userinfo);
        return RestResult.success("ok");
    }

    @RequestMapping("/rechange")
    public RestResult<Userinfo> rechange(Integer userId, Integer money){

        Userinfo userinfo = userinfoService.getById(userId);
        userinfo.setWallet(userinfo.getWallet() + money);
        userinfoService.updateById(userinfo);
        return RestResult.success("ok");
    }

    @RequestMapping("/pay")
    public RestResult<Userinfo> rechange(Integer userId, Double total){

        Userinfo userinfo = userinfoService.getById(userId);
        userinfo.setWallet(userinfo.getWallet() - total);
        userinfoService.updateById(userinfo);
        return RestResult.success("ok");
    }

    @RequestMapping("/dailyCheck")
    public RestResult<Userinfo> dailyCheck(Integer userId) {


        Userinfo userinfo = userinfoService.getById(userId);
        LocalDate lastCheckDate = userinfo.getDailyCheck();
        LocalDate now = LocalDate.now();

        long day = now.toEpochDay() - lastCheckDate.toEpochDay();
        if (day >= 1){
            userinfo.setContribution(userinfo.getContribution() + 1);
            userinfo.setDailyCheck(LocalDate.now());
            userinfoService.updateById(userinfo);
            return RestResult.success("签到成功, 贡献值 +1");
        }
        return RestResult.success("你今天已经签到了");
    }
}
