/* Copyright © 2026 nPYO · SPDX-License-Identifier: 0BSD */
"use strict";
const filter=document.querySelector("#manual-search"),clear=document.querySelector("#clear-search"),count=document.querySelector("#search-count");
function search(){const q=filter.value.normalize("NFKC").toLocaleLowerCase().trim(),words=q.split(/\s+/).filter(Boolean);let shown=0;document.querySelectorAll(".goal-group .card").forEach(c=>{const ok=words.every(w=>c.dataset.search.includes(w));c.hidden=!ok;if(ok)shown++});document.querySelectorAll(".goal-group").forEach(g=>g.hidden=![...g.querySelectorAll(".card")].some(c=>!c.hidden));document.querySelectorAll(".feature-list li").forEach(c=>c.hidden=!words.every(w=>c.dataset.search.includes(w)));count.textContent=q?shown+" 件が見つかりました":"全機能を表示しています";document.querySelector("#no-results").hidden=shown!==0}
if(filter){filter.addEventListener("input",search);clear.addEventListener("click",()=>{filter.value="";search();filter.focus()});search()}
const box=document.querySelector("#image-viewer");let returnTo=null;
if(box){
 const img=box.querySelector("img"),scale=box.querySelector(".viewer-scale"),scroll=box.querySelector(".viewer-scroll");
 const caption=box.querySelector("p");caption.tabIndex=0;
 function fitHeight(){box.style.setProperty("--viewer-fit-height",Math.max(1,scroll.clientHeight-2)+"px");}
 new ResizeObserver(fitHeight).observe(scroll);
 function setScale(original){box.classList.toggle("original-size",original);scale.setAttribute("aria-pressed",String(original));scale.textContent=original?"画面に合わせる":"原寸（100%）";scroll.scrollTop=0;scroll.scrollLeft=0;}
 document.querySelectorAll("[data-zoom]").forEach(b=>b.addEventListener("click",()=>{const source=document.getElementById(b.dataset.zoom);returnTo=b;img.src=source.src;img.alt=source.alt;img.parentElement.querySelectorAll("svg").forEach(x=>x.remove());const overlay=source.parentElement.querySelector(".click-targets");if(overlay)img.parentElement.append(overlay.cloneNode(true));box.querySelector("p").textContent=source.alt;setScale(false);box.showModal();fitHeight();scale.focus();}));
 scale.addEventListener("click",()=>setScale(!box.classList.contains("original-size")));
 box.querySelector(".viewer-close").addEventListener("click",()=>box.close());
 box.addEventListener("click",e=>{if(e.target===box){const r=box.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)box.close();}});
 box.addEventListener("close",()=>{img.removeAttribute("src");img.parentElement.querySelectorAll("svg").forEach(x=>x.remove());setScale(false);if(returnTo)returnTo.focus();});
}
