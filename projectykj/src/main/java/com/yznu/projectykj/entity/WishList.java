package com.yznu.projectykj.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author ykj
 * @since 2022-05-10
 */
@TableName("wish_list")
public class WishList implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer userId;

    private Integer gid;


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    @Override
    public String toString() {
        return "WishList{" +
        "userId=" + userId +
        ", gid=" + gid +
        "}";
    }
}
