import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r=document.querySelector(".feedback-form"),a={email:"",message:""},t="feedback-form-state";r.addEventListener("input",e=>{(e.target.name==="email"||e.target.name==="message")&&(a[e.target.name]=e.target.value,localStorage.setItem(t,JSON.stringify(a)))});window.addEventListener("load",()=>{const e=localStorage.getItem(t);if(e){const m=JSON.parse(e);document.querySelector('input[name="email"]').value=m.email,document.querySelector('textarea[name="message"]').value=m.message}});r.addEventListener("submit",e=>{e.preventDefault(),a.email.trim()===""||a.message.trim()===""?alert("Fill please all fields"):(console.log(a),localStorage.removeItem(t),a.email="",a.message="",document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value="")});
//# sourceMappingURL=2-form.js.map
