# BPM
### 基于angularJS 1.x 的业务流程管理项目 
mvvm 架构 
- 配置生成表格，查询，分页，统计等，
- 表单验证指令
- 资源上传指令 图片（单个，多个），其他资源（APK，excel等）
- 路由配置指令


##### 主要的 directive 1:hjm-grid 能够提高列表的开发效率 只需提供 column 和 config 即可快速渲染一个grid
##### 公共组件
    hjm-grid, grids
    hjm-form, formule
    nav-top, 上边内容
    side-left, 左边菜单
    community,
    show_image,
    select_city,
    select_boards, 负责人管理中 选择板块
    show_str, 分割逗号隔开的字符串展示
    common_form, 公用表单更新,添加  menu 使用
    common_list, 公用表单列表
    bindHtmlCompile, 编译带绑定的 bindHtmlCompile
    baidumap, 百度地图绑定
    tmplmodal_panel_tmpl,
##### 业务列表相关的组件
    productlist, 商品规则
    groupbuylist, 拼团规则
    orderlist, 订单规则
    deliverieslist, 配送规则
    bannerlist, 配送规则
    userlist, 用户规则
    smslist, 短信群发规则
    accountlist,账户 权限  菜单 规则
    exchangecodelist,账户 权限  菜单 规则

