
let name1 = document.querySelector(".name")
let number = document.querySelector(".number")
let submit= document.querySelector(".one")
let update= document.querySelector(".two")
let error1= document.querySelector(".error1")
let error2= document.querySelector(".error2")
let show = document.querySelector(".show")
let ul = document.querySelector(".show ul")

let arr=[]

let updateIndex;

submit.addEventListener("click", function(){
   ul.innerHTML = ""
  
    nameValue = name1.value
    numberValue = number.value


    if(nameValue==""){
        error1.innerHTML = "Plese Enter Your Name"
        error1.style.color = "red"
    }else{
        error1.innerHTML = ""
    }
    if(numberValue==""){
        error2.innerHTML = "Plese Enter Your Number"
        error2.style.color = "red"
    }else{
        error2.innerHTML = ""
    }
    //for loop
        // for(i = 0; i<arr.length; i++){
        //      ul.innerHTML += `<li> ${arr[i].nameValue}-------${arr[i].numberValue} <button>edit</button> <button>delet</button>
        //         </li><br/>`
        // }
       
        // ES6 Method
    if(!nameValue =="" && !numberValue == ""){
        arr.push({
            nameValue,
            numberValue
        })
        display()
        name1.value = ""
        number.value = ""
    }

    
    
})

function display(){
    ul.innerHTML = ""
    arr.map((item, index)=>{
        ul.innerHTML += `<li> ${item.nameValue}-------${item.numberValue} <button class ="edit">Edit</button> <button class ="delet">Delete</button> </li><br/>`

        let dltbtn = document.querySelectorAll(".delet")
        let dltbtnArr = Array.from(dltbtn)

        let editbtn = document.querySelectorAll(".edit")
        let editbtnArr = Array.from(editbtn)

        dltbtnArr.map((singlebtn, dltindex)=>{
            singlebtn.addEventListener("click", ()=>{
                arr.splice(dltindex, 1)
                display()
            })
        })

        editbtnArr.map((singlebtn, editindex)=>{
            singlebtn.addEventListener("click", ()=>{
                updateIndex = editindex
                name1.value = arr[editindex].nameValue
                number.value = arr[editindex].numberValue,
                update.style.display = "inline-block"
                submit.style.display = "none"

                display()
            })
        })

    })

}

update.addEventListener("click", ()=>{
    arr [updateIndex] = {
        nameValue: name1.value,
        numberValue: number.value
    }
    display()
    name1.value = ""
    number.value = ""
    update.style.display = "none"
    submit.style.display = "inline-block"
})

