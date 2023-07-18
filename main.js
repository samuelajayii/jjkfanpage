const itadori = document.getElementById('itadori')
const fushiguro = document.getElementById('fushiguro')
const kugisaki = document.getElementById('kugisaki')
const gojo = document.getElementById('gojo')
const sukuna = document.getElementById('sukuna')
const kenjaku = document.getElementById('kenjaku')
const modalContainer = document.getElementById('modal-container')
const modal = document.getElementById('modal');
const detailedNote = document.getElementById('detailed-note')
const closeBtn = document.getElementById('close-btn')
const itaBio = document.getElementById('ita-bio')
const fusBio = document.getElementById('fus-bio')
const kugBio = document.getElementById('kug-bio')
const gojBio = document.getElementById('goj-bio')
const sukBio = document.getElementById('suk-bio')
const kenBio = document.getElementById('ken-bio')


itadori.addEventListener('click', function(){
    detailedNote.appendChild(itaBio)
    itaBio.style.display = 'block'
    itaBio.style.color = 'black'
    modalContainer.style.display = 'block'
    
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(itaBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(itaBio)
        modalContainer.style.display = 'none'
    }
})

fushiguro.addEventListener('click', function(){
    detailedNote.appendChild(fusBio)
    fusBio.style.display = 'block'
    fusBio.style.color = 'black'
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(fusBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(fusBio)
        modalContainer.style.display = 'none'
    }
})


kugisaki.addEventListener('click', function(){
    detailedNote.appendChild(kugBio)
    kugBio.style.display = 'block'
    kugBio.style.color = 'black'
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(kugBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(kugBio)
        modalContainer.style.display = 'none'
    }
})

gojo.addEventListener('click', function(){
    detailedNote.appendChild(gojBio)
    gojBio.style.display = 'block'
    gojBio.style.color = 'black'
    modalContainer.style.display = 'block'
    
});


closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(gojBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(gojBio)
        modalContainer.style.display = 'none'
    }
})

sukuna.addEventListener('click', function(){
    detailedNote.appendChild(sukBio)
    sukBio.style.display = 'block'
    sukBio.style.color = 'black'
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(sukBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(sukBio)
        modalContainer.style.display = 'none'
    }
})

kenjaku.addEventListener('click', function(){
    detailedNote.appendChild(kenBio)
    kenBio.style.display = 'block'
    kenBio.style.color = 'black'
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(kenBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(kenBio)
        modalContainer.style.display = 'none'
    }
})

const yuta = document.getElementById('yuta')
const rika = document.getElementById('rika')
const geto = document.getElementById('geto')
const maki = document.getElementById('maki')
const inumaki = document.getElementById('inumaki')
const panda = document.getElementById('panda')

const yutBio = document.getElementById('yut-bio')
const rikBio = document.getElementById('rik-bio')
const getBio = document.getElementById('get-bio')
const makBio = document.getElementById('mak-bio')
const inuBio = document.getElementById('inu-bio')
const panBio = document.getElementById('pan-bio')


yuta.addEventListener('click', function(){
    detailedNote.appendChild(yutBio)
    yutBio.style.display = 'block'
    yutBio.style.color = 'black'
    modalContainer.style.display = 'block'
    
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(yutBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(yutBio)
        modalContainer.style.display = 'none'
    }
})

rika.addEventListener('click', function(){
    detailedNote.appendChild(rikBio)
    rikBio.style.display = 'block'
    rikBio.style.color = 'black'
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(rikBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(rikBio)
        modalContainer.style.display = 'none'
    }
})


geto.addEventListener('click', function(){
    detailedNote.appendChild(getBio)
    getBio.style.display = 'block'
    getBio.style.color = 'black'
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(getBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(getBio)
        modalContainer.style.display = 'none'
    }
})

maki.addEventListener('click', function(){
    detailedNote.appendChild(makBio)
    makBio.style.display = 'block'
    makBio.style.color = 'black'
    modalContainer.style.display = 'block'
    
});


closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(makBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(makBio)
        modalContainer.style.display = 'none'
    }
})

inumaki.addEventListener('click', function(){
    detailedNote.appendChild(inuBio)
    inuBio.style.display = 'block'
    inuBio.style.color = 'black'
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(inuBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(inuBio)
        modalContainer.style.display = 'none'
    }
})

panda.addEventListener('click', function(){
    detailedNote.appendChild(panBio)
    panBio.style.display = 'block'
    panBio.style.color = 'black'
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function(){
    detailedNote.removeChild(panBio)
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if (e.target === modalContainer){
        detailedNote.removeChild(panBio)
        modalContainer.style.display = 'none'
    }
})