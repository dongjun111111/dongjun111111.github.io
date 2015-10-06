var box = document.getElementById("box");
	var i= 0,c,d,wind_time;
	var all = 0,other = 0,wind=0;
	box.style.width =  '100%';
  window.onload=function()
  {
		clearTimeout(wind_time);wind = 0;
		wind = parseInt(document.getElementById("wind_id").value);
		wind_run(wind);
  }
	function gogo(){
		var a = document.createElement("div");
		a.innerHTML = '.';
		a.id = "xue" + i;
		a.className = "xue";
		a.style.top = parseInt(box.style.height) * (Math.random() > 0.3 ? Math.random() : 0)  + 'px';/*定义起始点位置*/
		if(wind != 0){var ss = Math.random() > Math.abs(wind*0.025) ? Math.random() : (wind > 0 ? 0 : 1) ;}else{var ss = Math.random()}
		a.style.left = parseInt(box.style.width) * ss +'px'; /*定义起始点位置*/
		box.appendChild(a);
		godown(a.id,a.id,8*Math.random());
		i++;
		all++;
		var x = 100 * Math.random()* Math.random();
		setTimeout('gogo()',x);
	};
	function removeElement(_element)  //移除标签的函数
		{
         var _parentElement = _element.parentNode;
         if(_parentElement){
                _parentElement.removeChild(_element);
         };
	};
	function godown(a,e,speed){
		if(speed < 3)
		{speed = 3}
		var a1 =document.getElementById(a);
		a1.style.top = parseInt(a1.style.top) + speed +'px';
		if(parseInt(a1.style.top) < parseInt(box.style.height)){e = setTimeout("godown(\""+a+"\",\""+e+"\","+speed+")",20)}
		else{
			clearTimeout(e);
			removeElement(a1);
			speed=null;
			other++;
		
		};
	};
	function wind_run(wind)
	{
		var a = document.getElementById("box").getElementsByTagName('div');
		for(var i = 0;i<a.length;i++)
		{
			a[i].style.left = parseInt(a[i].style.left) + wind +'px';
		};
		if(Math.abs(wind) > 0.1)
		{wind_time = setTimeout("wind_run("+wind+")",20)}
		else{clearTimeout(wind_time);wind = 0;};
	};
	gogo();