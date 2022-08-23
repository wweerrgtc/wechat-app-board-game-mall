package com.yznu.projectykj.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yznu.projectykj.entity.Goodsinfo;
import com.yznu.projectykj.entity.MessageList;
import com.yznu.projectykj.service.IMessageListService;
import com.yznu.projectykj.util.RestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Random;

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
@RequestMapping("/messageList")
public class MessageListController {

    @Autowired
    private IMessageListService messageListService;

    @RequestMapping("/getMessageList")
    public RestResult<MessageList> getMessageList(Integer userId){

        QueryWrapper<MessageList> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userId);

        List<MessageList> messageList = messageListService.list(queryWrapper);
        Collections.reverse(messageList);
        return RestResult.success(messageList);
    }

    @RequestMapping("/getMessageNum")
    public RestResult<Integer> getMessageNum(Integer userId){

        QueryWrapper<MessageList> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userId);

        List<MessageList> messageList = messageListService.list(queryWrapper);
        Collections.reverse(messageList);
        return RestResult.success(messageList.size());
    }

    @RequestMapping("/createMessage")
    public RestResult<MessageList> createMessage(String title, String content, Integer userId){

        MessageList messageinfo = new MessageList();
        messageinfo.setTitle(title);
        messageinfo.setContent(content);
        messageinfo.setTime(LocalDateTime.now());
        messageinfo.setUserId(userId);

        messageListService.save(messageinfo);
        return RestResult.success("OK");
    }
}
