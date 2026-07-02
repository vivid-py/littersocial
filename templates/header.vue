<script setup>
import axios from 'axios';
async function addPost() {
    const postContent = prompt("enter the text of new post:", 'my cool and unique post');
    if (!postContent) return; 

    try {
        const response = await axios.post('/api/add_post', { 
            content: postContent 
        });
    } catch(error) {
        console.error('error adding post:', error);
    }
}
</script>

<template>
    <button @click.prevent="addPost" class="text-2xl bg-amber-400 p-3 m-3 rounded-2xl hover:scale-105 active:scale-95 transition-all">+</button>
</template>