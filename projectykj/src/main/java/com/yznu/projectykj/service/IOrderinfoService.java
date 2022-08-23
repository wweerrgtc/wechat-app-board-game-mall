package com.yznu.projectykj.service;

import com.yznu.projectykj.entity.Orderinfo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author ykj
 * @since 2022-05-10
 */
public interface IOrderinfoService extends IService<Orderinfo> {

    List<Orderinfo> listOrderinfoByRenter(Integer renter);
}
