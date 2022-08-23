package com.yznu.projectykj.mapper;

import com.yznu.projectykj.entity.Goodsinfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author ykj
 * @since 2022-05-10
 */
public interface GoodsinfoMapper extends BaseMapper<Goodsinfo> {

    @Select("SELECT * FROM goodsinfo WHERE gid = #{gid}")
    List<Goodsinfo> selectByGid(Integer gid);
}
