<script setup>
import axios from 'axios';
const props = defineProps({
    id: Number,
    author: String,
    content: String,
    likes: Number
})

const emit = defineEmits(['liked'])

const likeComment = () => {
    emit('liked', props.id)
}
</script>

<template>
    <section class="m-5 bg-gray-100 w-max p-5 rounded-2xl">
        <div>
            <p class="text-2xl font-bold">Author: <span class="font-normal">{{ author }}</span></p>
            <p class="text-xl font-thin">{{ content }}</p>
        </div>
        <div class="flex justify-end items-end">
            {{ likes }} 
            <span>
                <a href="#" @click.prevent="likeComment">❤️</a>
            </span>
        </div>
    </section>
</template>