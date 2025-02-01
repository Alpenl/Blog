<template></template>
<script setup lang="ts">
import { useRouter} from "vitepress";
import { createSideBarZH } from "../utils/createSideBar";

const router = useRouter();

const sideBar = createSideBarZH();
const firstItemLink = sideBar['/notes/'][0].items[0].link;

router.go(firstItemLink);
</script>
<style scoped></style>
