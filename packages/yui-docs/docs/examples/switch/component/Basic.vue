<template>
    <y-switch v-model="value"></y-switch>
    <y-switch></y-switch>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(true);
</script>
