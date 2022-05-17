document.querySelector("#form").addEventListener("submit",addProduct)

    function soldStatus(){
        if(document.querySelector("#sold").checked){
            return "True"
        }
        else{
           return "False"
        }
    }
     
    function Productobj(name,cat,img,pri,gen,sold){
        this.name=name;
        this.cat=cat;
        this.img=img;
        this.pri=pri;
        this.gen=gen;
        this.sold=sold;

    }


 
    var database=JSON.parse(localStorage.getItem("Products")) || [];

    function addProduct(){
        event.preventDefault()
        
        
              let pname=form.name.value;
              let pcat=form.category.value;
              let pimage=form.image.value;
              let pprice=form.price.value;
              let pgender=form.gender.value;
              
              let psold=soldStatus()
            
              let pack=new Productobj(pname,pcat,pimage,pprice,pgender,psold)
              database.push(pack)
              console.log(database)

              localStorage.setItem("Products",JSON.stringify(database))

    }