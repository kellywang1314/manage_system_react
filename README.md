# manage_system_react

## 问题记录
  1. 项目使用parcel打包到docs之后，使用GitHub Pages进行发布时，页面空白并且没有任何报错，鼠标移动到入口index.html引用的js文件，此时所展示
     的完整js文件路径也是存在的？？？？
     进过查找发现是react-router中（browserHistory,hashHistory）导致的，参考：https://blog.csdn.net/Sophie_U/article/details/80006723
