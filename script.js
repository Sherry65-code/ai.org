window.addEventListener('resize' , responser , false);
window.addEventListener('load' , responser , false);
function responser() {
    if (innerWidth <= 322)
    {
        document.getElementById('hb').style.visibility = "hidden";
    }
    else
    {
        document.getElementById('hb').style.visibility = "visible";
    }
}
function download() {
    document.getElementById('main').innerHTML = `
    <h1>Download Now</h1>
    <br><br><br>
    <a href="https://drive.google.com/u/0/uc?export=download&confirm=4OL6&id=17pf0ORtV0mdhNSgrrxS33NQKpx34YTiC"><button>Download exe</button><br><br></a>
    <a href="https://drive.google.com/u/0/uc?export=download&confirm=ZA7w&id=16kY09aX9WhD2R_ng3ToxsZu0_Ec80BIl"><button>Download Source Code</button></a>
    `;
    document.querySelector('.header').innerHTML = '<button class="back" onclick="back()"><img src="arrow.svg"></button>Invento AI   <button id="hb" onclick="download()">Download</button>';
}
function back(){
    document.body.innerHTML = `    <div class="header">
    Invento AI   <button id="hb" onclick="download()">Download</button>
</div>
<div id="main">
    <h1>Introducing Invento AI Assistant</h1><br>
    <span>AI Assistant on desktop which uses Terminal <br>
    and is a super fast and open-source as well <br>
    as a cross-platform Assistant.
    </span><br><br><br>
    <img src="./ai.jpg" width="100%" alt=""><br><br>
    <div class="imp">
        <span class="spec"><br> Information</span><br><br>
        Language - Python3 <br>
        SpeechRecognition Engine - Google Speech API <br>
        Text to speech conversion Engine - pyttsx3
        <br><br><br>

    </div>
<h1>Avaliable for :-</h1><br><br>
<img src="./winlogo.jpg" width="20%" style="border-radius: 50%;" alt="">
<img src="./linuxlogo.jpg" width="20%" style="border-radius: 50%;" alt="">
<br><br><br>
<h1>How to run it ?</h1><br>
To run it download the zip from the button above and unzip the folder 
and open the dist folder and run the application inside it.
<br><br>
<h1>More to see</h1><br><br>
<a href="https://sherry65-code.github.io/crystal.com/">Invento Crystal IO Website</a><br>
<a href="https://sherry65-code.github.io/ninjs.co.in/">Ninja CSS</a><br>
<a href="https://sherry65-code.github.io/docker.net">Invento Docker</a><br><br>
<button onclick="window.open('https://forms.office.com/r/ksCGY2K28r');">Send Feedback</button>        
<br><br><br>
</div>
    <script src="./script.js"></script>`;
}