<script setup>
import Post from './templates/post.vue';
import Header from './templates/header.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios';

const posts = ref([])

// Завантажуємо пости при монтуванні компонента
onMounted(async function() {
    try {
        const response = await axios.get('/api/get_comments')
        posts.value = response.data
    } catch(error) {
        console.log('Error: ', error)
    }
})

async function handleLike(postId) {
    try {
        const response = await axios.post('/api/like_comment', {postId: postId})
        
        const post = posts.value.find(p => p.id === postId)
        if (post) {
            post.likes = response.data.post.likes
        }
    } catch(error) {
        console.error('Помилка при лайканні:', error)
    }
}
</script>

<template>
    <Header/>
<div>
    <div class="flex-wrap flex-col gap-5">
        <Post 
            v-for="post in posts" 
            :key="post.id"
            :id="post.id"
            :author="post.author" 
            :content="post.content" 
            :likes="post.likes"
            @liked="handleLike"
        />
    </div>
</div>

    
</template>