function e(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]'),u=parseInt(n.value),l=parseInt(o.value);!function(t,n,o){let i=n;for(let n=1;n<=t;n++)e(n,i).then((({position:e,delay:t})=>{console.log(` ✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(` ❌ Rejected promise ${e} in ${t}ms `)})),i+=o}(parseInt(i.value),u,l)}));
//# sourceMappingURL=03-promises.56c326f4.js.map
