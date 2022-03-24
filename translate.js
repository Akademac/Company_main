let srb_flag = document.querySelector('#srb_flag');
let ger_flag = document.querySelector('#ger_flag');
let engl_flag = document.querySelector('#engl_flag');
let trnsl = document.querySelectorAll('.trnsl');

let mini_trnsl = document.querySelectorAll('.mini_trnsl');
let footer_icons = document.querySelector('#footer_icons');
let trnsl_x = 0;
let trnsl_y = 0;
let trnsl_srb_port = '';
let mini_trnsl_x = 0;
let mini_trnsl_y = 0;
let windowWidth = window.innerWidth;

let trnsl_hash = window.location.hash;




let translate_srb = () => {
    trnsl_srb_port = 'srb';
    window.location.href = 'https://webeldes.com/index.html#srb';

    fetch('translate_srb.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        trnsl.forEach(e => {
                e.innerHTML = data[trnsl_x];
                trnsl_x++;
            })  
        mini_trnsl.forEach(e => {
            e.innerHTML = data[mini_trnsl_x]
            mini_trnsl_x++;
        })   
            srb_flag.style.backgroundColor = 'var(--mainOrange)';
            srb_flag.style.zIndex = 1200;  
            ger_flag.style.zIndex = 1100;  
            engl_flag.style.zIndex = 1100;  
            ger_flag.style.backgroundColor = 'var(--mainDBlue)';  
            engl_flag.style.backgroundColor = 'var(--mainDBlue)'; 
            trnsl_y = 0;
    })
    
    footer_icons.style.marginLeft = '-14.5rem';
    
    //second div
    
    second_div_third.addEventListener('mouseover', () => {
        second_div_third_p.innerHTML = `Ukoliko niste zadovoljni prvim nacrtom sajta,
         naš tim dizajnera će korigovati sve što Vam se ne dopada. 
         Broj ispravki je neograničen.`;
    });
    
    second_div_third.addEventListener('mouseout', () => {
        second_div_third_p.innerHTML = `Ukoliko niste zadovoljni prvim nacrtom sajta, 
        naš tim dizajnera će korigovati sve što Vam se ne dopada.
         Broj ispravki je neograničen.`;
    });


    // Servisi

    services_web_development.addEventListener('mouseover', () => {
        services_web_development_p.innerHTML = `Izrađujemo potpuno fukncionalne i profesionalno dizajnirane web 
        sajtove i aplikacije koje korisnicima pružaju savršeno iskustvo na različitim uređajima. Pored toga, 
        modernizujemo i redizajniramo Vaše staromodne sajtove i prilagođavamo ih današnjim trendovima.`;
    });
    
    services_web_development.addEventListener('mouseout', () => {
        services_web_development_p.innerHTML = `Izrađujemo potpuno fukncionalne i profesionalno 
        dizajnirane web sajtove i aplikacije koje korisnicima pružaju savršeno iskustvo na<!-- različitim uređajima.
        Pored toga, modernizujemo i redizajniramo Vaše staromodne sajtove i prilagođavamo ih današnjim trendovima.-->`;
    });

    // HTML/CSS/JS

    let services_html = document.querySelector('#services_html');
    let services_html_p = document.querySelector('#services_html_p');

    services_html.addEventListener('mouseover', () => {
         services_html_p.innerHTML = `Ukoliko imate sliku, skicu ili ideju kontaktirajte nas,
         a mi ćemo Vam pomoći da konvertujete bilo koji fajl: 
         PSD, Sketch, Ai, Adobe XD u potpuno funkcionalan i jednostavan kod.`;
     });
        
    services_html.addEventListener('mouseout', () => {
        services_html_p.innerHTML = `Ukoliko imate sliku, skicu ili ideju kontaktirajte nas,
         a mi ćemo Vam pomoći da konvertujete bilo koji fajl: PSD, Sketch,
         Ai, Adobe XD u...<!--potpuno funkcionalan i jednostavan kod.-->`;
    });

    //Single page

    services_single_page.addEventListener('mouseover', () => {
        services_single_page_p.innerHTML = `Jednostrani web sajt je onaj koji se sastoji iz 
        samo jedne stranice koja se potpuno učitava nakon otvaranja. Ceo sajt se učitava na
         jedan klik ili se zone smenjuju novim fragmentima stranice sa servera na zahtev, 
        čineći doživljaj kontinuiranim i tečnim za korisnika.`
    });
    
    
    services_single_page.addEventListener('mouseout', () => {
        services_single_page_p.innerHTML = `Jednostrani web sajt je onaj koji se sastoji iz 
        samo jedne stranice koja se potpuno učitava nakon otvaranja. Ceo sajt se učitava na 
        jedan klik ili se zone smenjuju...<!-- novim fragmentima stranice sa servera na zahtev, 
        čineći doživljaj kontinuiranim i tečnim za korisnika.-->`
    });

    //logo dizajn
    
    logo_design.addEventListener('mouseover', () => {
        logo_design_p.innerHTML = `Logo igra važnu ulogu kada je u pitanju uspeh 
        Vašeg poslovanja. Izrađujemo profesionalno 
        dizajnirani logo koji će Vaš brend istaknuti među ostalima.`;
    });
    
    logo_design.addEventListener('mouseout', () => {
        logo_design_p.innerHTML = `Logo igra važnu ulogu kada je u pitanju uspeh 
        Vašeg poslovanja. Izrađujemo profesionalno dizajnirani 
        logo koji će Vaš brend istaknuti među ostalima.`;
    });

    //Brending
    
    service_branding.addEventListener('mouseover', () => {
        service_branding_p.innerHTML = `Dizajn brenda podrazumeva stvaranje identiteta
        brenda koji ga savršeno odražava. Možemo da stvorimo elemente koji oblikuju 
        dizajn brenda Vaše kompanije i predstavljaju ličnost Vašeg brenda.`;
    });

    service_branding.addEventListener('mouseout', () => {
        service_branding_p.innerHTML = `Dizajn brenda podrazumeva stvaranje identiteta
        brenda koji ga savršeno odražava. Možemo da stvorimo elemente koji oblikuju dizajn 
        brenda Vaše...<!-- kompanije i predstavljaju ličnost Vašeg brenda.-->`;
    });    
    trnsl_x = 0;
};

