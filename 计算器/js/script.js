let tmp = "";
const display = document.getElementById("show");
document.getElementById("kbd").addEventListener("click",function(event){
    const value = event.target.textContent;
    console.log(value);
    if(!event.target.tagName||event.target.tagName!=="TD"){
        return;
    }
    if(value==="AC"){
        tmp = "0";
    }else if(value==="CE"){
        tmp=tmp.slice(0,-1)||"0";
    }else if(value==="="){
        try{
            let res = eval(tmp);
            if(isNaN(res)||!isFinite(res)){
                throw new Error("非法运算");
            }
            tmp = (Math.round(res*100)/100).toString();
        }catch(e){
            window.alert(tmp+ "  不是正经算式");
        }
    }else{
        if(tmp==="0"){
            if(value==="0"||value==="00"){
                tmp = "0";
            }else{
                if(isNaN(parseFloat(value))||!isFinite(value)){
                    tmp += value;
                }else{
                    tmp = value;
                }
                
            }
        }else{
            tmp+=value;
        }
        
    }
    display.textContent = tmp || "0";
});