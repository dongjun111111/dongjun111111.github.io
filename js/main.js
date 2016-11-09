var t =new Array();
var div1=document.getElementById("div1");
t.push(div1);
var div2=document.getElementById("div2");
t.push(div2);
var div3=document.getElementById("div3");
t.push(div3);
var div4=document.getElementById("div4");
t.push(div4);
for (var i=0;i<t.length;i++ )
{
	t[i].onmouseover=function()
	{
    this.style.overflow="";
	this.getElementsByTagName("div")[0].style.height="50px";
    this.getElementsByTagName("div")[0].style.width="100%";
	this.getElementsByTagName("div")[0].style.background="";
	this.getElementsByTagName("div")[0].getElementsByTagName("h2")[0].style.paddingTop="0";
	this.getElementsByTagName("div")[0].getElementsByTagName("h2")[0].style.fontSize="20px";

	}
}