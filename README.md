
## 需要注意的点
1. 导航栏样式 关于 B__E--M 
   class="docker__item"
   class="docker__item--active"

   docker__item 和 docker__item--active 是两个不同的类
2. 插槽样式问题 
   - !!! 父组件 slot 传递到组件中只有原始样式，在子组件中无法修改。
   - 既然子组件中无法修改，我们可以在父组件中进行修改。或者传递的时候直接连 style 一起传递过去
   ```scss
   .icon {
    font-size: .2rem;
   }

   ```
   ```html
   <template #left>
    <i class="" style="font-size: .2rem;"/>
   </template>
   ```
   