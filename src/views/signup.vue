<template>
   <div class="container col-lg-4">
        <h1>Welcome To Miss Mamii Blog</h1>
        <h3>Please Create A Post</h3>

        <form  @submit.prevent="onSubmit">
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

        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
              
   </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'signup',
    data(){
        return{
            userData:{
                category:" ",
                author: " ",
                date: " ",
                time: " ",
                topic: " ",
                content: " "

               
                
            },
            
        }
    },
    methods: {
        onSubmit(){
            axios.post("https://mercy-blog-df28b.firebaseio.com/users.json",this.userData)
             .then(function(res){
                console.log(res)
             }).catch(function(error){
                 console.log(error)
             })
             this.userData=" ";
        }
    }
}
</script>
