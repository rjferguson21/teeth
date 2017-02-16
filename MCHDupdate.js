var stringOut = [];
Array.prototype.toStringDefault = Array.prototype.toString;
Array.prototype.toString = function (delim) {
    if ('undefined' === typeof delim) {
        return this.toStringDefault();
    }
    return this.join(delim);
}

function vitals () {
    var bloodPressure = prompt("Blood pressure?");
    \\checkbox added �vitals not taken� if checked bloodPressure===0
    if (bloodPressure === "0") {
        stringOut.push("Medical history reviewed.");}
        else{
            var pulse = prompt("Pulse?");
            var specialHealth = prompt ("Specific medical history findings?  If none enter '0'");
            \\ remove if none enter 0 and add a checkbox �check if special medical history findings� if checked specialHealth===1 else specialHealth===0
            if (specialHealth != "0") {
                stringOut.push("Medical history reviewed, " + specialHealth + ".  BP " + bloodPressure + " P " + pulse + ".  ");
                
            }
            else {
                stringOut.push("Medical history reviewed, BP " + bloodPressure + " P " + pulse + ".  ");
            }
        }
    }
    
    
    
    
    postTeeth = ["1","2","3","4","5","12","13","14","15","16","17","18","19","20","21","28","29","30","31","32"]
    var teeth1 = new Array (); // this is the export for single/multiple teeth
    var teethContact; // this variable determines interproximal contact  
    var occlusalContact;
    
    
    function toothOutput () {
        var teeth = prompt("tooth number(s)separated by periods?").split(".");
        teeth1.push(teeth.length);
        if (teeth.length >1) {
            stringOut.push("teeth #");
        } else {
            stringOut.push("tooth #");
        }
        for (var i=0; i< teeth.length; i++) {
            if (postTeeth.indexOf(teeth[i]) != -1 ) {
                var surfaces = prompt ("tooth surfaces restoration # " + teeth[i] + "? 1= O, 2=B, 3=MO, 4=DO, 5=OB, 6= MOD, 7=MOB, 8=DOB, 9=MOL, 10=DOL, 11=MODB, 12=MODL, 13=MODBL, 14=OL, 15=L");
                \\add checkboxes for input of surfaces
                switch (surfaces) {
                    case "0" : surfaces = "";
                    break;
                    case "1" : surfaces = "O";
                    break;
                    case "2" : surfaces = "B";
                    break;
                    case "3" : surfaces = "MO";
                    break;
                    case "4" : surfaces = "DO";
                    break;
                    case "5" : surfaces = "OB";
                    break;
                    case "6" : surfaces = "MOD";
                    break;
                    case "7" : surfaces = "MOB";
                    break;
                    case "8" : surfaces = "DOB";
                    break;
                    case "9" : surfaces = "MOL";
                    break;
                    case "10" : surfaces = "DOL";
                    break;
                    case "11" : surfaces = "MODB";
                    break;
                    case "12" : surfaces = "MODL";
                    break;
                    case "13" : surfaces = "MODBL";
                    break;
                    case "14" : surfaces = "OL";
                    break;
                    case "15" : surfaces = "L";
                    break;
                }
            } else {
                var surfaces = prompt ("tooth surfaces restoration # " + teeth[i] + "? 1= F, 2=ML, 3=DL, 4=MF, 5=DF, 6= MDL, 7=MDF, 8=MIFL, 9=DIFL, 10=MDFL, 11=L, 12=IL, 13=IFL, 14=MIDFL");
                \\add checkboxes for surfaces
                switch (surfaces) {
                    case "0" : surfaces = "";
                    break;
                    case "1" : surfaces = "F";
                    break;
                    case "2" : surfaces = "ML";
                    break;
                    case "3" : surfaces = "DL";
                    break;
                    case "4" : surfaces = "MF";
                    break;
                    case "5" : surfaces = "DF";
                    break;
                    case "6" : surfaces = "MDL";
                    break;
                    case "7" : surfaces = "MDF";
                    break;
                    case "8" : surfaces = "MIFL";
                    break;
                    case "9" : surfaces = "DIFL";
                    break;
                    case "10" : surfaces = "MDFL";
                    break;
                    case "11" : surfaces = "L";
                    break;
                    case "12" : surfaces = "IL";
                    break;
                    case "13" : surfaces = "IFL";
                    break;
                    case "14" : surfaces = "MIDFL";
                    break;
                }
            }
            if (surfaces.indexOf("M" || "D")>=0) {
                teethContact = 1;     
            }
            if (surfaces.indexOf("O" || "L" || "I")>=0) {
                occlusalContact = 1;
            }
            stringOut.push(teeth[i] + " " + surfaces); 
            
        }      
    }
    
    function nitrous() {
        var nitrousPrompt = prompt ("Nitrous administered? 1=yes");
        \\add checkbox if checked nitrousPrompt===1
        if (nitrousPrompt==="1") {
            var nitrousPercent = prompt ("Percentage nitrous administered?");
            var nitrousTime = prompt ("Length of time nitrous administered?");
            stringOut.push (nitrousPercent + "% N2O administered for " + nitrousTime + " minutes followed by 100% O2 for 5 minutes post op.  ");
        }
    }
    
    
    
    
    var anesthesia = [];
    var additionalAnesthetic;
    function Anesthetic(number, type) {
        this.number = number;
        this.type = type;
    }
    
    
    function anesthesiaGiven () {
        do {var i = 0;
            anesthesia[i] = new Anesthetic;
            anesthesia[i].number = prompt("number of carpules?");
            if (anesthesia[0].number >0) {
                anesthesia[i].type = prompt("type of anesthetic, 1=citanest, 2=lidocaine, 3=septocaine100, 4=septocaine200, 5=lower cocktail, 6=upper cocktail, 7=carbocaine, 8=marcaine");
                switch (anesthesia[i].type ) {
                    \\add checkboxes for anesthetics
                    case "1" : anesthesia[i].type = "4% citanest plain";
                    break;
                    case "2" : anesthesia[i].type = "2% lidocaine with 1:100,000 epinephrine";
                    break;
                    case "3" : anesthesia[i].type = "4% septocaine with 1:100,000 epinephrine";
                    break;
                    case "4" : anesthesia[i].type = "4% septocaine with 1:200,000 epinephrine";
                    break;
                    case "5" : anesthesia[i].type = "4% citanest plain, 1 carpule 2% lidocaine with 1:100,000 epinephrine, and 1 carpule 4% septocaine with 1:100,000 epinephrine. "
                    break;
                    case "6" : anesthesia[i].type = "2% lidocaine with 1:100,000 epinephrine and 1 carpule 4% septocaine with 1:100,000 epinephrine. "
                    break;
                    case "7" : anesthesia[i].type = "3% carbocaine plain";
                    break;
                    case "8" : anesthesia[i].type = "0.5% marcaine with 1:200,000 epinephrine";
                    break;
                }
                if (anesthesia[i].number >1) { 
                    stringOut.push(anesthesia[i].number +" carpules " + anesthesia[i].type);}
                    else {stringOut.push(anesthesia[i].number +" carpule " + anesthesia[i].type);}
                    var additionalAnesthetic = prompt ("additional anesthetic? 1=yes");
                    i++;}
                }
                while( additionalAnesthetic === "1");
            }
            
            
            function amalgam(){
                stringOut.push ("Patient presents for ");
                toothOutput();
                if (teeth1 >1) {
                    stringOut.push(" amalgam restorations.  ");
                } else {
                    stringOut.push(" amalgam restoration.  ");
                }
                vitals();
                anesthesiaGiven();
                var removed = prompt("What was removed prior to restoration placement?");
                stringOut.push(removed+ " removed, tytin amalgam packed and carved.  ")
                if (teethContact === 1) {
                    stringOut.push ("Occlusion and interproximal contact checked.  Pt left in stable condition.");
                } 
                if (occlusalContact === 1) {
                    stringOut.push("Occlusion checked.  Pt left in stable condition.");
                } else {stringOut.push("Pt left in stable condition.")
            }
        }
        
        
        function composite(){
            stringOut.push("Patient presents for ") ;
            toothOutput();
            if (teeth1 >1) {
                stringOut.push(" composite restorations.  ");
            } else {
                stringOut.push(" composite restoration.  ");
            }
            vitals();
            anesthesiaGiven();
            var removed = prompt("What was removed prior to restoration placement?");
            var bondingAgent = prompt ("Brand of bonding Agent? 1= Prime N Bond NT");
            switch (bondingAgent) {
                case "2" : bondingAgent = "Adhese universal";
                break;
                case "1" : bondingAgent = "Prime N Bond NT";
                break;
            }
            var flowableYes = prompt ("Flowable composite used?, 1=yes");
            if (flowableYes === "1") {
                var Flowable = new Object ();
                Flowable.brand = prompt("Brand of flowable composite? 1= Premise");
                switch(Flowable.brand) {
                    case "2" : Flowable.brand = "Grandioso flow";
                    break;
                    case "1" : Flowable.brand = "Premise flowable composite";
                    break;
                }
                Flowable.shade = prompt("Shade of flowable composite?");
            }
            
            
            
            var pasteComposite = new Object();
            pasteComposite.brand = prompt("Brand of paste composite? 1=TPH3");
            pasteComposite.shade = prompt("Shade(s) of paste composite?");
            switch(pasteComposite.brand) {
                case "2" : pasteComposite.brand = "Tetric Evoceram";
                break;
                case "1" : pasteComposite.brand = "TPH3";
                break;
            }
            
            
            if (flowableYes === "1") {
                stringOut.push(removed + " removed.  37% phosphoric acid etch, " + bondingAgent + " placed, air thinned and light cured.  " + Flowable.brand + " shade " + Flowable.shade + " placed and light cured.  " + pasteComposite.brand + " shade " + pasteComposite.shade + " placed and pulse cured.  Restoration finished and polished.  ")
                if (teethContact === 1) {
                    stringOut.push ("Occlusion and interproximal contact checked.  Pt left in stable condition.");
                }
                if (occlusalContact ===1) {
                    stringOut.push("Occlusion checked.  Pt left in stable condition.");
                } else {stringOut.push("Pt left in stable condition.");
            }
        } else {stringOut.push(removed + " removed.  37% phosphoric acid etch, " + bondingAgent + " placed, air thinned and light cured.  " + pasteComposite.brand + " shade " + pasteComposite.shade + " placed and pulse cured.  Restoration finished and polished.  ")
        if (teethContact === 1) {
            stringOut.push ("Occlusion and interproximal contact checked.  Pt left in stable condition.");
        } else {
            stringOut.push("Occlusion checked.  Pt left in stable condition.");
        }
    }
}

