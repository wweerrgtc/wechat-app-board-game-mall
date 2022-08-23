package com.yznu.projectykj.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yznu.projectykj.entity.Goodsinfo;
import com.yznu.projectykj.entity.Userinfo;
import com.yznu.projectykj.entity.WishList;
import com.yznu.projectykj.service.IGoodsinfoService;
import com.yznu.projectykj.service.IWishListService;
import com.yznu.projectykj.util.RestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

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
@RequestMapping("/wishList")
public class WishListController {

    @Autowired
    private IWishListService wishListService;

    @Autowired
    private IGoodsinfoService goodsinfoService;

    @RequestMapping("/getProductListByUserId")
    public RestResult<Goodsinfo> getProductListByUserId(Integer userId) {
        QueryWrapper<WishList> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userId);
        List<WishList> wishList = wishListService.list(queryWrapper);

        ArrayList<Goodsinfo> goodsinfoList = new ArrayList<>();

        for (WishList item : wishList) {
            Goodsinfo goodsinfo = goodsinfoService.getById(item.getGid());
            goodsinfoList.add(goodsinfo);
        }

        return RestResult.success(goodsinfoList);
    }

    @RequestMapping("/addOrRemoveWishByUserIdAndGid")
    public RestResult<WishList> removeWishByUserIdAndGid(Integer userId, Integer gid) {
        QueryWrapper<WishList> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userId);
        queryWrapper.eq("gid", gid);
        List<WishList> list = wishListService.list(queryWrapper);
        if (list.size() == 0) {
            WishList wishList = new WishList();
            wishList.setUserId(userId);
            wishList.setGid(gid);
            wishListService.save(wishList);
        }else {
            wishListService.remove(queryWrapper);
        }

        return RestResult.success("ok");
    }


    @RequestMapping("/getWishListCountByUserId")
    public RestResult<Integer> getWishListCountByUserId(Integer userId){
        QueryWrapper<WishList> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userId);
        List<WishList> list = wishListService.list(queryWrapper);
        return RestResult.success(list.size());
    }


    @RequestMapping("/isCollection")
    public RestResult<Boolean> isCollection(Integer userId, Integer gid){
        QueryWrapper<WishList> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userId);
        queryWrapper.eq("gid", gid);
        List<WishList> list = wishListService.list(queryWrapper);

        //判断是否在心愿单, 存在返回true, 不存在返回false
        return RestResult.success(list.size() != 0);
    }

}
