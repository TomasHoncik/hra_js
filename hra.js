let dvere = Math.floor(Math.random() * 10)
let brneni = false



alert("Pro začátek si otevři konzoli")


console.log("Vítej, dobrodruhu, na planetě X, domově poklidné civilizace Xenonů.")
console.log("Slyšel jsem o tvém příchodu, kterým se naděje obrací k nám všem. Jsem Hadrian, strážce tajemství a moudrosti této země a mám pro tebe úkol.")

console.log("Temné nebezpečí hrozí této krásné planetě. Zlověstný Energico, energetický parazit, pronikl do našeho světa a hrozí zničením veškerého života.")
console.log("Tvůj úkol je jednoznačný, hrdino. Posbírej brnění, naostři si meč a zachraň náš svět.")
alert("Jsi připraven?")

console.log("Ještě počkej, mám pro tebe dárek.") 
console.log("*vytáhne meč*")
console.log("Tento meč byl uložen v bezpečí mého chrámu, čekajíc na hrdinu, který přinese světlo do naší temné doby.") 
console.log("Bohužel jsem již starý a nemám sílu, proto jsem ti ho nemohl naostřit. To tedy bude tvým prvním úkolem") 

console.log("Naostři si meč ale pozor pokud meč naostříš málo nebo  až příliš bude ti k ničemu.")

while (true) {
    let mec = prompt("podržením libovolné klávesy dostatečně dlouho naostříš meč: ")
    if (mec.length <= 10){
        console.log("Naostřil jsi meč příliš málo, zkus to znovu")
    }
    else if(mec.length >= 30){
        console.log("Naostřil jsi meč až příliš, zkus to znovu")
    }
    else{
        console.log("Meč jsi naostřil skvěle")
        break
    }
}



console.log("Výtečně, vidím, že naše naděje nebyly mylné. Tvůj meč je ostřejší než kdy dřív, hrdino. S takovým nástrojem na své straně, budeš neporazitelný.")
console.log("Ale přeci jenom, chtělo by to ještě brnění… Nedaleko odsud je stará kovárna zkus se v ní porozhlédnout jestli něco neobjevíš")
while (true){


    console.log("[1 - Podívat se do staré kovárny]")
    console.log("[2 - utéct a už se nikdy nevrátit]")
    let volba = prompt("vyber si: ")
    if(volba == 1){

        console.log("Skvěle, jde vidět, že máš pro strach uděláno. Vcházíš do opuštěné kovárny a rozhlížíš se kolem sebe")
        break

    }
    else if(volba == 2)
    {
        console.log("Rozhodl si se, že práce zachránce celé planety není nic pro tebe a rozběhl si se. Bohužel si cestou pryč zakopl o kámen a nabodnul se na něj... R.I.P")
        throw new Error("Sranda skončila!");


    }
    
    
    else{
        console.log("Něco se nepovedlo, zkus to znovu")
    }

}

console.log("Vidíš dvoje dveře pravé a levé, do kterých si přeješ vstoupit?")
console.log("[1] Pravé")
console.log("[2 Levé")

while (true){
    volba = prompt("Tvoje volba: ")
    if (volba == 1){
        console.log("vcházíš do dveří a rozhlížíš se, když v tom někdo zpoza místnosti máchne mečem")

        console.log("[1] Bránit se")
        console.log("[2] Nedělat nic")

        volba = prompt("Tvoje volba: ")
        if (volba == 1){
            console.log("Rozhodl si se bránit, ale očividně to bylo k ničemu protože jen spadlo koště")
        }

        else if (volba == 2){
            console.log("Nedělal si nic, ale to stejně nevadí, po bližším prozkoumání si zjistil, že to je jen koště")
        }

        else{
            console.log("Něco se nepovedlo, zkus to znovu")
        }
        console.log("Na konci místnosti sis všiml dveří")
        console.log("Zkus je otevřít")
        if (dvere >= 5){
            console.log("Zdá se, že dveře byly odemčené, přeješ si vstoupit dovnitř?")
            console.log("[1] ANO")
            console.log("[2] NE")
            volba = prompt("Tvá volba: ")
            if(volba == 1){
                console.log("Zdá se, že jsi našel to brnění o kterém Hadrian mluvil, proto si ho vzal šel ho navštívit")
                brneni = true
                break
            }

            else if(volba == 2){
                console.log("Dobrá, jdeš se podívat do druhé místnosti")
                console.log("Zdá se, že tu nic není vracíš se proto k Hadrianovi bez brnění")
                break
            }

        }
        else if(dvere < 5){
            console.log("Ale né, dveře jsou zavřené, přeješ si podívat se do druhé místnosti, nebo jít zpátky?")
            console.log("[1] Druhá místnost")
            console.log("[2] Jít zpátky")
            volba = prompt("Tvá volba: ")
            if (volba == 1){
                console.log("Šel jsi do druhé místnosti a zjistil si, že tam brnění nenajdeš, proto se bohužel s prázdnou vracíš k Hadrianovi")
                break
            }

            else if(volba == 2){
                console.log("Vracíš se tedy k Hadrianovi poptat se co a jak")
                break
            }
        }

    }
    else{
        console.log("Něco se nepovedlo, zkus to znovu")
    }

}

while (true){
    console.log("Hadrian: Vidím, že jsi se už vrátil z kovárny")
    if (brneni == true){
        console.log("Hadrian: dokonce i s brnení skvěle")
    }
    else if(brneni == false){
        console.log("Hadrian: Ovšem bez brnění, to nevadí i tak to zvládneš")
    }

    console.log("Hadrian: Teď už se jen musíš vplížit do Energicovi jeskyně a porazit ho jednou pro vždy")
    console.log("Hadrian: Tady je mapa, hodně štěstí...")

    console.log("Vplížil si se do jeskyněa najednou tě někdo přepadne")
    console.log("Vždyť to je Energico!")

    if (brneni == true){
        console.log("Naštěstí tvé brnění zastavil úder meče a co víc dokonce Energicův meč zlomilo")
        console.log("Teď je tvá šance")
        console.log("Tasíš meč a jediným švihem srážíš Energica na kolena")
        console.log("S hlavou nepřítele se vracíš za Hadrianem a všichni provolávají jméno ")
        jmeno = prompt("Zadej své jméno: ")
        console.log(jmeno,"!")
        throw new Error("Zachránil jsi všechny Xenony, ale tím tvá mise končí");





    }
    else if(brneni == false){
        console.log("Bohužel nemáš brnění a tak zákeřnému úderu se nedá vyhnout")
        console.log("Padáš na zem a vzápětí podléháš zranění")
        throw new Error("Prohrál jsi!");
    
    }
    
    
}


