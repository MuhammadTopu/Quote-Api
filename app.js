const url =  "https://api.quotable.io/random";

let btn =document.querySelector(".get");
btn.addEventListener("click",async ()=>{
   let ress =await getQou();
  let p = document.querySelector(".pp");
   p.innerText = ress;

let resss = await getAuth();
   let p2=document.querySelector(".ppp");
   p2.innerText = resss;
 
})



async function getQou() {
  try {
    const config= {
      headers: {
        Accept: "application/json"
      }
    }
    let res= await axios.get(url,config);
    return res.data.content;
   
    console.log(res);
  }
   catch(er) {
    console.log("Error :",er);
   }

}
   async function getAuth() {
    try {
      const config= {
        headers: {
          Accept: "application/json"
        }
      }
      let res= await axios.get(url,config);
      return res.data.author;
     
      
    }
     catch(er) {
      console.log("Error :",er);
     }
     
   
  
}
const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

});