let translate_ger = () => {
    trnsl_srb_port = 'ger';
    window.location.href = 'https://webeldes.com/index.html#ger';
    fetch('translate_ger.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        trnsl.forEach(e => {
            e.innerHTML = data[trnsl_y];
            trnsl_y++;
        })  
            mini_trnsl.forEach(e => {
            e.innerHTML = data[mini_trnsl_y]
            mini_trnsl_y++;
        })   
            ger_flag.style.backgroundColor = 'var(--mainOrange)';
            ger_flag.style.zIndex = 1200;  
            srb_flag.style.zIndex = 1100;  
            engl_flag.style.zIndex = 1100;  
            srb_flag.style.backgroundColor = 'var(--mainDBlue)';  
            engl_flag.style.backgroundColor = 'var(--mainDBlue)';  
            trnsl_x = 0;  
        })
    footer_icons.style.marginLeft = '-14.5rem';

    //second div
    
    second_div_third.addEventListener('mouseover', () => {
        second_div_third_p.innerHTML = `Unbegrenzte Revision
        Wenn Sie mit Ihrer Lieferung nicht zufrieden sind, ändert unser Designerteam alles, 
        was Ihnen nicht gefällt. 
        Sie haben die Möglichkeit, unzählige Änderungen vorzunehmen.`;
    });
        
    second_div_third.addEventListener('mouseout', () => {
        second_div_third_p.innerHTML = `Unbegrenzte Revision
        Wenn Sie mit Ihrer Lieferung nicht zufrieden sind, ändert unser Designerteam alles, 
        was Ihnen nicht gefällt....`;
    });
    
    // Servisi

    // Web development
    
    services_web_development.addEventListener('mouseover', () => {
        services_web_development_p.innerHTML = `Wir liefern voll funktionsfähige
         und professionell gestaltete Websites und Anwendungen, die Endbenutzern stets
          ein perfektes Erlebnis bieten. Außerdem modernisieren und gestalten wir Ihre unfreundlichen
           und altmodischen Websites 
        vollständig neu und passen sie an moderne Trends an.`;
    });
        
    services_web_development.addEventListener('mouseout', () => {
        services_web_development_p.innerHTML = `Wir liefern voll funktionsfähige
        und professionell gestaltete Websites und Anwendungen, die Endbenutzern stets
         ein perfektes Erlebnis bieten. Außerdem modernisieren und gestalten...`;
    });
    
    // HTML/CSS/JS
    
    let services_html = document.querySelector('#services_html');
    let services_html_p = document.querySelector('#services_html_p');
    
    services_html.addEventListener('mouseover', () => {
            services_html_p.innerHTML = `Wenn Sie eine Skizze, ein Bild oder eine Idee haben,
            wenden Sie sich an uns, wir helfen Ihnen bei der Konvertierung aller Designdateien:
            PSD, Sketch, 
            Ai, Adobe XD in voll funktionsfähigen, einfachen Code`;
        });
            
    services_html.addEventListener('mouseout', () => {
        services_html_p.innerHTML = `Wenn Sie eine Skizze, ein Bild oder eine Idee haben,
            wenden Sie sich an uns, wir helfen Ihnen bei der Konvertierung aller Designdateien: 
            PSD, Sketch, Ai, Adobe 
        XD in voll funktionsfähigen...`;
    });
    
    //Single page
    
    services_single_page.addEventListener('mouseover', () => {
        services_single_page_p.innerHTML = `Eine einseitige Website passt auf eine einzelne Seite. 
        Websites mit nur einer Seite werden beim ersten Laden der Seite vollständig geladen,
         wodurch die Benutzererfahrung für den Benutzer kontinuierlicher und flüssiger wird.`
    });
     
    services_single_page.addEventListener('mouseout', () => {
        services_single_page_p.innerHTML = `Eine einseitige Website passt auf eine einzelne Seite. 
        Websites mit nur einer Seite werden beim ersten Laden der Seite vollständig geladen,
         wodurch die...`
    });

    //logo dizajn
    
    logo_design.addEventListener('mouseover', () => {
        logo_design_p.innerHTML = `Das Logo spielt eine sehr wichtige Rolle für den Erfolg Ihres Unternehmens.
         Wir liefern ein professionell
         gestaltetes Logo, das Ihre Marke unter anderem hervorhebt.`;
    });
    
    logo_design.addEventListener('mouseout', () => {
        logo_design_p.innerHTML = `Das Logo spielt eine sehr wichtige Rolle für den Erfolg Ihres
         Unternehmens. Wir liefern ein professionell 
        gestaltetes Logo, das Ihre Marke unter anderem hervorhebt.`;
    });
    
    //Brending
        
    service_branding.addEventListener('mouseover', () => {
        service_branding_p.innerHTML = `Beim Branding geht es darum, eine Markenidentität zu schaffen,
        die Ihre Marke perfekt widerspiegelt. Wir erstellen Elemente, die die Persönlichkeit Ihrer Marke 
        repräsentieren. Das Branding-Design kann neben einem Logo auch Marketingmaterialien, 
        Websites, Menüs, Uniformen und vieles mehr enthalten`;
    });
    
    service_branding.addEventListener('mouseout', () => {
        service_branding_p.innerHTML = `Beim Branding geht es darum, eine Markenidentität zu schaffen,
        die Ihre Marke perfekt widerspiegelt. Wir erstellen Elemente, die die Persönlichkeit Ihrer Marke...`;
    });  
    trnsl_y = 0;
};