function emergency (){
    var emergencyArea = prompt ("Area of chief complaint?");
    var complaint = prompt ("complaint?");
    stringOut.push("Patient presents complaining of " + complaint + " in the " +emergencyArea +".  ");
    vitals();
    var clinicalFindings = prompt ("Clinical exam findings?");
    var radiographs = prompt ("Radiographs taken?");
    if (radiographs === "yes") {
        var radiographsTaken = prompt ("type and location of radiographs taken?");
        var radiographFindings = prompt("radiographic findings?");
    }
    var diagnosis = prompt ("diagnosis?");
    var treatmentOptions = prompt ("treatment options?");
    var ptTreatmentChoice = prompt ("treatment pt chose?");
    var treatment = prompt ("treatment performed? 1=extraction, yes=enter treatment at next screen, no=enter appointment outcome");
    if (treatment === "yes") {
        var treatmentPrompt = prompt ("Type of treatment performed?");
        stringOut.push("Clinical exam reveals " + clinicalFindings +".  " + radiographsTaken+ " revealing " + radiographFindings + ".  Diagnosis: " + diagnosis + ".  Treatment options discussed: " + treatmentOptions +".  Patient chose " + ptTreatmentChoice);
    } else if (treatment ==="1") { 
        stringOut.push("Clinical exam reveals " + clinicalFindings +".  " + radiographsTaken+ " revealing " + radiographFindings + ".  Diagnosis: " + diagnosis + ".  Treatment options discussed: " + treatmentOptions +".  Patient chose " + ptTreatmentChoice);
        stringOut.push ("Informed consent reviewed and signed.  ");
        anesthesiaGiven ();
        var extractionType = prompt ("Type of extraction? 1=simple, 2=surgical");
        switch (extractionType) {
            case "1": extractionType = "Simple forcep ";
            break;
            case "2": extractionType = "Surgical ";
            break;
        }
        stringOut.push (extractionType);
        if (teeth1 >1) {
            stringOut.push ("extractions.  Sockets ");
        }      else {stringOut.push ("extraction.  Socket ");
    }
    stringOut.push ("curetted and irrigated with sterile water.  Pressure placed on alveolus and gauze pressure pack placed.  Post op instructions reviewed with patient.  Patient left in stable condition.");
    
} else {var apptOutcome = prompt ("Appointment outcome?");          
stringOut.push("Clinical exam reveals " + clinicalFindings +".  " + radiographsTaken+ " revealing " + radiographFindings + ".  Diagnosis: " + diagnosis + ".  Treatment options discussed: " + treatmentOptions +".  Patient chose " + ptTreatmentChoice +".  " + apptOutcome);}
}


