package com.yznu.projectykj.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yznu.projectykj.entity.Goodsinfo;
import com.yznu.projectykj.entity.MessageList;
import com.yznu.projectykj.entity.Orderinfo;
import com.yznu.projectykj.entity.Userinfo;
import com.yznu.projectykj.service.IGoodsinfoService;
import com.yznu.projectykj.service.IMessageListService;
import com.yznu.projectykj.service.IOrderinfoService;
import com.yznu.projectykj.util.RestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Collections;
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
@RequestMapping("/orderinfo")
public class OrderinfoController {

    @Autowired
    private IOrderinfoService orderinfoService;

    @Autowired
    private IMessageListService messageListService;

    @Autowired
    private IGoodsinfoService goodsinfoService;



    @RequestMapping("/createOrder")
    public RestResult<Orderinfo> createOrder(Integer userId, Integer owner, Integer gid){

        Orderinfo orderinfo = new Orderinfo();
        orderinfo.setCreateTime(LocalDateTime.now());
        orderinfo.setOwner(owner);
        orderinfo.setRenter(userId);
        orderinfo.setGid(gid);

        orderinfoService.save(orderinfo);

        return RestResult.success("ok");
    }



    @RequestMapping("/getOrderList")
    public RestResult<Orderinfo> getOrderList(Integer renter){
        QueryWrapper<Orderinfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("renter", renter);

        List<Orderinfo> orderinfoList = orderinfoService.list(queryWrapper);
        for (Orderinfo orderinfo : orderinfoList) {
            Integer gid = orderinfo.getGid();
            orderinfo.setGoodsinfoList(goodsinfoService.getById(gid));
        }
        Collections.reverse(orderinfoList);
        return RestResult.success(orderinfoList);
    }



    @RequestMapping("/setComplete")
    public RestResult<Orderinfo> setComplete(Integer orderId){

        Orderinfo orderinfo = orderinfoService.getById(orderId);
        orderinfo.setCompleteTime(LocalDateTime.now());
        orderinfo.setStatus(1);
        orderinfoService.updateById(orderinfo);

        Goodsinfo goodsinfo = goodsinfoService.getById(orderinfo.getGid());
        MessageList messageList = new MessageList();
        messageList.setTitle("你的桌游"+goodsinfo.getGname()+"已经归还了");
        messageList.setContent("感谢您的分享");
        messageList.setTime(LocalDateTime.now());
        messageList.setUserId(goodsinfo.getOwner());
        messageListService.save(messageList);

        return RestResult.success("ok");
    }
}
