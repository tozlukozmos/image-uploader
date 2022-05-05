<script setup>
import { ref } from 'vue';
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import imageRef from './plugins/firebase';

const step = ref(0);
const errorMessage = ref('');
const resultUrl = ref('');
const resultImage = ref(null);

const uploadImage = (image) => {
    const uploadTask = uploadBytesResumable(imageRef, image);
    uploadTask.on('state_changed', (snapshot) => {
        step.value = 1;
    }, (error) => {
        step.value = 0;
        switch (error.code) {
            case 'storage/unauthorized':
                errorMessage.value = "User doesn't have permission to access the object";
                break;
            case 'storage/canceled':
                errorMessage.value = "User canceled the upload";
                break;
            case 'storage/unknown':
                errorMessage.value = "Unknown error occurred";
                break;
        }
    }, () => {
        step.value = 2;
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resultUrl.value = downloadURL;
        });
        resultImage.value = image;
    })
}
</script>

<template>
    <app-alert v-if="errorMessage.length > 0" type="danger" :message="errorMessage"></app-alert>
    <app-upload-container v-if="step === 0" :upload="uploadImage"></app-upload-container>
    <app-progress-bar v-else-if="step === 1"></app-progress-bar>
    <app-result-container v-else :url="resultUrl" :image="resultImage"></app-result-container>
</template>

<style>
#app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
    justify-content: center;
}
</style>
