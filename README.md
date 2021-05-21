
## 需要注意的点
1. 导航栏样式 关于 B__E--M 
   class="docker__item"
   class="docker__item--active"

   docker__item 和 docker__item--active 是两个不同的类
   - docker__item 和 docker__item__title 也是两个不同的类
   - 不同于 styled-components 中 &.active，BEM 写法，每一个都是不同的类名
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
3. axios 获取到数据之后
   1. 需要修改数据，数据改变页面也要发生改变
   2. 所以数据必须时响应式的。ref 或者 reactive
   3. 我们使用 ref