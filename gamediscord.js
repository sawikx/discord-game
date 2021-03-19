/*function xp(){
  con.query(`SELECT * FROM xp WHERE ID=1000;`,(err,xp)=>{ //400 nastepne =>do 900
  var a =1;
  Math.round(a);
  var b = 10+a;
  Math.round(b);
  for(var i=1;i<101;i++){
  if(i%100==0){
    con.query(`INSERT INTO xp (xp,punkt) VALUE (${(b*3)+xp[0].xp},5)`)
    b = b + a;
    Math.round(b);
    console.log(b);
    console.log(i);
  }
  else if(i%10==0){
    con.query(`INSERT INTO xp (xp,punkt) VALUE (${(b*3)+xp[0].xp},3)`)
    a = b/10;
    b = b + a;
    Math.round(b);
    console.log(b);
    console.log(i);
  }
  else if(i%5==0){
    con.query(`INSERT INTO xp (xp,punkt) VALUE (${(b*3)+xp[0].xp},2)`)
    b = b + a;
    Math.round(b);
    console.log(b);
    console.log(i);
  }
  else{
    con.query(`INSERT INTO xp (xp,punkt) VALUE (${(b*3)+xp[0].xp},1)`)
    b = b + a;
    Math.round(b)
    console.log(b,5);
    console.log(i);
  }
}
})
}*/

function szansanakryt(postacatak,postackryt){
    var krytbo = Math.floor((Math.random() * 100) + 0);
        if(kryt(postacatak,postackryt)>=krytbo){
          return  1;
        }
        else{
          return 0;
        }
}
function kryt(ata,kry){
  kry = kry/2;
  return Math.round(ata = (kry/ata)*100);
}

function spid(spi1,spi2){
  spi1=(spi1/10)+Math.floor((Math.random() * 10) + 0);
  spi2=(spi2/10)+Math.floor((Math.random() * 10) + 0);
  if(spi1>spi2){
    return 0;
  }
  else if(spi1<spi2){
    return 1;
  }
  else if(spi1==spi2){
    return 2;
  }
}

function walka(bohater,potwor,li){
  var ilekryt = 0;
  if(li==undefined){
  var lo = 0;
  }
  else{
    lo = li;
  }
  if(spid(bohater[0].speed,potwor[lo].speed) == 0){
    if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
      var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
      var atakpo = bohater[0].hp;
      ilekryt+=1;
      if(atakbo>0){
        if(szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
          var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
          var atakbo = potwor[lo].hp;
        }
        else{
          var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
          var atakbo = potwor[lo].hp;
        }
      }
    }
    else{
      var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
      var atakpo = bohater[0].hp;
      if(atakbo>0){
        if(szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
          var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
          var atakbo = potwor[lo].hp;
        }
        else{
          var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
          var atakbo = potwor[lo].hp;
        }
      }
    } 
  }
  else if(spid(bohater[0].speed,potwor[lo].speed) == 1){
    if(szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
      var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
      var atakbo = potwor[lo].hp;
      if(atakpo>0){
        if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
          var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
          var atakpo = bohater[0].hp;
        }
        else{
          var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
          var atakpo = bohater[0].hp;
        }
      }
    }
    else{
      var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
      var atakbo = potwor[lo].hp;
    }
  }
  else{
  if( szansanakryt(bohater[0].atak,bohater[0].krytyk)==1 && szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
    var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
    var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
    ilekryt+=1;
  }
  else if(szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
    var atakbo = potwor[lo].hp - bohater[0].atak //atak postać 
    var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx //atak potwór
  }
  else if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
    var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx //atak postać 
    var atakpo = bohater[0].hp - potwor[lo].atak //atak potwór
    ilekryt+=1;
   }
  else{
    var atakbo = potwor[lo].hp - bohater[0].atak //atak postać 
    var atakpo = bohater[0].hp - potwor[lo].atak //atak potwór
  }
  }
  var a=0
  while(a<1){
    if(atakbo >0 && atakpo >0){
      if(spid(bohater[0].speed,potwor[lo].speed) == 0){
        if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
          atakbo = atakbo - bohater[0].atak*bohater[0].krytykx; //atak postać 
          atakpo = atakpo;
          ilekryt+=1;
          if(atakbo>0){
            if(szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
              var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
              var atakbo = potwor[lo].hp;
            }
            else{
              var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
              var atakbo = potwor[lo].hp;
            }
          }
        }
        else{
          atakbo = atakbo - bohater[0].atak;//atak postać 
          atakpo = atakpo;
          if(atakbo>0){
            if(szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
              var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
              var atakbo = potwor[lo].hp;
            }
            else{
              var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
              var atakbo = potwor[lo].hp;
            }
          }
        } 
      }
      else if(spid(bohater[0].speed,potwor[lo].speed) == 1){
        if(szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
          atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
          atakbo = atakbo;
          if(atakpo>0){
            if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
              var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
              var atakpo = bohater[0].hp;
            }
            else{
              var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
              var atakpo = bohater[0].hp;
            }
          }
        }
        else{
          atakpo = atakpo - potwor[lo].atak; //atak potwór
          atakbo = atakbo;
          if(atakpo>0){
            if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
              var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
              var atakpo = bohater[0].hp;
            }
            else{
              var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
              var atakpo = bohater[0].hp;
            }
          }
        }
      }
      else{
      if( szansanakryt(bohater[0].atak,bohater[0].krytyk)==1 && szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
        atakbo = atakbo - bohater[0].atak*bohater[0].krytykx; //atak postać 
        atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
        ilekryt+=1;
      }
      else if(szansanakryt(potwor[lo].atak,potwor[lo].krytyk)==1){
        atakbo = atakbo - bohater[0].atak //atak postać 
        atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx //atak potwór
      }
      else if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
        atakbo = atakbo - bohater[0].atak*bohater[0].krytykx //atak postać 
        atakpo = atakpo - potwor[lo].atak //atak potwór
        ilekryt+=1;
       }
      else{
        atakbo = atakbo - bohater[0].atak //atak postać 
        atakpo = atakpo - potwor[lo].atak //atak potwór
      }}
    }
    else{
      a+=1;
    }
  }
  if(atakbo < 0 && atakpo >0){
    return 0;
  }
  else{
    return 1;
  }
}



