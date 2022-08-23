package com.yznu.projectykj.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 
 * </p>
 *
 * @author ykj
 * @since 2022-05-10
 */
public class Orderinfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "order_id", type = IdType.AUTO)
    private Integer orderId;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime completeTime;

    private Integer owner;

    private Integer renter;

    private Integer gid;

    private Integer status;

    @TableField(exist = false)
    private Goodsinfo goodsinfoList;


    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getCompleteTime() {
        return completeTime;
    }

    public void setCompleteTime(LocalDateTime completeTime) {
        this.completeTime = completeTime;
    }

    public Integer getOwner() {
        return owner;
    }

    public void setOwner(Integer owner) {
        this.owner = owner;
    }

    public Integer getRenter() {
        return renter;
    }

    public void setRenter(Integer renter) {
        this.renter = renter;
    }

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Goodsinfo getGoodsinfoList() {
        return goodsinfoList;
    }

    public void setGoodsinfoList(Goodsinfo goodsinfoList) {
        this.goodsinfoList = goodsinfoList;
    }

    @Override
    public String toString() {
        return "Orderinfo{" +
                "orderId=" + orderId +
                ", createTime=" + createTime +
                ", completeTime=" + completeTime +
                ", owner=" + owner +
                ", renter=" + renter +
                ", gid=" + gid +
                ", status=" + status +
                '}';
    }
}
