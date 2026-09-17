// v2 lesson checker: structure + "examples only use taught words"
const files=process.argv.slice(2);global.window={};for(const f of files)require(require("path").resolve(process.cwd(),f));
const L=window.LESSONS;const NAMES=new Set(["ana","juan","li","wei","maría","pedro","marta","carlos","tom","yuki","josé","cancún","shanghái","tokio","madrid","pekín","dios","ud"]);
const strip=s=>s.toLowerCase().replace(/[¿?¡!.,:;«»—…()\[\]"]/g," ").replace(/\s+/g," ").trim();
function forms(entry){ // vocab entry -> set of tokens it teaches
  let e=entry.replace(/[¿?¡!.,]/g,"");const out=new Set();
  const parts=e.split(/\s*\/\s*/);
  if(parts.length===2&&/^(a|as|o|os|la|las)$/i.test(parts[1])){const base=parts[0];out.add(base);const suf=parts[1];
    if(suf==="a"||suf==="as"){out.add(base.replace(/o$/,"a"));if(!/o$/.test(base))out.add(base+"a");}
    if(suf==="as"){out.add(base.replace(/os$/,"as"))}
  } else parts.forEach(p=>out.add(p));
  const res=new Set();for(const p of out)strip(p).split(" ").forEach(t=>t&&res.add(t));return res;
}
const order=Object.keys(L).sort((a,b)=>{const [wa,da]=a.match(/\d+/g).map(Number),[wb,db]=b.match(/\d+/g).map(Number);return wa-wb||da-db});
let taught=new Set(["a","e","i","o","u","be","ce","de","efe","ge","hache","jota","ka","ele","eme","ene","eñe","pe","cu","erre","ese","te","uve","doble","equis","griega","zeta"]);let bad=0;
const known=t=>{if(taught.has(t))return true;if(t.endsWith("es")&&taught.has(t.slice(0,-2)))return true;if(t.endsWith("s")&&taught.has(t.slice(0,-1)))return true;if(taught.has(t.replace(/a$/,"o")))return true;if(taught.has(t.replace(/as$/,"o")))return true;return false};
for(const id of order){const l=L[id];const cur=new Set();l.vocab.forEach(v=>forms(v[0]).forEach(t=>cur.add(t)));
  const say=m=>{bad++;console.log(id+": "+m)};
  if(l.stub){cur.forEach(t=>taught.add(t));continue}
  if(!(id==="w1d1"||l.recap.length===3))say("recap count "+l.recap.length);
  if(l.steps.length<2||l.steps.length>3)say("steps "+l.steps.length);
  l.steps.forEach((s,i)=>{if(!s.check||s.check.length!==2)say("step "+(i+1)+" checks != 2");(s.check||[]).forEach(c=>{if(c.opts&&!c.opts.includes(c.a))say("check bad opt: "+c.q)})});
  if(l.examples.length<5||l.examples.length>6)say("examples "+l.examples.length);
  l.examples.forEach(e=>{if(e.length<3||!e[2])say("no breakdown: "+e[0])});
  if(l.vocab.length<5||l.vocab.length>13)say("vocab "+l.vocab.length);
  if(l.exercises.length!==6)say("exercises "+l.exercises.length);
  l.exercises.forEach(x=>{if(x.opts&&!x.opts.includes(x.a))say("exercise bad opt: "+x.q)});
  // examples use only taught + current words
  const exText=l.examples.map(e=>e[0]).join(" ");
  l.examples.forEach(e=>{const sents=e[0].split(/[.?!—]\s*/);sents.forEach(sent=>{const raw=sent.trim().replace(/^[¿¡«]+/,"");if(!raw)return;const toks=raw.split(/\s+/);toks.forEach((tk,i)=>{const t=strip(tk);if(!t)return;const cap=/^[A-ZÁÉÍÓÚÑ]/.test(tk.replace(/^[¿¡«]+/,""));if(cap&&(i>0||NAMES.has(t)))return;if(t.length===1&&/[aeiou]/.test(t))return;if(known(t)||cur.has(t)||(t.endsWith("s")&&cur.has(t.slice(0,-1)))||(t.endsWith("es")&&cur.has(t.slice(0,-2))))return;say("untaught word «"+t+"» in: "+e[0])})})});
  // vocab must appear in examples
  l.vocab.forEach(v=>{if(/原形/.test(v[1]))return;const fs=[...forms(v[0])];const ex=strip(exText);if(!fs.some(t=>(" "+ex+" ").includes(" "+t+" ")||(" "+ex+" ").includes(" "+t+"s ")))say("vocab not in examples: "+v[0])});
  cur.forEach(t=>taught.add(t));
}
console.log(order.length+" lessons, "+bad+" problems, taught tokens: "+taught.size);
