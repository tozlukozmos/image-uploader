<script setup>
import { ref } from 'vue';

const props = defineProps({
    url: String,
    image: File,
});

const isCopied = ref(false);
const reader = new FileReader();

reader.readAsDataURL(props.image);
reader.onloadend = () => {
    document.getElementById('result').style.backgroundImage = "url('" + reader.result + "')";
}
const copy = () => {
    const url = document.getElementById('url');
    url.select();
    url.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(url.value);
    isCopied.value = true;
}
</script>

<template>
    <section class="container">
        <i class="bi bi-check-circle" style="color: var(--success); font-size: 32px;"></i>
        <h1 class="title">Uploaded Successfully!</h1>
        <section class="result" id="result"></section>
        <section class="url-container">
            <input type="text" name="url" id="url" :value="url">
            <button class="button-primary" @click="copy">{{isCopied ? 'Copied' : 'Copy'}}</button>
        </section>
    </section>
</template>

<style scoped>
.container {
    width: 300px;
    padding: 24px;
    box-shadow: 0px 0px 8px var(--grey40);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 500;
}

.result {
    margin-top: 24px;
    width: 100%;
    aspect-ratio: 3/2;
    border: 1.4px solid var(--grey30);
    border-radius: 4px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.url-container {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#url {
    width: 100%;
    margin-right: 8px;
    padding: 8px;
    border-radius: 4px;
    color: var(--primary);
    border: 1.4px solid var(--grey30);
}

.button-primary {
    user-select: none;
}
</style>