        var slideIndex = 0;
        
        var backgrounds = new Array(
            'url(https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
            'url(../images/ml.jpg)',
            'url(../images/mac.jpg)',
            'url(../images/messi.jpg)',
            'url(../images/sleep.jpg)'
        )
        if(document.getElementById("inter")!=null)
       { 
            document.getElementById("inter").onclick=function()
            {
                slideIndex++;
                if(slideIndex===5)
                    slideIndex=0;
            document.getElementById("inter").style.backgroundImage=backgrounds[slideIndex];
        }}



        var string=localStorage.getItem("string");
        var button=document.getElementById("bt");
        var table=document.getElementById("only_table");
        if(string==null||string=='null')
            {string="<tr><th colspan='2'>Name</th><th>Skill</th><th>Profeciency</th>";}
        if(table!=null)
            table.innerHTML=string;
        var i=0;
        var count=0;
        var array= new Array(200);
        //This function is for the like button
        if(button!=null)
       {
           button.onclick=function()
           {
               var str=localStorage.getItem("count");
               if(str=='null'||str=='NaN'||str==null||str==NaN)
                {  str=0;
                 alert(str);}
               count=parseInt(str);
               count++;
               button.innerHTML="Like : " + count;
               localStorage.setItem("count", count);
           }}

        function letitgo(){
            var name=document.getElementById('name').value;
            var skill=document.getElementById('skill').value;
            var level=document.getElementById('select').value;
            if(name==""||skill==""||level=='null')
                alert("Please Fill The Form Properly");
            else
                {
                
                    string=string+"<tr><td colspan='2'>"+name+"</td>"+ "<td>"+skill+"</td>"+"<td >"+level+"</td>"+    "</tr>";
                    table.innerHTML=string;
                    localStorage.setItem("string",string);
                }
        }
        
         window.onscroll = function() {
                document.getElementById("nb").style.top =  window.pageYOffset;
         }
        
        var xo=document.getElementsByTagName("li");
        for(var i=0;i<xo.length;i++)
       { 
           
            xo[i].onmouseout=function()
            {
                this.style.backgroundColor="transparent";
            }
            xo[i].onmouseover=function()
            {
                this.style.backgroundColor="black";
            }
       }
        
    