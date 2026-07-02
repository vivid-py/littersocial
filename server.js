const express = require('express')
const app = express()
app.use(express.json())


const posts = [
    {   
        id: 0,
        author: 'vivid',
        content: 'zdravo, kako si?',
        likes: 0,
    },
        {   
        id: 1,
        author: 'vivid',
        content: 'zdravo, kako si?',
        likes: 0,
    },
        {   
        id: 2,
        author: 'vivid',
        content: 'zdravo, kako si?',
        likes: 0,
    },
]
const PORT = 3000
app.get("/api/get_comments", function(req,res){
    res.json(posts)
})
app.post("/api/like_comment", function(req, res) {
    const {postId} = req.body
    const post = posts.find(p => p.id === postId)
    post.likes += 1
        res.json({ 
        message: 'Like added successfully',
        post: post 
    })
})
app.post("/api/add_post", function(req, res) {
    const post_content = req.body.content || "my cool post"; 
    const author = req.body.author || 'vivid';
    const lastPost = posts[posts.length - 1]; 
    
    const newId = lastPost ? lastPost.id + 1 : 0; 

    const newPost = {
       id: newId,
       author: author,
       content: post_content,
       likes: 0
    };

    posts.push(newPost);

    res.status(201).json({ 
        message: "Post successfully added", 
        post: newPost 
    });
});
app.listen(PORT, function(){
    console.log('backend running at http://localhost:3000/api')
})
