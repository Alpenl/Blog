<template>
  <Layout>
    <template #layout-top>
      <WechatQRCode ref="wechatQRCode" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { ref, onMounted } from 'vue';
import WechatQRCode from './components/WechatQRCode.vue';

const { Layout } = DefaultTheme;
const wechatQRCode = ref();

onMounted(() => {
  // 为微信图标添加点击事件
  const wechatLink = document.querySelector('a[aria-label="wechat"]');
  if (wechatLink) {
    wechatLink.addEventListener('click', (e) => {
      e.preventDefault();
      wechatQRCode.value?.showQRCode();
    });
  }
});
</script> 