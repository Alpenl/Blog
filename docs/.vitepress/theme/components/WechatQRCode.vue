<template>
  <!-- 微信二维码容器组件 -->
  <div class="wechat-qrcode-container">
    <!-- 二维码弹出层，仅在 show 为 true 时显示 -->
    <div class="qrcode-popup" v-if="show" ref="popup">
      <div class="qrcode-content">
        <img :src="qrcodeUrl" alt="WeChat QR Code" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";

// 二维码图片的 URL
const qrcodeUrl = 'https://20021217.xyz/Alpen.wx.jpg';
// 控制弹出层显示状态的响应式变量
const show = ref(false);
// 弹出层 DOM 元素的引用
const popup = ref<HTMLElement | null>(null);

// 处理微信图标点击事件
const handleWechatClick = async (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  // 查找最近的带有 aria-label="wechat" 的 <a> 标签
  const wechatLink = target.closest('a[aria-label="wechat"]');
  
  if (wechatLink) {
    e.preventDefault();
    show.value = true;
    
    // 等待 DOM 更新完成后再计算位置
    await nextTick();
    
    if (popup.value) {
      // 获取微信图标的位置信息
      const rect = wechatLink.getBoundingClientRect();
      // 计算图标的中心位置
      const iconCenter = rect.left + rect.width / 2;
      // 设置弹出层位置，使其显示在图标下方
      popup.value.style.top = `${rect.bottom + window.scrollY + 8}px`;
      popup.value.style.left = `${iconCenter - 140}px`;
    }
  }
};

// 处理点击外部区域关闭弹出层
const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  // 如果点击的不是弹出层内部和微信图标，则关闭弹出层
  if (show.value && !target.closest('.qrcode-popup') && !target.closest('a[aria-label="wechat"]')) {
    show.value = false;
  }
};

// 组件挂载时添加事件监听器
onMounted(() => {
  document.addEventListener('click', handleWechatClick);
  document.addEventListener('click', handleClickOutside);
});

// 组件卸载时移除事件监听器
onUnmounted(() => {
  document.removeEventListener('click', handleWechatClick);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* 容器样式，使用相对定位 */
.wechat-qrcode-container {
  position: relative;
}

/* 弹出层样式 */
.qrcode-popup {
  position: fixed;
  z-index: 100;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 280px;
}

/* 弹出层箭头样式 */
.qrcode-popup::before {
  content: '';
  position: absolute;
  top: -5px;
  right: 140px;
  transform: rotate(45deg);
  width: 10px;
  height: 10px;
  background: var(--vp-c-bg);
  border-left: 1px solid var(--vp-c-divider);
  border-top: 1px solid var(--vp-c-divider);
}

/* 二维码内容容器样式 */
.qrcode-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 二维码图片样式 */
.qrcode-content img {
  width: auto;
  height: auto;
  max-width: 100%;
  border-radius: 4px;
}
</style> 