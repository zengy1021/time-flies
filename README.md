# time-flies

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

分页查询接口：
总数据data = [
{
    背景图，作者，主题，时间，地点，状态，人气，
节点：[
{小标题，图片视频，文字内容}
              ] 
    }
]

数据编辑、新增接口：

单数据点赞人员查询接口：
Data=[
{
...用户信息
}
]

相册查询接口：
（这里带上当前登录人的信息，只查当前登录人数据）

Data= {
Sum（总数量）:100,
...分页信息，
Data：[
{
关联查询接口，
照片总数量：100+
}
]
}

相册详情查询接口：
相册详情编辑保存接口：（是否使用数据保存接口）


个人中心查询接口：
Data={
...用户信息，
头像，
名称，
性别，
所有发布单，
收藏单，
人气值，
}
奖品
