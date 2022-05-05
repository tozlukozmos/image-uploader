<template>
    <section class="app-progress-bar-container">
        <h1 class="app-progress-bar-container-title">Uploading...</h1>
        <div class="app-progress-bar"></div>
    </section>
</template>

<style>
.app-progress-bar-container {
    width: 300px;
    padding: 24px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.app-progress-bar,
.app-progress-bar:before {
    width: 100%;
    height: 4px;
    border-radius: 4px;
}

.app-progress-bar {
    margin-top: 24px;
    background-color: var(--grey30);
    display: -webkit-flex;
    display: flex;
}

.app-progress-bar:before {
    background-color: var(--primary);
    content: '';
    -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@-webkit-keyframes running-progress {
    0% {
        margin-left: 0px;
        margin-right: 100%;
    }

    50% {
        margin-left: 25%;
        margin-right: 0%;
    }

    100% {
        margin-left: 100%;
        margin-right: 0;
    }
}

@keyframes running-progress {
    0% {
        margin-left: 0px;
        margin-right: 100%;
    }

    50% {
        margin-left: 25%;
        margin-right: 0%;
    }

    100% {
        margin-left: 100%;
        margin-right: 0;
    }
}
</style>
