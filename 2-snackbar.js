import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",o=>{o.preventDefault();const t=Number(s.elements.delay.value),m=s.elements.state.value;new Promise((e,n)=>{setTimeout(()=>{m==="fulfilled"?e(t):n(t)},t)}).then(e=>{i.success({icon:"",title:"✅ Fulfilled",message:`Promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({icon:"",title:"❌ Rejected",message:`Promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
