package com.yznu.projectykj.mapper;

import com.yznu.projectykj.entity.Orderinfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author ykj
 * @since 2022-05-10
 */
public interface OrderinfoMapper extends BaseMapper<Orderinfo> {


    @Select("SELECT * FROM orderinfo WHERE renter = #{renter}")
    @Results({
            @Result(column = "renter", property = "renter"),
            @Result(column = "renter", property = "goodsinfoList",
            one = @One(select = "com.yznu.projectykj.mapper.GoodsinfoMapper.selectByGid", fetchType = FetchType.EAGER))
    })
    List<Orderinfo> listOrderinfoByRenter(Integer renter);
}