srb_flag.addEventListener('click', translate_srb);
window.addEventListener('load', () => {
    if(trnsl_hash == '#srb') {
        translate_srb();
        window.open('index.html#srb', '_self');
    }

    else if(trnsl_hash == '#ger') {
        translate_ger();
        window.open('index.html#ger', '_self');
    }

    else if(trnsl_hash == '#srb_wte') {
        window.open('index.html#srb', '_self');
        translate_srb();    
        if(windowWidth < 400) {
            window.scrollBy(0, 900);
        }
        else {
            window.scrollBy(0, 700);
        }
    }

    else if(trnsl_hash == '#ger_wte') {
        window.open('index.html#ger', '_self');
        translate_ger();    
        if(windowWidth < 400) {
            window.scrollBy(0, 900);
        }
        else {
            window.scrollBy(0, 700);
        }
    }
    

    else if(trnsl_hash == '#srb_ser') {
        translate_srb();
        window.open('index.html#srb', '_self');
        if(windowWidth < 600) {
            window.scrollBy(0, 3800);
        }
        else {
            window.scrollBy(0, 2350);
        }
    }

    
    else if(trnsl_hash == '#ger_ser') {
        translate_ger();
        window.open('index.html#ger', '_self');
        if(windowWidth < 600) {
            window.scrollBy(0, 3800);
        }
        else {
            window.scrollBy(0, 2350);
        }
    }
});

ger_flag.addEventListener('click', translate_ger);

engl_flag.addEventListener('click', () => {
    window.open('index.html', '_self');
    engl_flag.style.backgroundColor = 'var(--mainOrange)';
    ger_flag.style.zIndex = 1100;  
    srb_flag.style.zIndex = 1100;  
    engl_flag.style.zIndex = 1200;  
})

let wte = document.querySelectorAll('.wte');

wte.forEach(e => {
    e.addEventListener('click', () => {
        if(windowWidth < 400) {
            window.scrollBy(0, 900);
        }
        else {
             window.scrollBy(0, 700);
        }
    });
});

let ser = document.querySelectorAll('.ser');
let footer_ser = document.querySelector('.footer_ser');

ser.forEach(e => {
    e.addEventListener('click', () => {
        if(windowWidth < 600) {
            window.scrollBy(0, 3900);
        }
        else {
            window.scrollBy(0, 2350);
        }
    });
});

footer_ser.addEventListener('click', () => {
    window.scrollBy(0, -1150);
})


