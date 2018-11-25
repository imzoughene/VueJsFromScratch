new Vue({
    "el":"#app",
    "data":{
        "title":"developer",
        "diplome":"technicien",
        "myhtml":"<p><b>I'm bold tag </b></p>",
        "dynamicId":"myTestId",
        "myvarClass":"text-color",
        "x":45,
        "y":21
    },
    "methods":{
      "multi":function(){
        return this.x * this.y;
      }
    }
});
new Vue({
    "el":"#cat",
    "data":{
        "name":"my cat"
    }
});
