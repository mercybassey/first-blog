<template>
  <div id="dashboard">
      <div class="container plan">
          <h1>Updates</h1><br><br>
               <div>

                   <div >
                        <div >
                           
                            <ul v-for="(blog, index) in blogs" :key="index">
                                <div class="">
                                    <div v-if="display" class="card card shadow" >
                                        <div class="card-body">
                                            <li class="author"><h4>CATEGORY : {{blog.category}}</h4></li><br>
                                            <li class="author"> {{blog.author}}</li><br>
                                            <li class="author">{{blog.date}}</li><br>
                                            <li class="author">{{blog.time}}</li><br>
                                            <li class="author">{{blog.topic}}</li><br>
                                            <li class="foot"> {{blog.content}}</li><br>
                                            <button class="btn btn-danger" @click="remove(blog.id)">Delete</button>
                                            <button class="mat btn btn-info" @click="editPost(blog)">Edit</button>
                                        </div>
                                        
                                    
                                    </div>
                                
                                
                                    <div v-else>

                                         <form  @submit.prevent>
                                        <div class="form-group">
                                            <label for="Category">Category</label>
                                            <select class="form-control" v-model="userData.category">
                                                <option>Celebrity Gist</option>
                                                <option>Football</option>
                                                <option>Lifestyle</option>
                                                <option>Local News</option>
                                                <option>International News</option>



                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="author">Author</label>
                                            <input type="text" class="form-control" id="author" v-model="userData.author" >
                                        </div>
                                        <div class="form-group">
                                            <label  for="date">Date</label>
                                            <input type="text" class="form-control" id="date" v-model="userData.date">
                                        
                                        </div>
                                        <div class="form-group">
                                            <label class="time" for="">Time</label>
                                            <input type="text" class="form-control" id="time" v-model="userData.time">
                                        
                                        </div>
                                        <div class="form-group">
                                            <label class="time" for="">Topic</label>
                                            <input type="text" class="form-control" id="time" v-model="userData.topic">
                                        
                                        </div>


                                        <div class="form-group">
                                            Add Content
                                            <textarea placeholder="Content" class="form-control" cols= "30" rows="10" v-model="userData.content">

                                            </textarea>
                                        </div>

                                        <button @click="updatePost(blog.id)" class="btn btn-primary">Update</button>
                                    </form>
                                    </div>
                                   
                                </div>
                            </ul>
                                </div>
                            
                        </div>
                    </div>
                  
               
               </div>
                
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            blogs: [],
            userData:{
                category:" ",
                author: " ",
                date: " ",
                time: " ",
                topic: " ",
                content: " "

               
                
            },
            display: true
        }
    },
    methods:{
        reload(){
            var timeout = setTimeout("location.reload(true);", 6000);
            function resetTimeout(){
                clearTimeout(timeout);
                timeout = setTimeout("location.reload(true", 6000);
            }
        },
        remove(i){
            axios.delete(`https://mercy-blog-df28b.firebaseio.com/users/${i}.json`).then(function(res){
                console.log(res)
            }, function(error){
                console.log(error)
            })
            this.reload()
        },
        editPost(id){
            this.display = false;
            this.userData =id;
            this.postUpdate = this.blogs.indexOf(id);
        },
        updatePost(i){
            console.log(i)
            axios.put(`https://mercy-blog-df28b.firebaseio.com/users/${i}.json`, this.userData).then(function(res){
                console.log(res)
            }, function(error){
                console.log(error)
            })
            this.reload()
        }

    },
    name:'dashboard',
    created(){
        axios.get('https://mercy-blog-df28b.firebaseio.com/users.json')
         .then(res => {
             console.log(res)
             const data  = res.data;
             let users = [];
             for(let key in data){
                 const user = data[key];
                 user.id = key;
                 users.push(user)
             }
            //  console.log(this.blogs)
            //  console.log(users);
             this.blogs = users
             console.log(this.blogs)
         })
         .catch(error => console.log(error))
                
    }
}
</script>
<style scoped>
.author{
    font-weight: bolder !important;
}
.container{
    height: 100% !important;
    width:100% !important;
    
    
}
ul{
    list-style-type: none;
}
.v{
    background-color:pink !important;
    width: 100%;
    height: 100%;
    padding: 40px;
}
.foot{
    font-family: cursive;
}
.mat{
    margin:10px;
}



</style>
