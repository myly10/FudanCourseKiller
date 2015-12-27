var courseNum=window.frames["mainFrame"].document.body.getElementsByTagName("td")[0].getElementsByTagName("input")["xkh"].value;

var i=0;
for (var e=window.frames["mainFrame"].document.body.getElementsByTagName("table").length;i!=e;++i)
	if (window.frames["mainFrame"].document.body.getElementsByTagName("table")[i].bgColor=="#9FD6FF") break;
//alert(i);
var timer=null;

function doStuff(indx){
//	alert("infunc");
	window.frames["mainFrame"].document.body.getElementsByTagName("td")[0].getElementsByTagName("input")["xkh"].value=courseNum;
	iimPlay("inquireCourse.iim");
	
	try{ if (window.frames["mainFrame"].document.body.getElementsByTagName("table")[i].getElementsByTagName("tr")[3].getElementsByTagName("td")[4].getElementsByTagName("span")[0].innerHTML==0){
		window.clearInterval(timer);
		window.frames["leftFrame"].document.body.getElementsByTagName("input")["xkOper"].click();
	}}catch (err){window.clearInterval(timer); alert("Failed");}
}

timer=window.setInterval(function(){doStuff(i);},323);
