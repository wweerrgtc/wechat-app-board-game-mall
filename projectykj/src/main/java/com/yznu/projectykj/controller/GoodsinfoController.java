package com.yznu.projectykj.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yznu.projectykj.entity.Goodsinfo;
import com.yznu.projectykj.entity.Userinfo;
import com.yznu.projectykj.service.IGoodsinfoService;
import com.yznu.projectykj.service.IUserinfoService;
import com.yznu.projectykj.util.RestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author ykj
 * @since 2022-05-10
 */
@RestController
@CrossOrigin
@RequestMapping("/goodsinfo")
public class GoodsinfoController {

    @Autowired
    private IGoodsinfoService goodsinfoService;

    @Autowired
    private IUserinfoService userinfoService;


    @RequestMapping("/getIndexImgs")
    public RestResult<Goodsinfo> getIndexImgs() {
        QueryWrapper<Goodsinfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("category", "indexImgs");
        List<Goodsinfo> indexImgsList = goodsinfoService.list(queryWrapper);
        return RestResult.success(indexImgsList);
    }

    @RequestMapping("/getTopList")
    public RestResult<Goodsinfo> getTopList() {
        QueryWrapper<Goodsinfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("category", "topList");
        List<Goodsinfo> indexImgsList = goodsinfoService.list(queryWrapper);
        return RestResult.success(indexImgsList);
    }

    @RequestMapping("/getProduct")
    public RestResult<Goodsinfo> getProduct(Integer gid) {
        Goodsinfo goodsinfo = goodsinfoService.getById(gid);

        Userinfo userinfo = userinfoService.getById(goodsinfo.getOwner());
        goodsinfo.setUsername(userinfo.getUsername());
        return RestResult.success(goodsinfo);
    }

    @RequestMapping("/delProduct")
    public RestResult<Goodsinfo> delProduct(Integer gid) {
        goodsinfoService.removeById(gid);

        return RestResult.success("ok");
    }

    @RequestMapping("/recommended")
    public RestResult<Integer> recommended(Integer userId) {
        List<Goodsinfo> list = goodsinfoService.list();
        Random random = new Random();
        int i = random.nextInt(list.size());
        Integer gid = list.get(i).getGid();

        Userinfo userinfo = userinfoService.getById(userId);
        if (userinfo.getContribution() > 0) {
            userinfo.setContribution(userinfo.getContribution() - 1);
            userinfoService.updateById(userinfo);
        } else {
            return RestResult.error("贡献值不足");
        }
        return RestResult.success(gid);
    }

    @RequestMapping("/shareGoodsinfo")
    public RestResult<Goodsinfo> shareGoodsinfo(Goodsinfo goodsinfo) {

        Double price = goodsinfo.getPrice();
        Integer contribution = (int) (Math.floor(price / 50));
        Userinfo userinfo = userinfoService.getById(goodsinfo.getOwner());
        userinfo.setContribution(userinfo.getContribution() + contribution + 1);
        userinfoService.updateById(userinfo);

        goodsinfoService.save(goodsinfo);

        return RestResult.success("ok");
    }

    @RequestMapping("/updateCategoryList")
    public RestResult<Goodsinfo> updateCategoryList(String category) {

        QueryWrapper<Goodsinfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("category", category);
        List<Goodsinfo> categoryList = goodsinfoService.list(queryWrapper);
        return RestResult.success(categoryList);
    }

    @RequestMapping("/search")
    public RestResult<Goodsinfo> search(String gname) {

        QueryWrapper<Goodsinfo> queryWrapper = new QueryWrapper<>();
        //queryWrapper.eq("category", category);
        queryWrapper.like("gname", gname);
        List<Goodsinfo> searchList = goodsinfoService.list(queryWrapper);
        return RestResult.success(searchList);
    }

    @RequestMapping("/updateShareNum")
    public RestResult<Integer> updateShareNum(Integer userId) {

        QueryWrapper<Goodsinfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.like("owner", userId);
        List<Goodsinfo> shareList = goodsinfoService.list(queryWrapper);
        return RestResult.success(shareList.size());
    }

    @RequestMapping("/getShareList")
    public RestResult<Goodsinfo> getShareList(Integer userId) {

        QueryWrapper<Goodsinfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.like("owner", userId);
        List<Goodsinfo> shareList = goodsinfoService.list(queryWrapper);
        return RestResult.success(shareList);
    }

}
