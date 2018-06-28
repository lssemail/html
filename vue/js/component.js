Vue.component('button-counter', {
    data:function(){
        return {
            count:0
        }
    },
    template:'<button v-on:click="count++">you clicked me {{count}} times</button>',
    watch:{
        count:function () {
            console.log('count updated')
        }
    }
});

Vue.component('blog-post', {
    props:['title', 'price'],
    template:'<h3>{{title}}:{{price}}</h3>'
});

Vue.component('blog-post-model', {
    props:['post'],
    template:'<h3>{{post.title}}:{{post.price}}</h3>'
});