let animals=new XMLHttpRequest,url=encodeURIComponent("https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_sterilization=T&animal_place=宜蘭");animals.open("GET","https://script.google.com/macros/s/AKfycbzSD0z0YC-ExNrS4s3OxJR8knvLm5cHxQzAE0Y1MtWKenWWI_to/exec?url="+url,!0),animals.send(null),animals.onload=(()=>{let e=JSON.parse(animals.responseText);if(console.log(e),document.getElementById("loading").style.display="none",""==e)return void(document.getElementById("animals-content").innerHTML='<div class="col-12 text-center"><h2 class="font-weight-bolder">查無結果</h2></div>');let a="";for(let i=0;i<e.length;i++)""==e[i].album_file&&(e[i].album_file="img/none.png"),"M"==e[i].animal_sex?e[i].animal_sex="公":"F"==e[i].animal_sex&&(e[i].animal_sex="母"),"CHILD"==e[i].animal_age?e[i].animal_age="幼年":"ADULT"==e[i].animal_age?e[i].animal_age="成年":e[i].animal_age="-","T"==e[i].animal_sterilization?e[i].animal_sterilization="是":"F"==e[i].animal_sterilization&&(e[i].animal_sterilization="否"),"yes"==document.getElementById("pic").value?"img/none.png"!=e[i].album_file&&(a+='<div class="col-6 col-md-4 col-lg-3 mb-4"><div class="card shadow-sm"><a href="detail.html?'+e[i].animal_id+'"><div style="background-image: url('+e[i].album_file+');height:180px;" class="card-img-top bg-cover border-bottom"></div><div class="card-body"><div>性別 : '+e[i].animal_sex+"</div><div>年齡 : "+e[i].animal_age+"</div><div>是否已絕育 : "+e[i].animal_sterilization+"</div><div>所處收容所 : </div><div>"+e[i].animal_place+"</div></div></a></div></div>"):a+='<div class="col-6 col-md-4 col-lg-3 mb-4"><div class="card shadow-sm"><a href="detail.html?'+e[i].animal_id+'"><div style="background-image: url('+e[i].album_file+');height:180px;" class="card-img-top bg-cover border-bottom"></div><div class="card-body"><div>性別 : '+e[i].animal_sex+"</div><div>年齡 : "+e[i].animal_age+"</div><div>是否已絕育 : "+e[i].animal_sterilization+"</div><div>所處收容所 : </div><div>"+e[i].animal_place+"</div></div></a></div></div>";document.getElementById("animals-content").innerHTML=a});let kind="",sex="",body="",sterilization="",address="";document.getElementById("btn-search").addEventListener("click",()=>{document.getElementById("animals-content").innerHTML="",document.getElementById("loading").style.display="block",kind=document.getElementById("kind").value,sex=document.getElementById("sex").value,body=document.getElementById("body").value,sterilization=document.getElementById("sterilization").value,address=document.getElementById("address").value;let e=new XMLHttpRequest,a=encodeURIComponent("https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_kind="+kind+"&animal_sex="+sex+"&animal_bodytype="+body+"&animal_sterilization="+sterilization+"&animal_place="+address);e.open("GET","https://script.google.com/macros/s/AKfycbzSD0z0YC-ExNrS4s3OxJR8knvLm5cHxQzAE0Y1MtWKenWWI_to/exec?url="+a,!0),e.send(null),e.onload=(()=>{document.getElementById("btn-list").style.display="block",document.getElementById("nav-list").style.display="none",document.getElementById("loading").style.display="none";let a=JSON.parse(e.responseText);if(console.log(a),""==a)return void(document.getElementById("animals-content").innerHTML='<div class="col-12 text-center"><h2>查無結果</h2></div>');let i="";for(let e=0;e<a.length;e++)""==a[e].album_file&&(a[e].album_file="img/none.png"),"M"==a[e].animal_sex?a[e].animal_sex="公":"F"==a[e].animal_sex&&(a[e].animal_sex="母"),"CHILD"==a[e].animal_age?a[e].animal_age="幼年":"ADULT"==a[e].animal_age?a[e].animal_age="成年":a[e].animal_age="-","T"==a[e].animal_sterilization?a[e].animal_sterilization="是":"F"==a[e].animal_sterilization&&(a[e].animal_sterilization="否"),"yes"==document.getElementById("pic").value?"img/none.png"!=a[e].album_file&&(i+='<div class="col-6 col-md-4 col-lg-3 mb-4"><div class="card shadow-sm"><a href="detail.html?'+a[e].animal_id+'"><div style="background-image: url('+a[e].album_file+');height:180px;" class="card-img-top bg-cover border-bottom"></div><div class="card-body"><div>性別 : '+a[e].animal_sex+"</div><div>年齡 : "+a[e].animal_age+"</div><div>是否已絕育 : "+a[e].animal_sterilization+"</div><div>所處收容所 : </div><div>"+a[e].animal_place+"</div></div></a></div></div>"):i+='<div class="col-6 col-md-4 col-lg-3 mb-4"><div class="card shadow-sm"><a href="detail.html?'+a[e].animal_id+'"><div style="background-image: url('+a[e].album_file+');height:180px;" class="card-img-top bg-cover border-bottom"></div><div class="card-body"><div>性別 : '+a[e].animal_sex+"</div><div>年齡 : "+a[e].animal_age+"</div><div>是否已絕育 : "+a[e].animal_sterilization+"</div><div>所處收容所 : </div><div>"+a[e].animal_place+"</div></div></a></div></div>";document.getElementById("animals-content").innerHTML=i})}),document.getElementById("btn-list").style.display="none",document.getElementById("btn-list").addEventListener("click",e=>{e.preventDefault(),document.getElementById("btn-list").style.display="none",document.getElementById("nav-list").style.display="block"}),document.getElementById("btn-leave").addEventListener("click",e=>{e.preventDefault(),document.getElementById("btn-list").style.display="block",document.getElementById("nav-list").style.display="none"});