case "ghelp": //informacje o komendach do gry
  var h="```";
  var f="fix"
  message.channel.send(h+f+enter+"komendy do gry wersji 0.5.3"+enter+enter+"!postać - dodaje postać lub sprawdzasz postać"+enter+enter+"!przeciwnik - sprawdzasz jacy są przeciwnicy"+enter+enter+"!przygoda (las,katakumby,świat,miasto)- Pozwala walczyć z przeciwnikikami i zdobywać exp"+enter+"!przygoda świat - Można spotkać każdego przeciwnika czyli od lvl 0-∞"+enter+"!przygoda las - Można spotkać przeciwników z lvl 50-100"+enter+"!przygoda katakumby - Można spotkać przeciwników z lvl 100-200"+enter+"!przygoda miasto - Można spotkać przeciwników z lvl 200-500"+enter+enter+"!upg - zmienia się imie np. !upg imie jan kowalski i ulepsza statystyki jak masz punkty pisze się to !upg hp/atak/speed/krytyk 1"+enter+enter+"!rasa - zmienia rase postaci np !rasa elf i pokazuje jakie są rasy !rasa "+enter+enter+"!karczma - miejsce gdze idze wziąść quest"+enter+enter+"!aktualizacja - informuje o ostatniej aktualizacji gry"+enter+enter+"!arena - pvp"+enter+enter+"!go - pozwala się przemieszczać po mieście"+h)
  message.channel.send(h+f+enter+"!gildia-z - pozwala zdobyć klase: złodzieja, zabójcy, zbój"+enter+enter+"!akademia - pozwala zdobyć klase: mag ognia, ziemi, wody, powietrza"+enter+enter+"!koszary - pozwala zdobyć klase: cięszkozbrojnego-rycerza, samuraja, lekkozbrojnego-rycerza, cięszkozbrojnego-jeźdźca, lekkozbrojnego-jeźdźca, łucznika"+enter+enter+"!trening - pozwala na wbicie lvl 0-10 i 11-49"+h);
  message.channel.send(h+f+enter+"-----------------------------"+enter+"Mechaniki w grze!"+enter+enter+"klasa - daje stałe dodatkowe statystyki"+enter+enter+"speed - decyduje kto pierwszy zaatakuje"+enter+enter+"krytyk - pozwala zadać dodatkowe obrażenia mnożone przez mnożnik"+enter+enter+"hp - ilość życia"+enter+enter+"atak - ilosć ataku"+h)
  break;
  case "aktualizacja":
    var h="```";
    var f="fix"
    message.channel.send(h+f+enter+"aktualizacja na wersje 0.5.6 "+enter+enter+"Aktualizacja"+enter+"Porawa błedu przy zdobywanym goldzie"+h);
  break;
  case 'postać': //dodawanie postaci lub sprawdzenie postaci
   let[imiepos,rasapos]=args;
   //console.log(numerposraci);
      con.query(`SELECT IDdiscord FROM postac WHERE IDdiscord = ${message.author.id}`,(err,rows)=>{
        if(err) throw err;
    if(rows.length >= 1){ //gdy jest id
          con.query(`SELECT * FROM postac WHERE  IDdiscord = ${message.author.id}`,(err,rowss)=>{
          if(err) throw err;
          con.query(`SELECT xp FROM xp WHERE  ID=${(rowss[0].lvl+1)}`,(err,rowsss)=>{
            if(err) throw err;
          message.channel.send("Masz postać:"+enter+"Imię "+rowss[0].nazwa+", Rasa "+rowss[0].rasa+", Klasa "+rowss[0].klasa+enter+"hp="+rowss[0].hp+""+enter+"atak="+rowss[0].atak+""+enter+"speed="+rowss[0].speed+""+enter+"krytyk="+rowss[0].krytyk+" czyli "+kryt(rowss[0].atak,rowss[0].krytyk)+"%"+enter+"mnożnik krytyka="+rowss[0].krytykx+enter+"gold="+rowss[0].gold+enter+"lvl="+rowss[0].lvl+enter+"xp="+rowss[0].xp+enter+"następny lvl poczeba "+rowsss[0].xp+" xp"+enter+"Punkty umiejętności do dodania "+rowss[0].punk+""+enter+"jesteś w miejscu "+rowss[0].miasto);
        })})
        }
    else{//gdy niemasz postaci
          con.query("SELECT * FROM rasa",(err,rows)=>{
            if(err) throw err;
            var pod = false
            var ii = 0;
            for(var i=0;i<rows.length;i++){
              if(rasapos == rows[i].rasa){
                pod = true;
                ii = i
              }
            }
          if(pod == true && imiepos != undefined){
            con.query(`INSERT INTO postac (IDdiscord,nazwa,rasa,klasa,hp,atak,speed,krytyk,krytykx,miasto) VALUES (${message.author.id},"${imiepos}","${rasapos}","brak",7,5,5,1,2,"znak")`);
            message.channel.send("Postać stworzona!");
          }
          else if(imiepos == undefined){
            message.channel.send("imie postaci musi być (możesz zmienić puźniej imie) np. !postac jan");
          }
          else{
            message.channel.send("niemasz postaci ");
            for(var f=0;f<rows.length;f++){
            message.channel.send("Wpisz / !postac "+imiepos+" "+rows[f].rasa+" (nazwa postaci) / by grać tą rasą");
          }}
        })
        }
      })
  break;
  case "przeciwnik": //pokazuje przeciwników
      let[rodza]=args
      con.query(`SELECT * FROM rodzaj`,(err,rodzaj)=>{
        if(err) throw err;
        var ii,t=0;
        for(var i=0;i<rodzaj.length;i++){
        if(rodza == rodzaj[i].rodzaj){
          ii = i;
          t=1
        }
        }
      if(t==1){
      con.query(`SELECT * FROM przeciwnik WHERE klasa="${rodza}";`,(err,prze)=>{
        if(err) throw err;
        //console.log(prze)
        var a = prze.length
          for(var i=0;i<a;i++){
          message.channel.send("przeciwnik ("+prze[i].nazwa+" "+prze[i].klasa+") (hp "+prze[i].hp+") (atak "+prze[i].atak+") (speed "+prze[i].speed+") (kryt "+prze[i].krytyk+") (mnożnik krytyka "+prze[i].krytykx+") (zabicie daje "+prze[i].xp+" xp)");
      }})}
      else{
        for(var i=0;i<rodzaj.length;i++){
          message.channel.send("|!przeciwnik "+rodzaj[i].rodzaj+" |by się dowiedzec jakie są potwory z tego rodzaju");
        }}
      })
  break;
  case 'przygoda': //walka z przeciwnikiem
  let[miejscee]=args
    con.query(`SELECT * FROM postac WHERE IDdiscord = ${message.author.id}`,(err,bohater)=>{
    if(err) throw err;
    if(bohater.length == 0){
      message.channel.send("Stwórz postac prz pomocy komendy !postac");
    }
    else{
    con.query("SELECT xp,punkt FROM xp",(err,xp)=>{
      if(err) throw err;
      if(miejscee == undefined || miejscee == "świat"){
        con.query("SELECT * FROM przeciwnik ;",(err,potwor)=>{
          if(err) throw err;
        var losprze = potwor.length ;
        var lo = Math.floor((Math.random() * losprze) + 0);
        if(walka(bohater,potwor,lo)==0){
          var xpp = potwor[lo].xp + bohater[0].xp;
          var kas = potwor[lo].kasa + bohater[0].gold;
          con.query(`UPDATE discord.postac SET xp=${xpp},miasto="karczma",gold=${kas} WHERE  IDdiscord=${message.author.id};`) ;
          message.channel.send("przygoda wygrana zdobyto "+potwor[lo].xp+" xp i "+potwor[lo].kasa+" golda"+enter+"walczono z "+potwor[lo].nazwa+" "+potwor[lo].klasa);
          var l = bohater[0].lvl;
          var pu = bohater[0].punk + xp[l].punkt;
          if(xp[l].xp<=xpp){ //lvl up
          var xpz = xpp - xp[l].xp;
          con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  IDdiscord=${message.author.id};`) ;
          con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  IDdiscord=${message.author.id};`) ;
          con.query(`UPDATE discord.postac SET punk=${pu} WHERE  IDdiscord=${message.author.id};`) ;
          message.channel.send("Twoja postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
            }  
        }
        else{
          con.query(`UPDATE discord.postac SET miasto="karczma" WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("przygoda przegrana"+enter+"walczono z "+potwor[lo].nazwa+" "+potwor[lo].klasa)
        }
      })}
      else if(miejscee == "las"){
        con.query("SELECT * FROM przeciwnik WHERE lvl<=100 AND lvl>=50;",(err,potwor)=>{
          if(err) throw err;
        var losprze = potwor.length ;
        var lo = Math.floor((Math.random() * losprze) + 0);
        if(walka(bohater,potwor,lo)==0){
          var xpp = potwor[lo].xp + bohater[0].xp;
          var kas = potwor[lo].kasa + bohater[0].gold;
          con.query(`UPDATE discord.postac SET xp=${xpp},miasto="karczma",gold=${kas} WHERE  IDdiscord=${message.author.id};`) ;
          message.channel.send("przygoda wygrana zdobyto "+potwor[lo].xp+" xp i "+potwor[lo].kasa+" golda"+enter+"walczono z "+potwor[lo].nazwa+" "+potwor[lo].klasa);
          var l = bohater[0].lvl;
          var pu = bohater[0].punk + xp[l].punkt;
          if(xp[l].xp<=xpp){ //lvl up
          var xpz = xpp - xp[l].xp;
          con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  IDdiscord=${message.author.id};`) ;
          con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  IDdiscord=${message.author.id};`) ;
          con.query(`UPDATE discord.postac SET punk=${pu} WHERE  IDdiscord=${message.author.id};`) ;
          message.channel.send("Twoja postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
            }  
        }
        else{
          con.query(`UPDATE discord.postac SET miasto="karczma" WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("przygoda przegrana"+enter+"walczono z "+potwor[lo].nazwa+" "+potwor[lo].klasa)
        }
      })
      }
      else if(miejscee == "katakumby"){
        con.query("SELECT * FROM przeciwnik WHERE lvl<=200 AND lvl>=100;",(err,potwor)=>{
          if(err) throw err;
        var losprze = potwor.length ;
        var lo = Math.floor((Math.random() * losprze) + 0);
        if(walka(bohater,potwor,lo)==0){
          var xpp = potwor[lo].xp + bohater[0].xp;
          var kas = potwor[lo].kasa + bohater[0].gold;
          con.query(`UPDATE discord.postac SET xp=${xpp},miasto="karczma",gold=${kas} WHERE  IDdiscord=${message.author.id};`) ;
          message.channel.send("przygoda wygrana zdobyto "+potwor[lo].xp+" xp i "+potwor[lo].kasa+" golda"+enter+"walczono z "+potwor[lo].nazwa+" "+potwor[lo].klasa);
          var l = bohater[0].lvl;
          var pu = bohater[0].punk + xp[l].punkt;
          if(xp[l].xp<=xpp){ //lvl up
          var xpz = xpp - xp[l].xp;
          con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  IDdiscord=${message.author.id};`) ;
          con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  IDdiscord=${message.author.id};`) ;
          con.query(`UPDATE discord.postac SET punk=${pu} WHERE  IDdiscord=${message.author.id};`) ;
          message.channel.send("Twoja postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
            }  
        }
        else{
          con.query(`UPDATE discord.postac SET miasto="karczma" WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("przygoda przegrana"+enter+"walczono z "+potwor[lo].nazwa+" "+potwor[lo].klasa)
        }
      })
      }
      else if(miejscee == "miasto"){
        con.query("SELECT * FROM przeciwnik WHERE lvl<=500 AND lvl>=200;",(err,potwor)=>{
          if(err) throw err;
        var losprze = potwor.length ;
        var lo = Math.floor((Math.random() * losprze) + 0);
        if(walka(bohater,potwor,lo)==0){
          var xpp = potwor[lo].xp + bohater[0].xp;
          var kas = potwor[lo].kasa + bohater[0].gold;
          con.query(`UPDATE discord.postac SET xp=${xpp},miasto="karczma",gold${kas} WHERE  IDdiscord=${message.author.id};`) ;
          message.channel.send("przygoda wygrana zdobyto "+potwor[lo].xp+" xp i "+potwor[lo].kasa+" golda"+enter+"walczono z "+potwor[lo].nazwa+" "+potwor[lo].klasa);
          var l = bohater[0].lvl;
          var pu = bohater[0].punk + xp[l].punkt;
          if(xp[l].xp<=xpp){ //lvl up
          var xpz = xpp - xp[l].xp;
          con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  IDdiscord=${message.author.id};`) ;
          con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  IDdiscord=${message.author.id};`) ;
          con.query(`UPDATE discord.postac SET punk=${pu} WHERE  IDdiscord=${message.author.id};`) ;
          message.channel.send("Twoja postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
            }  
        }
        else{
          con.query(`UPDATE discord.postac SET miasto="karczma" WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("przygoda przegrana"+enter+"walczono z "+potwor[lo].nazwa+" "+potwor[lo].klasa)
        }
      })
      }
      })}})
  break;
  case "upg": //dodawanie punktów do postaci
      let[c0,c1,c2,c3,c4]=args;
      var war = [c0,c1,c2,c3,c4];
      war[1] = parseInt(war[1]);
      con.query(`SELECT hp,atak,punk,speed,krytyk,nazwa FROM postac WHERE  IDdiscord=${message.author.id};`,(err,stat)=>{
        if(err) throw err;
        if(stat.length == 0){
          message.channel.send("Stwórz postac prz pomocy komendy !postac");
        }
        else if(war[0]=="imie"){
          if(c1==undefined){
            message.channel.send("Podaj imie max 4 członowe np. !upg imie jan kowalski");
          }
          else if(war[1]!=undefined){
          for(var i=1;i<5;i++){
            if(war[i] == undefined){
              war[i] = " "
            } 
          }
          con.query(`UPDATE discord.postac SET nazwa="${war[1]+" "+war[2]+" "+war[3]+" "+war[4]}" WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("imie zostało zmienione")
        }}
        else{
        if(stat[0].punk == 0){
          message.channel.send("nimesz punktów do dodania");
        }
        else{
        if(stat[0].punk>=war[1]){
        var hpup = war[1] + stat[0].hp;
        var atakup = war[1] + stat[0].atak;
        var speedup = war[1] + stat[0].speed; 
        var krytykup = war[1] + stat[0].krytyk;
        var punk = stat[0].punk - war[1]
      if(war[0]!==undefined && war[1]!==undefined){
        if(war[0]=="hp"){
          con.query(`UPDATE discord.postac SET hp=${hpup} WHERE  IDdiscord=${message.author.id};`);
          con.query(`UPDATE discord.postac SET punk=${punk} WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("Dodanie hp się udało"+enter+""+stat[0].hp+"->"+hpup);
        }
        else if(war[0]=="atak"){
          con.query(`UPDATE discord.postac SET atak=${atakup} WHERE  IDdiscord=${message.author.id};`);
          con.query(`UPDATE discord.postac SET punk=${punk} WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("Dodanie atak się udało"+enter+""+stat[0].atak+"->"+atakup);
        }
        else if(war[0]=="speed"){
          con.query(`UPDATE discord.postac SET speed=${speedup} WHERE  IDdiscord=${message.author.id};`);
          con.query(`UPDATE discord.postac SET punk=${punk} WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("Dodanie speed się udało"+enter+""+stat[0].speed+"->"+speedup);
        }
        else if(war[0]=="krytyk"){
          con.query(`UPDATE discord.postac SET krytyk=${krytykup} WHERE  IDdiscord=${message.author.id};`);
          con.query(`UPDATE discord.postac SET punk=${punk} WHERE  IDdiscord=${message.author.id};`);
          message.channel.send("Dodanie krytyku się udało"+enter+""+stat[0].krytyk+"->"+krytykup);
        }
        else{
          message.channel.send("Podaj poprzwny parametr np. !upg hp 1");
        }
        
      }
      }
      else 
      {
       message.channel.send("Podaj właściwą liczbe punktów do dodania");
      }
    }}})
  break;
  case "rasa":
  let[zmiana,potwierdzenie]=args;
  con.query("SELECT * FROM rasa",(err,rows)=>{
    if(err) throw err;
    var t=0
    for(var i=0;i<rows.length;i++){
      if(zmiana == rows[i].rasa)
      t=1
    }
    if(t==1){
      con.query(`SELECT * FROM postac WHERE IDdiscord=${message.author.id}`,(err,postac)=>{
        if(err) throw err;
        if(potwierdzenie!="tak"){
          message.channel.send("Zmieniasz rase! Twój postęp zostanie utracony!"+enter+"Potwierdź decyzje pisząc !rasa "+zmiana+" tak");
        }
        else{
          con.query(`UPDATE discord.postac SET rasa="${zmiana}",hp=7,atak=5,xp=0,lvl=0,punk=0,speed=5,krytyk=1,krytykx=2,miasto="znak",klasa="brak" WHERE  IDdiscord=${message.author.id};`)
          message.channel.send("Zmiana postaci się udała");
        }
      })
    }
    else{
    for(var i=0;i<rows.length;i++){
      message.channel.send("rasa "+rows[i].rasa);
    }}
  })
  break;
  case "karczma":
    let[gles,akcja]=args;
    con.query("SELECT * FROM karczma",(err,rows)=>{
    if(err) throw err;
    con.query(`SELECT * FROM postac WHERE IDdiscord=${message.author.id}`,(err,bohater)=>{
    if(err) throw err;
    //console.log(rows)
    if(bohater[0].miasto != "karczma"){
      message.channel.send("Misisz być w karczmie. Napisz wpierw !go karczma")
    }
    else{
    var ii = 0;
    for(var i=0;i<rows.length;i++){
      if(gles == rows[i].ID){
        ii = i
      }
    }
    if(gles == undefined || gles != rows[ii].ID){
        message.channel.send("Witaj w karczmnie "+bohater[0].nazwa+". Są do wykonania questy!");
        for(var i=0;i<rows.length;i++){
          message.channel.send("|quest: "+rows[i].ID+" "+rows[i].quest+"|");
        }
        message.channel.send("żeby się dowiedzieć więcej o quest napis !karczma 'liczbe przy quest'");
    }
    else if(akcja=="start" || akcja=="dołącz"){
      if(akcja=="dołącz"){
          message.channel,send("wkrótce");
      }
      else{
          if(bohater.length == 0){
            message.channel.send("Stwórz postac prz pomocy komendy !postac");
          }
          else{
        con.query(`SELECT * FROM przeciwnik ;`,(err,potwor)=>{
          if(err) throw err;
        con.query(`SELECT * FROM karprze WHERE quest=${rows[ii].ID}`,(err,karcza)=>{
          if(err) throw err;
          var przeciwnikid = new Array();
          var ilość=0
          for(var i=0;i<karcza.length;i++){
            przeciwnikid[i] = karcza[i].przeciwnik;
            ilość +=karcza[i].ilość; 
          }
          var atakpo = bohater[0].hp;
          var atakbo = 1;
          var ilekryt = 0
          for(var a=0;a<karcza.length;a++){ //rodzaj przeciwnika
            var lo = przeciwnikid[a];
            // console.log(karcza[a]);
          for(var i=0;i<karcza[a].ilość;i++){ //ilość przeciwnika
            atakbo = potwor[a].hp;
            var aa = 0
            while(aa<1){
              //console.log(atakbo);
             // console.log(atakpo);
              if(atakbo >0 && atakpo >0){
                if(spid(bohater[0].speed,potwor[lo].speed) == 0){
                  if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
                    atakbo = atakbo - bohater[0].atak*bohater[0].krytykx; //atak postać 
                    atakpo = atakpo;
                    ilekryt+=1;
                    if(atakbo>0){
                      if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                        var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                        var atakbo = potwor[lo].hp;
                      }
                      else{
                        var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
                        var atakbo = potwor[lo].hp;
                      }
                    }
                  }
                  else{
                    atakbo = atakbo - bohater[0].atak;//atak postać 
                    atakpo = atakpo;
                    if(atakbo>0){
                      if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                        var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                        var atakbo = potwor[lo].hp;
                      }
                      else{
                        var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
                        var atakbo = potwor[lo].hp;
                      }
                    }
                  } 
                }
                else if(spid(bohater[0].speed,potwor[lo].speed) == 1){
                  if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                    atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                    atakbo = atakbo;
                    if(atakpo>0){
                      if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
                        var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
                        var atakpo = bohater[0].hp;
                      }
                      else{
                        var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
                        var atakpo = bohater[0].hp;
                      }
                    }
                  }
                  else{
                    atakpo = atakpo - potwor[lo].atak; //atak potwór
                    atakbo = atakbo;
                    if(atakpo>0){
                      if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
                        var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
                        var atakpo = bohater[0].hp;
                      }
                      else{
                        var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
                        var atakpo = bohater[0].hp;
                      }
                    }
                  }
                }
                else{
                if( szansanakryt(bohater[0].atak,bohater[0].krytyk)==1 && szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                  atakbo = atakbo - bohater[0].atak*bohater[0].krytykx; //atak postać 
                  atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                  ilekryt+=1;
                }
                else if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                  atakbo = atakbo - bohater[0].atak //atak postać 
                  atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx //atak potwór
                }
                else if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
                  atakbo = atakbo - bohater[0].atak*bohater[0].krytykx //atak postać 
                  atakpo = atakpo - potwor[lo].atak //atak potwór
                  ilekryt+=1;
                 }
                else{
                  atakbo = atakbo - bohater[0].atak //atak postać 
                  atakpo = atakpo - potwor[lo].atak //atak potwór
                }}
              }
              else{
                aa+=1;
              }
            }
            if(atakpo<=0){
              i=karcza[a].ilość;
            }
          }
          if(atakpo<=0){
          a=karcza.length;
        }
        }
          //console.log(atakbo);
          //console.log(atakpo);
          if(atakbo < 0 && atakpo >0){
            con.query(`SELECT * FROM xp `,(err,xp)=>{
            if(err) throw err;
            var xpp = rows[ii].xp + bohater[0].xp;
            con.query(`UPDATE discord.postac SET xp=${xpp} WHERE  IDdiscord=${message.author.id};`) ;
            message.channel.send("quest wykonany zdobyto "+rows[ii].xp+" xp");
            var l = bohater[0].lvl;
            var pu = bohater[0].punk + xp[l].punkt;
            //console.log(xpp);
            if(xp[l].xp<=xpp){ //lvl up
            var xpz = xpp - xp[l].xp;
            con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  IDdiscord=${message.author.id};`) ;
            con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  IDdiscord=${message.author.id};`) ;
            con.query(`UPDATE discord.postac SET punk=${pu} WHERE  IDdiscord=${message.author.id};`) ;
            message.channel.send("Twoja postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
            }  
          })}
          else{
            message.channel.send("quest niewykonany"+enter+"zostałeś pokonany")
          }
      })})}
      }
    }
    else if(gles == rows[ii].ID ){
      message.channel.send("Quset: "+rows[ii].quest+""+enter+"Opis: "+rows[ii].opis+""+enter+"Trudność: "+rows[ii].trudność+""+enter+"Wykonanie zadania da: "+rows[ii].xp+"xp"+enter+"Żeby wyruszyć na te przygoda napisz !karczma "+rows[ii].ID+" start")
    }
    }})});
    break;
    case "arena":
    let[arenu,akcjaa]=args; //numer areny
    con.query(`SELECT * FROM arena`,(err,arena)=>{
    if(err) throw err;
    con.query(`SELECT * FROM postac WHERE IDdiscord=${message.author.id}`,(err,postac)=>{
    if(err) throw err;
    if(postac[0].miasto != "arena"){
      message.channel.send("Misisz być w arenie. Napisz wpierw !go arena")
    }
    else{
      //console.log(arena)
      if(arena.length == 0 && arenu == undefined){
        message.channel.send("Nie ma żadnych aren!"+enter+"Stworzyć arene należy napisać !arena 'numer jaki chcesz'")
      }
      else{
      var ii = -1;
      var io = -1
      var are = 0;
      var ioo=0;
      for(var i=0;i<arena.length;i++){
        if(arenu == undefined){
          io = 1
        }
        else if(arenu==arena[i].IDarena){
          ii = i;
          io = 1
        }
        else if(arena[i].disname == postac[0].nazwa){
          are = 1;
          ioo =i;
        }
      }
     // console.log(io);
      if(io == -1){
        con.query(`SELECT ID,nazwa,lvl FROM postac WHERE IDdiscord=${message.author.id}`,(err,id)=>{
        //console.log(id);
        if(err) throw err;
        if(id.length == 0){
          message.channel.send("Stwórz postac prz pomocy komendy !postac");
        }
        else{
        if(are == 1){
          message.channel.send("Masz jusz arene pod numerem "+arena[ioo].IDarena);
        }
        else{
          var x;
          if(id[0].lvl < 50){
            x = 1;
          }
          else if(id[0].lvl <100){
            x=2;
          }
          else{
            x=3;
          }
        con.query(`INSERT INTO arena (IDarena,IDpostac,disname,xp) VALUES (${arenu},${id[0].ID},"${id[0].nazwa}",${id[0].lvl*x});`);
        message.channel.send("Dodanie areny się udało.");
        }}})
      }
      else if(arenu == undefined){
        for(var  i=0;i<arena.length;i++)
        message.channel.send("Arena "+arena[i].IDarena+" jest dostępna. Jest tam "+arena[i].disname);
      }
      else if(arenu == arena[ii].IDarena && akcjaa != "atak"){
        con.query(`SELECT * FROM postac WHERE ID=${arena[ii].IDpostac}`,(err,postac)=>{
        if(err) throw err;
        message.channel.send("Na arenie jest "+arena[ii].disname+""+enter+"Ma on "+postac[0].lvl+" lvl"+enter+"By walczyć z nim wpisz !arena "+arena[ii].IDarena+" atak")
      })
    }
    else if(akcjaa == "atak"){
      con.query(`SELECT * FROM postac WHERE ID=${arena[ii].IDpostac}`,(err,przeciwnik)=>{
        if(err) throw err;
        if(postac.length == 0){
          message.channel.send("Stwórz postac prz pomocy komendy !postac");
        }
        else{
        if(przeciwnik[0].ID == postac[0].ID){
          message.channel.send("Nie można sam siebie zaatakować");
        }
        else{
        var ilekryt = 0;
        var bohater = postac;
        var potwor = przeciwnik;
        var lo = 0;
        if(spid(bohater[0].speed,potwor[0].speed) == 0){
          if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
            var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
            var atakpo = bohater[0].hp;
            ilekryt+=1;
            if(atakbo>0){
              if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                var atakbo = potwor[lo].hp;
              }
              else{
                var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
                var atakbo = potwor[lo].hp;
              }
            }
          }
          else{
            var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
            var atakpo = bohater[0].hp;
            if(atakbo>0){
              if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                var atakbo = potwor[lo].hp;
              }
              else{
                var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
                var atakbo = potwor[lo].hp;
              }
            }
          } 
        }
        else if(spid(bohater[0].speed,potwor[0].speed) == 1){
          if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
            var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
            var atakbo = potwor[lo].hp;
            if(atakpo>0){
              if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
                var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
                var atakpo = bohater[0].hp;
              }
              else{
                var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
                var atakpo = bohater[0].hp;
              }
            }
          }
          else{
            var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
            var atakbo = potwor[lo].hp;
          }
        }
        else{
        if( szansanakryt(bohater[0].atak,bohater[0].krytyk)==1 && szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
          var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
          var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
          ilekryt+=1;
        }
        else if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
          var atakbo = potwor[lo].hp - bohater[0].atak //atak postać 
          var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx //atak potwór
        }
        else if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
          var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx //atak postać 
          var atakpo = bohater[0].hp - potwor[lo].atak //atak potwór
          ilekryt+=1;
         }
        else{
          var atakbo = potwor[lo].hp - bohater[0].atak //atak postać 
          var atakpo = bohater[0].hp - potwor[lo].atak //atak potwór
        }
        }
        var a=0
        while(a<1){
          if(atakbo >0 && atakpo >0){
            if(spid(bohater[0].speed,potwor[lo].speed) == 0){
              if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
                atakbo = atakbo - bohater[0].atak*bohater[0].krytykx; //atak postać 
                atakpo = atakpo;
                ilekryt+=1;
                if(atakbo>0){
                  if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                    var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                    var atakbo = potwor[lo].hp;
                  }
                  else{
                    var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
                    var atakbo = potwor[lo].hp;
                  }
                }
              }
              else{
                atakbo = atakbo - bohater[0].atak;//atak postać 
                atakpo = atakpo;
                if(atakbo>0){
                  if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                    var atakpo = bohater[0].hp - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                    var atakbo = potwor[lo].hp;
                  }
                  else{
                    var atakpo = bohater[0].hp - potwor[lo].atak; //atak potwór
                    var atakbo = potwor[lo].hp;
                  }
                }
              } 
             // console.log(atakbo);
              //console.log(atakpo);
              //console.log();
            }
            else if(spid(bohater[0].speed,potwor[lo].speed) == 1){
              if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
                atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
                atakbo = atakbo;
                if(atakpo>0){
                  if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
                    var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
                    var atakpo = bohater[0].hp;
                  }
                  else{
                    var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
                    var atakpo = bohater[0].hp;
                  }
                }
              }
              else{
                atakpo = atakpo - potwor[lo].atak; //atak potwór
                atakbo = atakbo;
                if(atakpo>0){
                  if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
                    var atakbo = potwor[lo].hp - bohater[0].atak*bohater[0].krytykx; //atak postać 
                    var atakpo = bohater[0].hp;
                  }
                  else{
                    var atakbo = potwor[lo].hp - bohater[0].atak;//atak postać 
                    var atakpo = bohater[0].hp;
                  }
                }
              }
              //console.log(atakbo);
              //console.log(atakpo);
              //console.log();
            }
            else{
            if( szansanakryt(bohater[0].atak,bohater[0].krytyk)==1 && szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
              atakbo = atakbo - bohater[0].atak*bohater[0].krytykx; //atak postać 
              atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx; //atak potwór
              ilekryt+=1;
            }
            else if(szansanakryt(potwor[0].atak,potwor[0].krytyk)==1){
              atakbo = atakbo - bohater[0].atak //atak postać 
              atakpo = atakpo - potwor[lo].atak*potwor[lo].krytykx //atak potwór
            }
            else if(szansanakryt(bohater[0].atak,bohater[0].krytyk)==1){
              atakbo = atakbo - bohater[0].atak*bohater[0].krytykx //atak postać 
              atakpo = atakpo - potwor[lo].atak //atak potwór
              ilekryt+=1;
             }
            else{
              atakbo = atakbo - bohater[0].atak //atak postać 
              atakpo = atakpo - potwor[lo].atak //atak potwór
            }}
          }
          else{
            a+=1;
            //console.log(1);
          }
        }
        if(atakbo <= 0 && atakpo >0){
          message.channel.send("Arena wygrana!")
          con.query(`SELECT * FROM xp`,(err,xp)=>{
            if(err) throw err;
            var xpp = arena[ii].xp + bohater[0].xp;
            con.query(`UPDATE discord.postac SET xp=${xpp} WHERE  IDdiscord=${message.author.id};`) ;
            var l = bohater[0].lvl;
            var pu = bohater[0].punk + xp[l].punkt;
            
            //console.log(xp[l].xp)
            if(xp[l].xp<=xpp){ //lvl up
            var xpz = xpp - xp[l].xp;
            con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  IDdiscord=${message.author.id};`) ;
            con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  IDdiscord=${message.author.id};`) ;
            con.query(`UPDATE discord.postac SET punk=${pu} WHERE  IDdiscord=${message.author.id};`) ;
            message.channel.send("Twoja postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
            }  
          con.query(`DELETE FROM arena WHERE IDarena=${arena[ii].IDarena}`);
          })
        }
        else if(atakbo <= 0 && atakpo <= 0 ){
          message.channel.send("Remis");
          con.query(`DELETE FROM arena WHERE IDarena=${arena[ii].IDarena}`);
        }
        else{
          message.channel.send("Arena przegrana!")
          con.query(`SELECT * FROM xp`,(err,xp)=>{
            if(err) throw err;
            var xpp = arena[ii].xp + bohater[0].xp;
            con.query(`UPDATE discord.postac SET xp=${xpp} WHERE  ID=${arena[ii].IDpostac};`) ;
            var l = bohater[0].lvl;
            var pu = bohater[0].punk + xp[l].punkt;
            
            //console.log(xp[l].xp)
            if(xp[l].xp<=xpp){ //lvl up
            var xpz = xpp - xp[l].xp;
            con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  ID=${arena[ii].IDpostac};`) ;
            con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  ID=${arena[ii].IDpostac};`) ;
            con.query(`UPDATE discord.postac SET punk=${pu} WHERE  ID=${arena[ii].IDpostac};`) ;
            message.channel.send(Arena[ii].disname+" postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
            } 
          con.query(`DELETE FROM arena WHERE IDarena=${arena[ii].IDarena}`);
          })
        }
      }
      }
      })
    }}
    }})})
    break;
    case "go": 
        let[miejsce]=args
        con.query("SELECT * FROM miasto",(err,miasto)=>{
          if(err) throw err;
          var ii = -1
          for(var i=0;i<miasto.length;i++){
            if(miejsce == miasto[i].miejsce){
              ii=i;
            }
          }
          if(ii==-1){
            message.channel.send("Możesz iść do następnych miejsc");
            for(var i=0;i<miasto.length;i++){
              message.channel.send("miejsce "+miasto[i].miejsce+" / opis: "+miasto[i].opis);
            }
          }
          else{
            if(miejsce == "znak"){
              con.query(`UPDATE discord.postac SET miasto="${miejsce}" WHERE  IDdiscord=${message.author.id};`)
              message.channel.send("Twoja postać jest teraz koło "+miejsce)
            }
          else{
            con.query(`UPDATE discord.postac SET miasto="${miejsce}" WHERE  IDdiscord=${message.author.id};`)
            message.channel.send("Twoja postać jest teraz w "+miejsce)
          }}
        })
    break;
    case "znak":
      con.query(`SELECT miasto FROM postac WHERE IDdiscord=${message.author.id}`,(err,postac)=>{
      if(err) throw err;
      if(postac.length == 0){
        message.channel.send("Stwóż postać najpierw np. !postać elf jan kowalski");
      }
      else if(postac[0].miasto != "znak"){
        message.channel.send("Musisz być koło znaku. Napisz wpierw !go znak")
      }
      else{
      message.channel.send("W tej chwili nic nie robi. Będzie coś robił w aktualizacja 'świat'.S");
    }})
    break;
    case "gildia-z":
      let[wybur,pw1]=args;
      con.query(`SELECT * FROM postac WHERE IDdiscord=${message.author.id}`,(err,postac)=>{
      if(err) throw err;
        if(postac.length == 0){
          message.channel.send("Stwóż postać najpierw np. !postać elf jan kowalski");
        }
        else if(postac[0].miasto != "gildia-z"){
          message.channel.send("Musisz być w gildi złodzieji. Napisz wpierw !go gildia-z")
        }
        else{
        con.query(`SELECT * FROM klasa WHERE miejsce="gildia"`,(err,gildia)=>{
        if(err) throw err;
        var piew = 0; //czy masz range w gildi
        var ii = 0; //jaka to ranga
        var it = 0;
        var iti ; // czy wybur jest poprawny
        for(var i=0;i<gildia.length;i++){
          if(postac[0].klasa == gildia[i].nazwa){
            ii = i;
          }
          else{
            piew=1+piew;
          }

          if(pw1 == gildia[i].nazwa){
            it = 1;
            iti = i;
          }
        }
          if(wybur==undefined){
            if(postac[0].klasa == "brak" && piew == gildia.length ){
                message.channel.send("Czego chcesz od gildi złodzieji "+postac[0].nazwa+". Jak chcesz się do nas zapisać okradnij kogoś !gildia-z kradnij")
              }
              else if(piew == gildia.length){
                message.channel.send("Czego chcesz od gildi złodzieji "+postac[0].nazwa+". Jak chcesz się do nas przenieś okradnij kogoś !gildia-z kradnij")
              }
              else if(piew != gildia.length){
                message.channel.send("No co "+postac[0].nazwa+". Informacje co w gildi można są pod !gildia-z help")
              }
          } 
          else if(postac[0].lvl <= 50){
            message.channel.send("Nie masz odpowiedniego poziomu by dołączyć. Poczebujesz 50lvl")
          }
          else if(piew == gildia.length || postac[0].klasa == "brak" ){//kradziesz i przystąpienie do gildi
            con.query(`SELECT * FROM przeciwnik WHERE ID=25`,(err,stprze)=>{
            if(err) throw err;
            if(postac[0].klasa == "brak"){//jeśli brak
              if(walka(postac,stprze)==0){
                message.channel.send("Kradziesz się udała! Jesteś teraz 'złodziejem-rekrutem'");
                var hp=gildia[2].hp+postac[0].hp;
                var atak=gildia[2].atak+postac[0].atak;
                var speed=gildia[2].speed+postac[0].speed;
                var krytyk=gildia[2].krytyk+postac[0].krytyk;
                con.query(`UPDATE discord.postac SET miasto="gildia-z",klasa="złodziej-rekrut",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk} WHERE  IDdiscord=${message.author.id};`); 
              }
              else{
                con.query(`UPDATE discord.postac SET miasto="gildia-z" WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Kradziesz nieudana");
                
              }
            }
            else{
              if(walka(postac,stprze)==0){
                con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                  if(err) throw err;
                var hp=gildia[2].hp+postac[0].hp-kla[0].hp;
                var atak=gildia[2].atak+postac[0].atak-kla[0].atak;
                var speed=gildia[2].speed+postac[0].speed-kla[0].speed;
                var krytyk=gildia[2].krytyk+postac[0].krytyk-kla[0].krytyk;
                var krytykx=gildia[2].krytykx
                con.query(`UPDATE discord.postac SET miasto="gildia-z",klasa="złodziej-rekrut",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Kradziesz się udała! Jesteś teraz 'złodziejem-rekrutem'");
                })
              }
              else{
                con.query(`UPDATE discord.postac SET miasto="gildia-z" WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Kradziesz nieudana");
              }
            }
          })
          }
          else if(wybur == "help"){
            message.channel.send("komendy do gildi złodzieji"+enter+"!gildia-z klasy - pokazuje jakie klasy możesz zdobyć"+enter+"!gildia-z 'ranga' - gdy chcesz awansować swoją klasa");
          }
          else if(wybur == "klasy"){
            if(it==1){
              message.channel.send("klasa "+gildia[iti].nazwa+" daje ("+gildia[iti].hp+" hp) ("+gildia[iti].atak+" atak) ("+gildia[iti].speed+" speed) ("+gildia[iti].krytyk+" krytk) ("+gildia[iti].krytykx+" mnożnik krytyka)");
            }
            else if(postac[0].klasa == "złodziej-rekrut"){
              message.channel.send("Masz do wyboru 3 ścieżki:"+enter+"a) - 1 stopień - złodziej , 2 stopień - starszy-złodziej, 3 stopień - epicki-złodziej"+enter+"b) - 1 stopień - zabójca, 2 stopień - starszy-zabójca, 3 stopień - epicki-zabójca"+enter+"c) - 1 stopień - buntownik, 2 stopień - oprych, 3 stopień - zbój"+enter+"więcej informacji o danej klase pod !gildia-z klasy (dana klasa)");
            }
            else{
              var liczba = gildia[ii].pozycja/10;
              var rescza = gildia[ii].pozycja%10;
              var liczba = liczba * 10;
              var rescza = liczba + rescza
              var liczba = liczba + 9;
              var p =1;
              for(var i=0;i<gildia.length;i++){
                if(rescza<gildia[i].pozycja && gildia[i].pozycja <liczba){
                  if(p<2){
                  message.channel.send("Możesz ulepszyć na klasa "+gildia[i].nazwa);
                  p=p+1;}
                  else{
                    message.channel.send("Puźniej ulepszyć na klasa "+gildia[i].nazwa);
                  }
                }
              }
            }
          }
          else if(wybur == "ranga"){
            if(it==0){
              message.channel.send("Podaj właściwą klase np !gildia-z ranga złodziej");
            }
            else{
              if(postac[0].klasa == "złodziej-rekrut"){
                if(postac[0].lvl<100){
                  message.channel.send("Nie masz odpowiedniego poziomu by zdobyć wyższą klase. Poczebujesz 100lvl")
                }
                else{
                if(pw1 == "złodziej" || pw1 == "zabójca" || pw1 == "buntownik"){
                
              con.query(`SELECT * FROM przeciwnik WHERE nazwa="${pw1}"`,(err,przeciwnik)=>{
                if(err) throw err;
                if(walka(postac,przeciwnik)==0){
                  con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                    if(err) throw err;
                  var hp=gildia[iti].hp+postac[0].hp-kla[0].hp;
                  var atak=gildia[iti].atak+postac[0].atak-kla[0].atak;
                  var speed=gildia[iti].speed+postac[0].speed-kla[0].speed;
                  var krytyk=gildia[iti].krytyk+postac[0].krytyk-kla[0].krytyk;
                  var krytykx=gildia[iti].krytykx
                  con.query(`UPDATE discord.postac SET miasto="gildia-z",klasa="${pw1}",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Awans na wyszą klase się udała! Jesteś teraz '"+pw1+"'");
                  })
                }
                else{
                  con.query(`UPDATE discord.postac SET miasto="gildia-z" WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Próba awansu nieudana");
                }
              })}
              else{
                message.channel.send("Podaj właściwą klasa! Jedną z 3: złodziej, zabójca, buntownik ")
              }}
            }
            else{
              if(gildia[ii].pozycja%10!=2){
              var liczba = gildia[ii].pozycja;
              var rescza = liczba + 1;
              if((Math.round(gildia[ii].pozycja/10))==(Math.round(gildia[iti].pozycja/10))){
              con.query(`SELECT * FROM przeciwnik WHERE nazwa="${pw1}"`,(err,przeciwnik)=>{
                if(err) throw err;
                if(postac[0].lvl < gildia[iti].lvlmin){
                  message.channel.send("Nie masz odpowiedniego poziomu by zdobyć wyższą klase. Poczebujesz "+gildia[iti].lvlmin+"lvl")
                }
                else{
                if(walka(postac,przeciwnik)==0){
                  con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                    if(err) throw err;
                  var hp=gildia[iti].hp+postac[0].hp-kla[0].hp;
                  var atak=gildia[iti].atak+postac[0].atak-kla[0].atak;
                  var speed=gildia[iti].speed+postac[0].speed-kla[0].speed;
                  var krytyk=gildia[iti].krytyk+postac[0].krytyk-kla[0].krytyk;
                  var krytykx=gildia[iti].krytykx
                  con.query(`UPDATE discord.postac SET miasto="gildia-z",klasa="${pw1}",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Awans na wyszą klase się udała! Jesteś teraz '"+pw1+"'");
                  })
                }
                else{
                  con.query(`UPDATE discord.postac SET miasto="gildia-z" WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Próba awansu nieudana");
                }}
              })
              }
              else{
                message.channel.send("Podaj właściwą nazwe klasy!")
              }
            }
              else{
                message.channel.send("Masz najwyszy poziom klasy");
              }
            }
            }
          }
          
        })
        }
      })
    break;
    case "akademia":
    let[wybur1,pw2]=args;
      con.query(`SELECT * FROM postac WHERE IDdiscord=${message.author.id}`,(err,postac)=>{
      if(err) throw err;
        if(postac.length == 0){
          message.channel.send("Stwóż postać najpierw np. !postać elf jan kowalski");
        }
        else if(postac[0].miasto != "akademia"){
          message.channel.send("Musisz być w akademi. Napisz wpierw !go akademia")
        }
        else{
        con.query(`SELECT * FROM klasa WHERE miejsce="akademia"`,(err,gildia)=>{ //gildia - akademia
        if(err) throw err;
        var piew = 0; //czy masz range w gildi
        var ii = 0; //jaka to ranga
        var it = 0;
        var iti ; // czy wybur jest poprawny
        for(var i=0;i<gildia.length;i++){
          if(postac[0].klasa == gildia[i].nazwa){
            ii = i;
          }
          else{
            piew=1+piew;
          }

          if(pw2 == gildia[i].nazwa){
            it = 1;
            iti = i;
          }
        }
          if(wybur1==undefined){
            if(postac[0].klasa == "brak" && piew == gildia.length ){
                message.channel.send("Witamy się w akademi "+postac[0].nazwa+". Czy chcesz do nas dołączyć napisz !akademia dołącz")
              }
              else if(piew == gildia.length){
                message.channel.send("Witamy się w akademi "+postac[0].nazwa+". Jak chcesz się do nas przenieś !akademia dołącz")
              }
              else if(piew != gildia.length){
                message.channel.send("Witaj ponownie "+postac[0].nazwa+". Informacje co w akademi można robić są pod !akademia help")
              }
          }
          else if(postac[0].lvl <= 50){
            message.channel.send("Nie masz odpowiedniego poziomu by dołączyć. Poczebujesz 50lvl")
          }
          else if(piew == gildia.length || postac[0].klasa == "brak" ){//pzystąpienie do akademi
            con.query(`SELECT * FROM przeciwnik WHERE ID=34`,(err,stprze)=>{
            if(err) throw err;
            if(postac[0].klasa == "brak"){//jeśli brak
              if(walka(postac,stprze)==0){
                message.channel.send("Dołączenie się udało! Jesteś teraz 'mag-rekrutem'");
                var hp=gildia[0].hp+postac[0].hp;
                var atak=gildia[0].atak+postac[0].atak;
                var speed=gildia[0].speed+postac[0].speed;
                var krytyk=gildia[0].krytyk+postac[0].krytyk;
                con.query(`UPDATE discord.postac SET miasto="akademia",klasa="mag-rekrut",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk} WHERE  IDdiscord=${message.author.id};`); 
              }
              else{
                con.query(`UPDATE discord.postac SET miasto="akademia" WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Dołączenie nieudana");
                
              }
            }
            else{
              if(walka(postac,stprze)==0){
                con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                  if(err) throw err;
                var hp=gildia[0].hp+postac[0].hp-kla[0].hp;
                var atak=gildia[0].atak+postac[0].atak-kla[0].atak;
                var speed=gildia[0].speed+postac[0].speed-kla[0].speed;
                var krytyk=gildia[0].krytyk+postac[0].krytyk-kla[0].krytyk;
                var krytykx=gildia[0].krytykx
                con.query(`UPDATE discord.postac SET miasto="akademia",klasa="mag-rekrut",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Dołaczenie się udała! Jesteś teraz 'mag-rekrutem'");
                })
              }
              else{
                con.query(`UPDATE discord.postac SET miasto="akademia" WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Dołączenie nieudana");
              }
            }
          })
          }
          else if(wybur1 == "help"){
            message.channel.send("Komendy do akademi"+enter+"!akademia klasy - pokazuje jakie klasy możesz zdobyć"+enter+"!akademia 'ranga' - gdy chcesz awansować swoją klasa");
          }
          else if(wybur1 == "klasy"){
            if(it==1){
              message.channel.send("klasa "+gildia[iti].nazwa+" daje ("+gildia[iti].hp+" hp) ("+gildia[iti].atak+" atak) ("+gildia[iti].speed+" speed) ("+gildia[iti].krytyk+" krytk) ("+gildia[iti].krytykx+" mnożnik krytyka)");
            }
            else if(postac[0].klasa == "mag-rekrut"){
              message.channel.send("Masz do wyboru 4 ścieżki:"+enter+"a) - 1 stopień - mag-ognia , 2 stopień - starszy-mag-ognia, 3 stopień - epicki-mag-ognia"+enter+"b) - 1 stopień - mag-wody, 2 stopień - starszy-mag-wody, 3 stopień - epicki-mag-wody"+enter+"c) - 1 stopień - mag-ziemi, 2 stopień - starszy-mag-ziemi, 3 stopień - epicki-mag-wody"+enter+"d) - 1 stopień - mag-powietrza, 2 stopień - starszy-mag-powietrza, 3 stopień - epicki-mag-powietrza"+enter+"więcej informacji o danej klase pod !gildia-z klasa (dana klasa)");
            }
            else{
              var liczba = gildia[ii].pozycja/10;
              var rescza = gildia[ii].pozycja%10;
              var liczba = liczba * 10;
              var rescza = liczba + rescza
              var liczba = liczba + 9;
              var p =1;
              for(var i=0;i<gildia.length;i++){
                if(rescza<gildia[i].pozycja && gildia[i].pozycja <liczba){
                  if(p<2){
                  message.channel.send("Możesz ulepszyć na klasa "+gildia[i].nazwa);
                  p=p+1;}
                  else{
                    message.channel.send("Puźniej ulepszyć na klasa "+gildia[i].nazwa);
                  }
                }
              }
            }
          }
          else if(wybur1 == "ranga"){
            if(it==0){
              message.channel.send("Podaj właściwą klase np !akademia ranga mag-ognia");
            }
            else{
              if(postac[0].klasa == "mag-rekrut"){
                if(postac[0].lvl<100){
                  message.channel.send("Nie masz odpowiedniego poziomu by zdobyć wyższą klase. Poczebujesz 100lvl")
                }
                else{
                if(pw2 == "mag-ognia" || pw2 == "mag-wody" || pw2 == "mag-ziemi" || pw2=="mag-powietrza"){
              con.query(`SELECT * FROM przeciwnik WHERE nazwa="${pw2}"`,(err,przeciwnik)=>{
                if(err) throw err;
                if(walka(postac,przeciwnik)==0){
                  con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                    if(err) throw err;
                  var hp=gildia[iti].hp+postac[0].hp-kla[0].hp;
                  var atak=gildia[iti].atak+postac[0].atak-kla[0].atak;
                  var speed=gildia[iti].speed+postac[0].speed-kla[0].speed;
                  var krytyk=gildia[iti].krytyk+postac[0].krytyk-kla[0].krytyk;
                  var krytykx=gildia[iti].krytykx
                  con.query(`UPDATE discord.postac SET miasto="akademia",klasa="${pw2}",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Awans na wyszą klase się udała! Jesteś teraz '"+pw2+"'");
                  })
                }
                else{
                  con.query(`UPDATE discord.postac SET miasto="akademia" WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Próba awansu nieudana");
                }
              })}
              else{
                message.channel.send("Podaj właściwą klasa! Jedną z 3: mag-ognia, mag-wody, mag-ziemi, mag-powietrza")
              }
            }}
            else{
              if(gildia[ii].pozycja%10!=2){
              var liczba = gildia[ii].pozycja;
              var rescza = liczba + 1;
              if((Math.round(gildia[ii].pozycja/10))==(Math.round(gildia[iti].pozycja/10))){
              con.query(`SELECT * FROM przeciwnik WHERE nazwa="${pw2}"`,(err,przeciwnik)=>{
                if(err) throw err;
                if(postac[0].lvl < gildia[iti].lvlmin){
                  message.channel.send("Nie masz odpowiedniego poziomu by zdobyć wyższą klase. Poczebujesz "+gildia[iti].lvlmin+"lvl")
                }
                else{
                if(walka(postac,przeciwnik)==0){
                  con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                    if(err) throw err;
                  var hp=gildia[iti].hp+postac[0].hp-kla[0].hp;
                  var atak=gildia[iti].atak+postac[0].atak-kla[0].atak;
                  var speed=gildia[iti].speed+postac[0].speed-kla[0].speed;
                  var krytyk=gildia[iti].krytyk+postac[0].krytyk-kla[0].krytyk;
                  var krytykx=gildia[iti].krytykx
                  con.query(`UPDATE discord.postac SET miasto="akademia",klasa="${pw2}",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Awans na wyszą klase się udała! Jesteś teraz '"+pw2+"'");
                  })
                }
                else{
                  con.query(`UPDATE discord.postac SET miasto="akademia" WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Próba awansu nieudana");
                }
              }})
              }
              else{
                message.channel.send("Podaj właściwą nazwe klasy!")
              }
            }
              else{
                message.channel.send("Masz najwyszy poziom klasy");
              }
            }
            }
          }
        })
        }
      })
    break;
    case "koszary":
    let[wybur2,pw3]=args;
    con.query(`SELECT * FROM postac WHERE IDdiscord=${message.author.id}`,(err,postac)=>{
    if(err) throw err;
      if(postac.length == 0){
        message.channel.send("Stwóż postać najpierw np. !postać elf jan kowalski");
      }
      else if(postac[0].miasto != "koszary"){
        message.channel.send("Musisz być w koszary. Napisz wpierw !go koszary")
      }
      else{
      con.query(`SELECT * FROM klasa WHERE miejsce="koszary"`,(err,gildia)=>{ //gildia - koszary
      if(err) throw err;
      var piew = 0; //czy masz range w gildi
      var ii = 0; //jaka to ranga
      var it = 0;
      var iti ; // czy wybur jest poprawny
      for(var i=0;i<gildia.length;i++){
        if(postac[0].klasa == gildia[i].nazwa){
          ii = i;
        }
        else{
          piew=1+piew;
        }

        if(pw3 == gildia[i].nazwa){
          it = 1;
          iti = i;
        }
      }
        if(wybur2==undefined){
          if(postac[0].klasa == "brak" && piew == gildia.length ){
              message.channel.send("Dziędobry rekrucie. Dołączasz do nas? (napisz !koszary dołącz)")
            }
            else if(piew == gildia.length){
              message.channel.send("Witamy cię w koszarach "+postac[0].nazwa+". Jak chcesz się do nas przenieś !koszary dołącz")
            }
            else if(piew != gildia.length){
              message.channel.send("Witaj ponownie "+postac[0].nazwa+". Informacje co w koszarach można robić są pod !koszary help")
            }
        }
        else if(postac[0].lvl <= 50){
          message.channel.send("Nie masz odpowiedniego poziomu by dołączyć. Poczebujesz 50lvl")
        } 
        else if(piew == gildia.length || postac[0].klasa == "brak" ){//pzystąpienie do akademi
          con.query(`SELECT * FROM przeciwnik WHERE ID=62`,(err,stprze)=>{
          if(err) throw err;
          if(postac[0].klasa == "brak"){//jeśli brak
            if(walka(postac,stprze)==0){
              message.channel.send("Dołączenie się udało! Jesteś teraz 'rekrutem'");
              var hp=gildia[0].hp+postac[0].hp;
              var atak=gildia[0].atak+postac[0].atak;
              var speed=gildia[0].speed+postac[0].speed;
              var krytyk=gildia[0].krytyk+postac[0].krytyk;
              con.query(`UPDATE discord.postac SET miasto="koszary",klasa="rekrut",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk} WHERE  IDdiscord=${message.author.id};`); 
            }
            else{
              con.query(`UPDATE discord.postac SET miasto="koszary" WHERE  IDdiscord=${message.author.id};`);
              message.channel.send("Dołączenie nieudana");
              
            }
          }
          else{
            if(walka(postac,stprze)==0){
              con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                if(err) throw err;
              var hp=gildia[0].hp+postac[0].hp-kla[0].hp;
              var atak=gildia[0].atak+postac[0].atak-kla[0].atak;
              var speed=gildia[0].speed+postac[0].speed-kla[0].speed;
              var krytyk=gildia[0].krytyk+postac[0].krytyk-kla[0].krytyk;
              var krytykx=gildia[0].krytykx
              con.query(`UPDATE discord.postac SET miasto="koszary",klasa="rekrut",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
              message.channel.send("Dołaczenie się udała! Jesteś teraz 'rekrutem'");
              })
            }
            else{
              con.query(`UPDATE discord.postac SET miasto="koszary" WHERE  IDdiscord=${message.author.id};`);
              message.channel.send("Dołączenie nieudana");
            }
          }
        })
        }
        else if(wybur2 == "help"){
          message.channel.send("Komendy do koszary"+enter+"!koszary klasy - pokazuje jakie klasy możesz zdobyć"+enter+"!koszary 'ranga' - gdy chcesz awansować swoją klasa");
        }
        else if(wybur2 == "klasy"){
          if(it==1){
            message.channel.send("klasa "+gildia[iti].nazwa+" daje ("+gildia[iti].hp+" hp) ("+gildia[iti].atak+" atak) ("+gildia[iti].speed+" speed) ("+gildia[iti].krytyk+" krytk) ("+gildia[iti].krytykx+" mnożnik krytyka)");
          }
          else if(postac[0].klasa == "rekrut"){
            message.channel.send("Masz do wyboru 3 ścieżki oraz 5 podścieżek:"+enter+"A) - 1 stopień - rycerz ,"+enter+"a) 2 stopień - cięszkozbrojny-rycerz, |3 stopień - epicki-cięszkozbrojny-rycerz"+enter+"b) 2 stopień - samuraj,| 3 stopień - epicki-samuraj"+enter+"c) 2 stopień - lekkozbrojny-rycerz,| 3 stopień - epicki-lekkozbrojny-rycerz"+enter+"B) - 1 stopień - jeździec,"+enter+"a) 2 stopień - cięszkozbrojny-jeździec,| 3 stopień - epicki-cięszkozbrojny-jeździec"+enter+"b) 2 stopień - lekkozbrojny-jeździec,| 3 stopień - epicki-lekkkozbrojny-jeździec"+enter+"C) - 1 stopień - łucznik,| 2 stopień - starszy-łucznik,| 3 stopień - epicki-łucznik"+enter+"więcej informacji o danej klase pod !gildia-z klasy (dana klasa)");
          }
          else if(postac[0].klasa == "rycerz"){
            message.channel.send("Masz do wyboru 3 ścieżki:"+enter+"a) 2 stopień - cięszkozbrojny-rycerz,| 3 stopień - epicki-cięszkozbrojny-rycerz"+enter+"b) 2 stopień - samuraj,| 3 stopień - epicki-samuraj"+enter+"c) 2 stopień - lekkozbrojny-rycerz,| 3 stopień - epicki-lekkozbrojny-rycerz");
          }
          else if(postac[0].klasa == "jeździec"){
            message.channel.send("Masz do wyboru 2 ścieżki:"+enter+"a) 2 stopień - cięszkozbrojny-jeździec,| 3 stopień - epicki-cięszkozbrojny-jeździec"+enter+"b) stopień - lekkozbrojny-jeździec,| 3 stopień - epicki-lekkkozbrojny-jeździec");
          }
          else {
            var liczba = gildia[ii].pozycja/10;
            var rescza = gildia[ii].pozycja%10;
            var liczba = liczba * 10;
            var rescza = liczba + rescza
            var liczba = liczba + 9;
            var p =1;
            for(var i=0;i<gildia.length;i++){
              if(rescza<gildia[i].pozycja && gildia[i].pozycja <liczba){
                if(p<2){
                message.channel.send("Możesz ulepszyć na klasa "+gildia[i].nazwa);
                p=p+1;}
                else{
                  message.channel.send("Puźniej ulepszyć na klasa "+gildia[i].nazwa);
                }
              }
            }
          }
        }
        else if(wybur2 == "ranga"){
          if(it==0){
            message.channel.send("Podaj właściwą klase np !koszary ranga rycerz");
          }
          else{
            if(postac[0].klasa == "rekrut"){
              if(postac[0].lvl<100){
                message.channel.send("Nie masz odpowiedniego poziomu by zdobyć wyższą klase. Poczebujesz 100lvl")
              }
              else{
              if(pw3 == "rycerz" || pw3 == "jeździec" || pw3 == "łucznik"){
            con.query(`SELECT * FROM przeciwnik WHERE nazwa="${pw3}"`,(err,przeciwnik)=>{
              if(err) throw err;
              if(walka(postac,przeciwnik)==0){
                con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                  if(err) throw err;
                var hp=gildia[iti].hp+postac[0].hp-kla[0].hp;
                var atak=gildia[iti].atak+postac[0].atak-kla[0].atak;
                var speed=gildia[iti].speed+postac[0].speed-kla[0].speed;
                var krytyk=gildia[iti].krytyk+postac[0].krytyk-kla[0].krytyk;
                var krytykx=gildia[iti].krytykx
                con.query(`UPDATE discord.postac SET miasto="koszary",klasa="${pw3}",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Awans na wyszą klase się udała! Jesteś teraz '"+pw3+"'");
                })
              }
              else{
                con.query(`UPDATE discord.postac SET miasto="koszary" WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Próba awansu nieudana");
              }
            })}
            else{
              message.channel.send("Podaj właściwą klasa! Jedną z 3: rycerz, jeździec, łucznik")
            }
          }}
          else if(postac[0].klasa == "rycerz"){
            if(postac[0].lvl<200){
              message.channel.send("Nie masz odpowiedniego poziomu by zdobyć wyższą klase. Poczebujesz 200lvl")
            }
            else{
            if(pw3 == "cięszkozbrojny-rycerz" || pw3 == "samuraj" || pw3 == "lekkozbrojny-rycerz"){
              con.query(`SELECT * FROM przeciwnik WHERE nazwa="${pw3}"`,(err,przeciwnik)=>{
                if(err) throw err;
                if(walka(postac,przeciwnik)==0){
                  con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                    if(err) throw err;
                  var hp=gildia[iti].hp+postac[0].hp-kla[0].hp;
                  var atak=gildia[iti].atak+postac[0].atak-kla[0].atak;
                  var speed=gildia[iti].speed+postac[0].speed-kla[0].speed;
                  var krytyk=gildia[iti].krytyk+postac[0].krytyk-kla[0].krytyk;
                  var krytykx=gildia[iti].krytykx
                  con.query(`UPDATE discord.postac SET miasto="koszary",klasa="${pw3}",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Awans na wyszą klase się udała! Jesteś teraz '"+pw3+"'");
                  })
                }
                else{
                  con.query(`UPDATE discord.postac SET miasto="koszary" WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Próba awansu nieudana");
                }
              })}
              else{
                message.channel.send("Podaj właściwą klasa! Jedną z 3: cięszkozbrojny-rycerz, samuraj, lekkozbrojny-rycerz")
              }
          }}
          else if(postac[0].klasa == "jeździec"){
            if(postac[0].lvl<200){
              message.channel.send("Nie masz odpowiedniego poziomu by zdobyć wyższą klase. Poczebujesz 100lvl")
            }
            else{
            if(pw3 == "cięszkozbrojny-jeździec" || pw3 == "lekkozbrojny-jeździec" ){
              con.query(`SELECT * FROM przeciwnik WHERE nazwa="${pw3}"`,(err,przeciwnik)=>{
                if(err) throw err;
                if(walka(postac,przeciwnik)==0){
                  con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                    if(err) throw err;
                  var hp=gildia[iti].hp+postac[0].hp-kla[0].hp;
                  var atak=gildia[iti].atak+postac[0].atak-kla[0].atak;
                  var speed=gildia[iti].speed+postac[0].speed-kla[0].speed;
                  var krytyk=gildia[iti].krytyk+postac[0].krytyk-kla[0].krytyk;
                  var krytykx=gildia[iti].krytykx
                  con.query(`UPDATE discord.postac SET miasto="koszary",klasa="${pw3}",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Awans na wyszą klase się udała! Jesteś teraz '"+pw3+"'");
                  })
                }
                else{
                  con.query(`UPDATE discord.postac SET miasto="koszary" WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("Próba awansu nieudana");
                }
              })}
              else{
                message.channel.send("Podaj właściwą klasa! Jedną z 3: cięszkozbrojny-jeździec, lekkozbrojny-jeździec")
              }
          }}
          else{
            if(gildia[ii].pozycja%10!=1){
            var liczba = gildia[ii].pozycja;
            var rescza = liczba + 1;
            if((Math.round(gildia[ii].pozycja/10))==(Math.round(gildia[iti].pozycja/10))){
            con.query(`SELECT * FROM przeciwnik WHERE nazwa="${pw3}"`,(err,przeciwnik)=>{
              if(err) throw err;
              if(postac[0].lvl < gildia[iti].lvlmin){
                message.channel.send("Nie masz odpowiedniego poziomu by zdobyć wyższą klase. Poczebujesz "+gildia[iti].lvlmin+"lvl")
              }
              else{
              if(walka(postac,przeciwnik)==0){
                con.query(`SELECT * FROM klasa WHERE nazwa="${postac[0].klasa}"`,(err,kla)=>{
                  if(err) throw err;
                var hp=gildia[iti].hp+postac[0].hp-kla[0].hp;
                var atak=gildia[iti].atak+postac[0].atak-kla[0].atak;
                var speed=gildia[iti].speed+postac[0].speed-kla[0].speed;
                var krytyk=gildia[iti].krytyk+postac[0].krytyk-kla[0].krytyk;
                var krytykx=gildia[iti].krytykx
                con.query(`UPDATE discord.postac SET miasto="koszary",klasa="${pw3}",hp=${hp},atak=${atak},speed=${speed},krytyk=${krytyk},krytykx=${krytykx} WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Awans na wyszą klase się udała! Jesteś teraz '"+pw3+"'");
                })
              }
              else{
                con.query(`UPDATE discord.postac SET miasto="koszary" WHERE  IDdiscord=${message.author.id};`);
                message.channel.send("Próba awansu nieudana");
              }
            }})
            }
            else{
              message.channel.send("Podaj właściwą nazwe klasy!")
            }
          }
            else{
              message.channel.send("Masz najwyszy poziom klasy");
            }
          }
          }
        }
      })
      }
    })
    break;
    case "trening":
    con.query(`SELECT * FROM postac WHERE IDdiscord=${message.author.id}`,(err,postac)=>{
      if(err) throw err;
        if(postac.length == 0){
          message.channel.send("Stwóż postać najpierw np. !postać elf jan kowalski");
        }
        else if(postac[0].miasto != "trening"){
          message.channel.send("Musisz być w trening. Napisz wpierw !go trening")
        }
        else{
          con.query("SELECT xp,punkt FROM xp",(err,xp)=>{
            if(err) throw err;
            if(postac[0].lvl < 11){
              con.query(`SELECT * FROM przeciwnik WHERE lvl<=10;`,(err,przeciwnik)=>{
                if(err) throw err;
                var losprze = przeciwnik.length ;
                var lo = Math.floor((Math.random() * losprze) + 0);
                if(walka(postac,przeciwnik,lo)==0){
                  var xpp = przeciwnik[lo].xp + postac[0].xp;
                  con.query(`UPDATE discord.postac SET xp=${xpp},miasto="trening" WHERE  IDdiscord=${message.author.id};`) ;
                  message.channel.send("przygoda wygrana zdobyto "+przeciwnik[lo].xp+" xp"+enter+"walczono z "+przeciwnik[lo].nazwa+" "+przeciwnik[lo].klasa);
                  var l = postac[0].lvl;
                  var pu = postac[0].punk + xp[l].punkt;
                  if(xp[l].xp<=xpp){ //lvl up
                  var xpz = xpp - xp[l].xp;
                  con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  IDdiscord=${message.author.id};`) ;
                  con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  IDdiscord=${message.author.id};`) ;
                  con.query(`UPDATE discord.postac SET punk=${pu} WHERE  IDdiscord=${message.author.id};`) ;
                  message.channel.send("Twoja postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
                    }  
                }
                else{
                  con.query(`UPDATE discord.postac SET miasto="trening" WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("przygoda przegrana"+enter+"walczono z "+przeciwnik[lo].nazwa+" "+przeciwnik[lo].klasa)
                }
              })
            }
            else if(postac[0].lvl < 50){
              con.query(`SELECT * FROM przeciwnik WHERE lvl<50 AND lvl>10;`,(err,przeciwnik)=>{
                if(err) throw err;
                var losprze = przeciwnik.length ;
                var lo = Math.floor((Math.random() * losprze) + 0);
                if(walka(postac,przeciwnik,lo)==0){
                  var xpp = przeciwnik[lo].xp + postac[0].xp;
                  con.query(`UPDATE discord.postac SET xp=${xpp},miasto="trening" WHERE  IDdiscord=${message.author.id};`) ;
                  message.channel.send("przygoda wygrana zdobyto "+przeciwnik[lo].xp+" xp"+enter+"walczono z "+przeciwnik[lo].nazwa+" "+przeciwnik[lo].klasa);
                  var l = postac[0].lvl;
                  var pu = postac[0].punk + xp[l].punkt;
                  if(xp[l].xp<=xpp){ //lvl up
                  var xpz = xpp - xp[l].xp;
                  con.query(`UPDATE discord.postac SET lvl=${l+1} WHERE  IDdiscord=${message.author.id};`) ;
                  con.query(`UPDATE discord.postac SET xp=${xpz} WHERE  IDdiscord=${message.author.id};`) ;
                  con.query(`UPDATE discord.postac SET punk=${pu} WHERE  IDdiscord=${message.author.id};`) ;
                  message.channel.send("Twoja postać ma teraz wyszy lvl "+l+" -> "+(l+1)+" uzyskała "+xp[l].punkt+" punktów umiejętności");
                    }  
                }
                else{
                  con.query(`UPDATE discord.postac SET miasto="trening" WHERE  IDdiscord=${message.author.id};`);
                  message.channel.send("przygoda przegrana"+enter+"walczono z "+przeciwnik[lo].nazwa+" "+przeciwnik[lo].klasa)
                }
              })
            }
            else{
              message.channel.send("Masz zaduży lvl by być na treningu");
          }})
        }
      })
    break;
    case "gildia-pp":
      message.channel.send("wkrótce");
    break;
    case "sklep":
      message.channel.send("wkrótce");
    break;