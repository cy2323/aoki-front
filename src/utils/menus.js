import { getRequest } from "./api";

// 初始化菜单
export const initMenu = (router,store)=>{
    // 初始化前需要判断一下Vuex中是否有菜单数据
    if(store.state.routes.length>0){
        return;
    }

   getRequest('/system/config/menu').then(data=>{
       if(data){
           // 获取格式化好的Routers
           let fmtRoutes = formatRoutes(data);
           // 添加到路由
           router.addRoutes(fmtRoutes);
           // 将数据存入Vuex
           store.commit('initRoutes',fmtRoutes);
       }
   }) 
}

export const formatRoutes = (routes)=>{
    let fmtRoutes = [];
    routes.forEach(router=>{
        let{
            path,
            component,
            name,
            iconCls,
            children,
        } = router;
        if(children && children instanceof Array){
            // 递归实现子路由的加载
            children = formatRoutes(children);
        }
        let fmRouter = {
            path:path,
            name:name,
            iconCls:iconCls,
            children:children,
            component(resolve){
                require(['../views/'+component+'.vue'],resolve);
            }
        }
        fmtRoutes.push(fmRouter);
    });

    return fmtRoutes;

}