function crownPrep() {
    stringOut.push ("Patient presents for ");
    var crownMaterial = prompt("Restorative material?");
    stringOut.push (crownMaterial);
    stringOut.push ("crown tooth #");
    var crownTooth = prompt ("tooth number?");
    stringOut.push (crownTooth);
    var crownReason = prompt ("Restoration placed due to...");
    stringOut.push ("Restoration placed due to " + crownReason);
    anesthesiaGiven();
    var removed = prompt("What was removed from tooth?");
    var buildUpYes = prompt ("Buildup placed?");
    if (buildUpYes === "yes") {
        var buildUpType = prompt("type of buildup material?");
        stringOut.push (buildUpType + " placed.");
    }
    stringOut.push ("Tooth prepared for crown.");
    var cordSize = prompt ("size of cords packed?");
    stringOut.push ("Size" + cordSize + " cords packed around prepared tooth.  Top cord removed and ");
    stringOut.push ("impression taken.  Temporary shade A2 fabricated.  ");
    var shade = prompt ("Shade for permanent restoration?");
    stringOut.push (shade + " chosen for final restoration.  Patient left in stable condition.");
}

function extraction () {
    stringOut.push ("Patient presents for extraction ");
    toothOutput();
    vitals ();
    stringOut.push ("Informed consent reviewed and signed.  ");
    anesthesiaGiven ();
    var extractionType = prompt ("Type of extraction? 1=simple, 2=surgical");
    switch (extractionType) {
        case "1": extractionType = "Simple forcep ";
        break;
        case "2": extractionType = "Surgical ";
        break;
    }
    stringOut.push (extractionType);
    if (teeth1 >1) {
        stringOut.push ("extractions.  Sockets ");
    }      else {stringOut.push ("extraction.  Socket ");
}
stringOut.push ("curetted and irrigated with sterile water.  Pressure placed on alveolus and gauze pressure pack placed.  Post op instructions reviewed with patient.  Patient left in stable condition.");
}


function typeOfAppointment () {
    var apptType = prompt("Type of appointment? 1= composite, 2=amalgam, 3= emergency, 4= crown prep, 5= extraction");
    \\add checkboxes for type
    switch (apptType) {
        case "1" : composite();
        break;
        case "2" : amalgam();
        break;
        case "3" : emergency();
        break;
        case "4" : crownPrep();
        break;
        case "5" : extraction();
        break;
    }
    var nextVisit = prompt ("Next visit?");
    stringOut.push ("NV: " + nextVisit);
    
    
    var stringOutString = stringOut.toString(" ");
    print(stringOutString);
}


typeOfAppointment();
