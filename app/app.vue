<template>
    <NuxtPage />
</template>

<script setup>
const appConfig = useAppConfig();

console.log('appConfig', appConfig);

// async function submit () {
//   const { body } = await $fetch('/api/submit', {
//     method: 'post',
//     body: { test: 123 },
//   })
// }
</script>
