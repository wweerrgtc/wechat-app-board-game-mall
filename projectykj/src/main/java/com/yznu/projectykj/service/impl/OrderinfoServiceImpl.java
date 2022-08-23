package com.yznu.projectykj.service.impl;

import com.yznu.projectykj.entity.Orderinfo;
import com.yznu.projectykj.mapper.OrderinfoMapper;
import com.yznu.projectykj.service.IOrderinfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author ykj
 * @since 2022-05-10
 */
@Service
public class OrderinfoServiceImpl extends ServiceImpl<OrderinfoMapper, Orderinfo> implements IOrderinfoService {

    @Override
    public List<Orderinfo> listOrderinfoByRenter(Integer renter) {
        return baseMapper.listOrderinfoByRenter(renter);
    }
}
