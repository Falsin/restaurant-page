(()=>{const e=document.querySelector("body"),t=h(e,"header"),i=h(t,"div"),o=h(i,"div");i.classList.add("container"),o.id="logo",o.textContent="Good Food";const s=h(i,"nav");h(s,"img").src="images/nav.svg";const d=h(e,"div");d.id="slideBar";let c=[],n=[],a=["images/meat.jpg","images/fish.jpg","images/chicken.jpg","images/fourthFood.jpg","images/fifthFood.jpg","images/sixthFood.jpg","images/seventhFood.jpeg","images/eighthFood.jpg"];const g=h(d,"div");g.id="slide";const r=h(g,"img");r.src="images/meat.jpg";const m=h(g,"div");m.id="labels";for(let e=0;e<8;e++)c.push(h(m,"input")),c[e].type="radio",c[e].setAttribute("name","slide"),c[e].id=`${e}`,0==e&&c[e].setAttribute("checked","checked");for(let e=0;e<8;e++)n.push(h(m,"label")),n[e].setAttribute("for",`${e}`);function h(e,t){let i=document.createElement(t);return e.appendChild(i),i}c.forEach(((e,t)=>{e.addEventListener("change",(()=>{1==e.checked&&(r.src=`${a[t]}`)}))})),function(e){let t=setTimeout(function e(i){r.src=`${a[i]}`,c[i].checked=!0,i=7==i?0:++i,t=setTimeout((()=>{e(i)}),4e3)}.bind(this,0))}(),h(e,"footer")})();