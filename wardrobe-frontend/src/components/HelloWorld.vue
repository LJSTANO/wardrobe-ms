<script setup>
import { ref, onMounted } from 'vue';
import api from '@/api';

const message = ref('');

onMounted(async () => {
    try {
        const response = await api.get('/test'); // Call API
        message.value = response.data.message;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <div>
        <h1>API Response:</h1>
        <p>{{ message }}</p>
    </div>
</template>
