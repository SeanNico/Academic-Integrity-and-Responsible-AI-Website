
/* ===== DATA: [question, [options], correctIndex] ===== */
const QUIZZES = {
    plagiarism:{title:"Plagiarism Quiz",q:[
        ["What is plagiarism?",["Using someone else's work and presenting it as your own without credit","Writing your own ideas","Reading a book","Making a study schedule"],0],
        ["Which situation is direct plagiarism?",["Citing a website","Copying a paragraph word-for-word without acknowledgment","Writing a personal reflection","Using your own notes"],1],
        ["What is self-plagiarism?",["Copying a classmate's work","Using a public website","Reusing your previously submitted work without permission or acknowledgment","Quoting an author correctly"],2],
        ["What is paraphrasing plagiarism?",["Summarizing with a citation","Using quotation marks","Writing a new idea","Changing a few words from a source without crediting the author"],3],
        ["What is accidental plagiarism?",["Unintentionally failing to give proper credit","Intentionally copying a whole paper","Creating original work","Listing all sources"],0],
        ["What is mosaic plagiarism?",["Using only one source correctly","Combining copied phrases or ideas from different sources without acknowledgment","Writing a poem","Giving credit to every author"],1],
        ["Why is plagiarism a problem?",["It makes work more creative","It improves research accuracy","It harms academic honesty and the value of a student's work","It guarantees better grades"],2],
        ["How should you present exact words from another source?",["Remove the author's name","Change the font","Use the words without citation","Use quotation marks and provide a citation"],3],
        ["Which action helps prevent plagiarism?",["Keep track of sources used during research","Ignore the source information","Copy and paste paragraphs","Submit another person's work"],0],
        ["If you change the wording of an idea found online, what should you still do?",["Claim it as your own","Credit the original creator","Delete the source","Avoid checking the information"],1]]},
        referencing:{title:"Referencing Quiz",q:[
        ["What is citation?",["Copying a complete article","Removing the author's name","Giving credit to the original author or source","Writing a title page"],2],
        ["What is referencing?",["Listing the sources used in an academic paper or project","Changing the words of an article","Creating a new source","Copying a bibliography"],0],
        ["Why is referencing important?",["To make a paper confusing","To avoid reading sources","To increase the number of pages","To avoid plagiarism and show academic honesty"],3],
        ["Which style is commonly used in education and social sciences?",["MLA","APA","Chicago","IEEE"],1],
        ["Which style is commonly used in literature, language, and humanities?",["APA","Chicago","MLA","IEEE"],2],
        ["Which style is often used in history?",["Chicago","APA","MLA","IEEE"],0],
        ["How are references arranged in APA style?",["By page number","Randomly","By publication date only","Alphabetically by the author's last name"],3],
        ["What information should be included for an online source?",["Your password","The URL","Your home address","Your account PIN"],1],
        ["What should you never do when preparing references?",["List sources used","Include available publication dates","Invent authors or create fake sources","Match references with citations"],2],
        ["What should references match in your paper?",["The citations used in the paper","The font color","The page margins","The number of paragraphs"],0]]},
        fairuse:{title:"Fair Use Quiz",q:[
        ["Which statement is supported by the website's copyright discussion?",["All online materials are free to use","Creators have rights over how their original works are copied, shared, distributed, or used","Only printed books are protected","Giving credit always means permission is unnecessary"],1],
        ["What should a student remember before using material found online?",["Everything online is public domain","Changing a color makes it free to use","Images never need acknowledgment","Not everything online is free to use without acknowledgment"],3],
        ["What is a responsible first step before using another person's creative work?",["Check its copyright or usage conditions","Remove the creator's name","Claim ownership","Upload it without checking"],0],
        ["Which is an example of an original work mentioned in the website?",["A password","A computer monitor","A photograph","A classroom chair"],2],
        ["What does copyright give creators?",["Unlimited control over other people's ideas","Certain rights over the use of their original works","Ownership of every similar idea","Permission to copy all works"],1],
        ["Which action respects a creator's work?",["Presenting it as your own","Removing its watermark","Sharing it without checking","Acknowledging the creator and following applicable use conditions"],3],
        ["Does changing the wording automatically make another person's idea yours?",["No, the original idea still belongs to its creator","Yes, always","Yes, if you use different punctuation","Yes, if it is from a website"],0],
        ["Which material is listed as an example of work protected by copyright?",["A business password","A secret recipe only","Music","A computer desk"],2],
        ["What is one purpose of intellectual property protection?",["To encourage unauthorized copying","To protect creators' rights and encourage innovation","To make creative work disappear","To prevent all new ideas"],1],
        ["What should you do when unsure whether you can reuse a work?",["Assume it is free","Remove the author's name","Copy it privately","Check the usage terms or seek permission when needed"],3]]},
        ip:{title:"Intellectual Property Quiz",q:[
        ["What is intellectual property?",["A creator's legal right to have their unique work recognized and receive proper benefit","A physical school building","A public examination","A computer accessory"],0],
        ["What Philippine law is identified as the Intellectual Property Code?",["R.A. 9003","R.A. 8293","R.A. 9165","R.A. 10175"],1],
        ["What does a patent protect?",["Brand slogans","Photographs","Inventions, products, machinery, or methods","Confidential passwords"],2],
        ["What does a trademark identify?",["A private formula","A research method","A musical composition","A product or service associated with a particular business"],3],
        ["What does copyright protect?",["Original creative works such as paintings, music, photographs, and articles","Only company logos","Only inventions","Only secret formulas"],0],
        ["What is a trade secret?",["A public logo","Confidential business information that gives a company an advantage","A registered song","A published photograph"],1],
        ["Which is an example of a trade secret from the website?",["A book cover","A registered logo","Coca-Cola's beverage formula","A public advertisement"],2],
        ["What does the symbol ® indicate?",["An unregistered service mark","A patent","A copyright symbol","A registered trademark"],3],
        ["According to the website, patents generally remain in effect for up to how long?",["20 years","5 years","10 years","50 years"],0],
        ["Which pairing is correct?",["Patent – brand logo","Trademark – brand name or logo","Copyright – confidential formula","Trade secret – photograph"],1]]},
        aiguide:{title:"AI Guidelines Quiz",q:[
        ["What is responsible AI use?",["Letting AI make every decision","Using AI without checking its output","Using AI ethically, honestly, and appropriately","Copying every AI response"],2],
        ["How should students use AI in learning?",["As a learning assistant that supports understanding","As a replacement for their own effort","To avoid learning lessons","To submit work without review"],0],
        ["Why should students verify AI-generated information?",["AI never makes mistakes","AI cannot answer questions","AI sources are always complete","AI may provide incorrect or misleading information"],3],
        ["What should students avoid sharing with AI tools?",["General learning questions","Passwords and private information","Public facts","General topic ideas"],1],
        ["What should students do with AI-generated content before submitting it?",["Submit it immediately","Hide that AI was used","Understand, review, and personalize it","Assume every detail is correct"],2],
        ["Which ability should students continue using when working with AI?",["Critical thinking and their own judgment","Blind trust","Copying without reading","Avoiding decisions"],0],
        ["What does the website say AI should not replace?",["Internet access","A search engine","A computer","A student's own knowledge, effort, and critical thinking"],3],
        ["How can students check AI-generated facts?",["Trust every answer","Use reliable websites, books, or trusted materials","Ask AI to guarantee accuracy","Remove all references"],1],
        ["Why is responsible AI use important?",["It removes the need to learn","It guarantees perfect answers","It supports critical thinking, academic honesty, transparency, and accountability","It makes citations unnecessary"],2],
        ["What is the website's key takeaway about AI?",["AI supports human learning; it does not replace human intelligence, creativity, and responsibility","AI should complete all assignments","AI is always correct","Students should never think independently"],0]]},
        aidisc:{title:"AI Disclosure Quiz",q:[
        ["What does AI disclosure mean in schoolwork?",["Deleting the AI tool","Acknowledging AI assistance when required","Keeping AI use secret","Submitting AI output as entirely your own"],1],
        ["When should students acknowledge AI assistance?",["Only when a classmate asks","Never","When required by their teacher or institution","Only after graduation"],2],
        ["Why is disclosure important?",["It promotes transparency and academic honesty","It hides the use of technology","It removes responsibility","It replaces citations"],0],
        ["What should students avoid doing with AI-generated content?",["Reviewing the information","Personalizing the response","Checking facts","Presenting it as entirely their own work"],3],
        ["Which action shows transparency?",["Pretending no AI tool was used","Acknowledging AI assistance when required","Removing all source information","Inventing an explanation"],1],
        ["What should students do after receiving AI-generated information?",["Submit it without reading","Assume it is original research","Understand, review, and personalize it","Delete their own ideas"],2],
        ["Who may set requirements for acknowledging AI assistance?",["The teacher or educational institution","An unknown website","A random online user","An advertisement"],0],
        ["Disclosure is most closely connected to which value?",["Secrecy","Carelessness","Competition","Transparency"],3],
        ["What should a student do if their teacher requires disclosure of AI use?",["Ignore the instruction","Acknowledge the AI assistance","Claim the AI output as fully original","Remove the assignment"],1],
        ["Which statement best describes honest AI disclosure?",["AI use should always be hidden","Only incorrect AI answers need disclosure","Students should be transparent about AI assistance when required","AI disclosure means sharing passwords"],2]]},
        aiacct:{title:"AI Accountability Quiz",q:[
        ["What does accountability mean when using AI?",["Taking responsibility for how AI is used and for submitted work","Blaming AI for every mistake","Letting AI decide everything","Avoiding all review"],0],
        ["Who is responsible for checking an AI-assisted assignment before submission?",["The AI tool alone","The student submitting the work","The website designer","A random classmate"],1],
        ["What should students do when AI provides a questionable answer?",["Copy it anyway","Ignore the issue","Check it using reliable sources","Invent a citation"],2],
        ["Why should students use their own judgment with AI?",["AI has no limitations","AI should control decisions","Students do not need to understand answers","AI output can be wrong or misleading"],3],
        ["Which behavior demonstrates accountability?",["Reviewing AI output and taking responsibility for the final work","Blaming the tool for copied content","Submitting without checking","Hiding all mistakes"],0],
        ["What should students protect when using AI tools?",["Their public class topic","Passwords and personal information","A general definition","A public news headline"],1],
        ["What is a responsible response to an AI-generated mistake?",["Pretend it is correct","Blame another student","Correct it after checking reliable information","Repeat it without review"],2],
        ["Which practice supports responsible decision-making?",["Depending completely on AI","Ignoring evidence","Avoiding questions","Evaluating information and using personal judgment"],3],
        ["What should AI support rather than replace?",["Human learning and responsibility","Copying","Dishonesty","Unverified information"],0],
        ["Why should students not depend completely on AI-generated answers?",["AI never gives information","Students must evaluate information and make their own decisions","AI always refuses questions","It prevents using a computer"],1]]},
        compre:{title:"Comprehensive Quiz",all:true,q:[
        ["Which action is plagiarism?",["Citing a source","Writing an original paragraph","Copying another person's work without credit","Using quotation marks with citation"],2],
        ["Which referencing style is commonly used in education and social sciences?",["APA","MLA","Chicago","IEEE"],0],
        ["What does a patent protect?",["A company slogan","A photograph","A confidential customer list","An invention"],3],
        ["What is the purpose of a trademark?",["To protect a secret formula","To identify a business's product or service","To protect a research paragraph","To list references"],1],
        ["What should students do before submitting AI-assisted work?",["Copy it immediately","Skip fact-checking","Review, understand, and personalize it","Hide all AI assistance"],2],
        ["What is AI disclosure?",["Acknowledging AI assistance when required","Deleting the AI tool","Sharing a password","Copying an AI response"],0],
        ["Which is an example of a trade secret?",["A published poem","A registered logo","A public photograph","A company's confidential formula"],3],
        ["Why should students cite sources?",["To make the assignment longer","To give credit and help readers locate information","To avoid understanding the topic","To make sources anonymous"],1],
        ["What should students do to protect their privacy when using AI?",["Share passwords for better answers","Upload confidential school records","Avoid sharing private information and passwords","Post personal records publicly"],2],
        ["What is the main message of Academic Integrity and Responsible AI?",["Create original work, act honestly, and use technology responsibly","Let AI do all schoolwork","Copy information without credit","Avoid checking information"],0]]
    }
};

    const SECTIONS = [
        ["Plagiarism, Citation & Copyright",["plagiarism","referencing","fairuse","ip"]],
        ["Responsible AI Use",["aiguide","aidisc","aiacct"]],
        ["General Knowledge",["compre"]]];

    const SVG = d => `<svg viewBox="0 0 48 48" aria-hidden="true">${d}</svg>`;
    const ICONS = {
        plagiarism: SVG('<path d="M12 6h18l8 8v28H12z"/><path d="M30 6v8h8"/><path d="M17 22h16M17 28h16M17 34h16"/>'),
        referencing: SVG('<path d="M24 12c-4-3-10-4-18-4v28c8 0 14 1 18 4 4-3 10-4 18-4V8c-8 0-14 1-18 4z"/><path d="M24 12v28"/>'),
        fairuse: SVG('<path d="M24 6v34M14 41h20M10 12h28"/><path d="M10 12L4 26M10 12l6 14M38 12l-6 14M38 12l6 14"/><path d="M3 26h14c0 5-3 7-7 7s-7-2-7-7zM31 26h14c0 5-3 7-7 7s-7-2-7-7z"/>'),
        ip: SVG('<circle cx="24" cy="24" r="18"/><path d="M30 19a8 8 0 1 0 0 10"/>'),
        aiguide: SVG('<circle cx="24" cy="24" r="17"/><rect x="17" y="17" width="14" height="14" rx="2"/><path d="M21 12v5M27 12v5M21 31v5M27 31v5M12 21h5M12 27h5M31 21h5M31 27h5"/>'),
        aidisc: SVG('<path d="M24 11V5"/><circle cx="24" cy="4" r="2"/><rect x="10" y="11" width="28" height="22" rx="8"/><circle cx="19" cy="22" r="2.5"/><circle cx="29" cy="22" r="2.5"/><path d="M6 19v6M42 19v6M16 33v9h16v-9"/>'),
        aiacct: SVG('<path d="M28 3l8 3v7c0 5-4 8-8 10-4-2-8-5-8-10V6z"/><path d="M24.5 12l2.5 2.5 4-5"/><path d="M4 32h7v11H4zM11 34l9-3h9a2.5 2.5 0 0 1 0 5h-8M21 36l14-1 9-7"/>'),
        compre: SVG('<path d="M24 10L4 20l20 10 20-10z"/><path d="M12 25v10c0 3 6 6 12 6s12-3 12-6V25"/><path d="M44 20v12"/>')
    };

    const POOL = [];
        Object.entries(QUIZZES).forEach(([k,z])=>{z.ids=z.q.map(x=>POOL.push(x)-1)});
    const READY = z=>z.q.length>=10;
    const $ = id=>document.getElementById(id);

    let user = null,store =  {};
    const ukey = n=>"quizhub_u_"+n.trim().toLowerCase().replace(/\s+/g," ");
    const persist = ()=>{if(!user)return;try{localStorage.setItem(ukey(user),JSON.stringify(store))}catch{}};
    function login(name,remember=true){
        user = name.trim();
        try{
            localStorage.removeItem("quizhub_current");sessionStorage.removeItem("quizhub_current");
            (remember?localStorage:sessionStorage).setItem("quizhub_current",user);
            store=JSON.parse(localStorage.getItem(ukey(user)))||{};
        }catch{
            store={}
        }
        $("who").textContent = user;
        $("loginView").classList.add("hidden");
        route();
    }

    function logout(){
    try {
        localStorage.removeItem("quizhub_current");sessionStorage.removeItem("quizhub_current")}catch{}
    user=null;store={};
    try {
        history.pushState(null,"",location.pathname+location.search)}catch{}
    $("quizView").classList.add("hidden");
    $("name").value="";$("loginView").classList.remove("hidden");$("name").focus();
    }
    const rec=k=>store[k]||(store[k]={best:null,tries:0,last:null,prog:null});

    function renderHub(){
        $("hub").innerHTML=SECTIONS.map(([name,keys])=>`
        <section class="sec"><h2 class="ttl">${name}</h2><div class="cards">${keys.map(k=>{
        const z=QUIZZES[k],ok=READY(z),r=store[k];
        const badge=!ok?"Coming soon":r&&r.best!=null?`Best: ${r.best}/10`:z.all?"All Topics":"";
        return `<button class="qcard" data-k="${k}" ${ok?"":"disabled"}>
            ${badge?`<span class="badge">${badge}</span>`:""}<span class="ic">${ICONS[k]}</span>
            <span class="nm ttl">${z.title}</span><span class="ct">10 Questions${r&&r.prog&&!r.prog.done?" · In progress":""}</span></button>`}).join("")}
        </div></section>`).join("");
        document.querySelectorAll(".qcard").forEach(b=>b.onclick=()=>location.hash=b.dataset.k);
    }

    let key,z,S;

    function newProg(){
        let ids=z.ids.slice(0,10);
        return {ids,cur:0,ans:Array(10).fill(null),done:false};
    }
    function openQuiz(k){
        key=k;z=QUIZZES[k];
        if(!z||!READY(z)){location.hash="";return}
        const r=rec(k);
        if(!r.prog||r.prog.ids.length!==10)r.prog=newProg();
        S=r.prog;
        $("hubView").classList.add("hidden");$("quizView").classList.remove("hidden");
        $("qTitle").textContent=z.title;

        renderQuiz();window.scrollTo(0,0);
    }

    function renderQuiz(){
        if(S.done)return renderResults();
        $("qCard").classList.remove("hidden");$("rCard").classList.add("hidden");$("bottom").classList.remove("hidden");
        const i=S.cur,q=POOL[S.ids[i]];
        $("question").textContent=q[0];
        $("counter").textContent=`Question ${i+1} / 10`;
        $("ptext").textContent=`${i+1} / 10`;
        $("fill").style.width=(i+1)*10+"%";
        $("prev").style.visibility=i?"visible":"hidden";
        $("nlabel").textContent=i===9?"Finish":"Next";
        $("next").disabled=S.ans[i]===null;
        $("options").innerHTML="";
        q[1].forEach((t,n)=>{
        const b=document.createElement("button");
        b.className="option"+(S.ans[i]===n?" sel":"");b.textContent=t;
        b.onclick=()=>{S.ans[i]=n;persist();renderQuiz()};
        $("options").appendChild(b);
        });
    }

    const scoreOf=()=>S.ans.filter((a,i)=>a===POOL[S.ids[i]][2]).length;

    function finish() {
        const r=rec(key),sc=scoreOf();
        r.tries++;r.best=r.best==null?sc:Math.max(r.best,sc);
        r.last={score:sc,date:new Date().toISOString()};
        S.done=true;persist();renderResults();
    }

    function renderResults(){
        $("qCard").classList.add("hidden");$("bottom").classList.add("hidden");$("rCard").classList.remove("hidden");
        $("counter").textContent="Completed";
        const r=rec(key),sc=scoreOf(),pct=sc*10;
        $("ring").style.setProperty("--p",pct);
        $("ring").style.setProperty("--ring",pct>=70?"var(--ok)":pct>=50?"#e0b73c":"var(--bad)");
        $("rScore").textContent=`${sc}/10`;$("rPct").textContent=pct+"%";
        $("sBest").textContent=`Best: ${r.best}/10`;
        $("sTries").textContent=`Attempts: ${r.tries}`;
        $("sDate").textContent=r.last?"Taken: "+new Date(r.last.date).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}):"";
        $("rev").innerHTML=S.ids.map((id,i)=>{
        const q=POOL[id],ok=S.ans[i]===q[2];
        return `<details class="${ok?"":"bad"}"><summary>${i+1}. ${q[0]}</summary>
        <p>Your answer: ${q[1][S.ans[i]]??"—"}</p>${ok?"":`<p>Correct answer: ${q[1][q[2]]}</p>`}</details>`}).join("");
    }

    $("next").onclick=()=>{if(S.ans[S.cur]===null)return;S.cur===9?finish():(S.cur++,persist(),renderQuiz())};
    $("prev").onclick=()=>{if(S.cur){S.cur--;persist();renderQuiz()}};
    $("retake").onclick=()=>{rec(key).prog=S=newProg();persist();renderQuiz();window.scrollTo(0,0)};

    function route(){
        if(!user)return;
        const k=location.hash.slice(1);
        if(k&&QUIZZES[k])return openQuiz(k);
        $("quizView").classList.add("hidden");$("hubView").classList.remove("hidden");renderHub();
    }

    function goHome(e){
        if(e)e.preventDefault();
        try{history.pushState(null,"",location.pathname+location.search)}catch{location.hash=""}

        route();window.scrollTo(0,0);
    }
    document.querySelectorAll("[data-home]").forEach(a=>a.addEventListener("click",goHome));
    addEventListener("hashchange",route);
    addEventListener("popstate",route);

    function start(){
        const n=$("name").value.trim();
        if(!n){$("name").focus();$("name").placeholder="Please type your name";return}
        login(n,$("remember").checked);
    }
    $("startBtn").addEventListener("click",start);
    $("name").addEventListener("keydown",e=>{if(e.key==="Enter")start()});
    $("switch").addEventListener("click",e=>{e.preventDefault();logout()});

    let saved=null;
    try {
        saved=localStorage.getItem("quizhub_current")||sessionStorage.getItem("quizhub_current")
    }catch{}
    if(saved)login(saved,!!localStorage.getItem("quizhub_current"));
    else{$("loginView").classList.remove("hidden");$("name").focus()}