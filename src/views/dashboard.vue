<template>
  <div id="dashboard" >
      <div class="loader" v-if="loading">Loading...
        
      </div>
      <div class="container plan" v-else >
          <h1>Updates</h1><br><br>
               <div>

                   <div >
                        <div>
                           
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
            display: true,
            loading: false
        }
    },
    methods:{
        reload(){
            this.loading = true
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
              this.loading = false
         })
         .catch(error => console.log(error))
        
                
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
            this.loading = true
            axios.put(`https://mercy-blog-df28b.firebaseio.com/users/${i}.json`, this.userData)
            .then(res=>{
                console.log(res)
               this.reload();
               this.display = !this.display
            }).catch(err=> {
                console.log(err)
            })
            
           
        }

    },
    name:'dashboard',
    created(){
       this.reload()
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
.loader {
  color: green;
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;
}
@-webkit-keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@-webkit-keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}




</style>
