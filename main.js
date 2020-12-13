function getp1(){
    var inputs=[];
    for(var i=1;i<=6;i++){
        inputs.push(document.getElementById("para1_input_box_"+i).value);
    }
    console.log(inputs);
    var length=inputs.length;
    console.log(length);
    for(var j=0;j<inputs.length;j++){
        inputs.join(". ")
        document.getElementById("display_Paragraph1").innerHTML=inputs.join(". ");
    }
    console.log(inputs);
    
}

function getp2(){
    var inputs=[];
    for(var i=1;i<=6;i++){
        inputs.push(document.getElementById("para2_input_box_"+i).value);
    }
    console.log(inputs);
    var length=inputs.length;
    console.log(length);
    for(var j=0;j<inputs.length;j++){
        inputs.join(". ")
        document.getElementById("display_Paragraph2").innerHTML=inputs.join(". ");
    }
    console.log(inputs);
}