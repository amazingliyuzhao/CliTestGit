<template>
  <div>
    <ul>
      <router-link to='/home' as='a'>首页</router-link>
      <router-link to='/mycomponent'>ui组件</router-link>
      <router-link to='/testelement'>测试element</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>