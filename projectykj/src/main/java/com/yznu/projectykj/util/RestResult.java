package com.yznu.projectykj.util;

import java.util.List;

public class RestResult<T> {

    private Integer code;
    private String msg;
    private T obj;
    private List<T> data;
    private Long count;

    public RestResult() {
    }

    public RestResult(Integer code, List<T> list) {
        this.code = code;
        this.data = list;
    }

    public RestResult(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public RestResult(Integer code, T obj) {
        this.code = code;
        this.obj = obj;
    }

    public static <T> RestResult<T> success(List<T> list){
        return new RestResult<>(200, list);
    }

    public static <T> RestResult<T> success(List<T> list, long count){
        RestResult<T> restResult = new RestResult<>(200, list);
        restResult.setCount(count);
        return restResult;
    }

    public static <T> RestResult<T> success(T obj){
        return new RestResult<T>(200, obj);
    }

    public static <T> RestResult<T> success(String msg){
        return new RestResult<T>(200, msg);
    }

    public static <T> RestResult<T> error(String msg){
        return new RestResult<T>(1, msg);
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getObj() {
        return obj;
    }

    public void setObj(T obj) {
        this.obj = obj;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}