<script setup>
const props = defineProps({
    type: String,
    message: String,
});
</script>

<template>
    <section :class="'alert-container ' + type" id="container">
        <i v-if="type === 'danger'" class="bi bi-x-circle" style="color: var(--danger); font-size: 22px;"></i>
        <i v-else-if="type === 'success'" class="bi bi-check-circle" style="color: var(--success); font-size: 22px;"></i>
        <i v-else-if="type === 'info'" class="bi bi-info-circle" style="color: var(--info); font-size: 22px;"></i>
        <i v-else class="bi bi-exclamation-circle" style="color: var(--warning); font-size: 22px;"></i>
        <p :class="'message-' + type">{{ message }}</p>
    </section>
</template>

<style scoped>
.alert-container {
    padding: 24px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    column-gap: 24px;
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 30;
}

.danger {
    border: 2px solid var(--danger-border);
    background-color: var(--danger-bg);
}

.success {
    border: 2px solid var(--success-border);
    background-color: var(--success-bg);
}

.info {
    border: 2px solid var(--info-border);
    background-color: var(--info-bg);
}

.warning {
    border: 2px solid var(--warning-border);
    background-color: var(--warning-bg);
}

.message-danger {
    color: var(--danger);
    font-size: 16px;
}

.message-success {
    color: var(--success);
    font-size: 16px;
}

.message-info {
    color: var(--info);
    font-size: 16px;
}

.message-warning {
    color: var(--warning);
    font-size: 16px;
}
</style>
