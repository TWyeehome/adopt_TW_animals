let animals=new XMLHttpRequest,url=encodeURIComponent("https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_id="+location.search.substr(1));animals.open("GET","https://script.google.com/macros/s/AKfycbzSD0z0YC-ExNrS4s3OxJR8knvLm5cHxQzAE0Y1MtWKenWWI_to/exec?url="+url,!0),animals.send(null),animals.onload=(()=>{let e=JSON.parse(animals.responseText);console.log(e),document.getElementById("loading").style.display="none",document.getElementById("update-time").textContent="上次更新時間 : "+e[0].cDate,"M"==e[0].animal_sex?e[0].animal_sex="公":"F"==e[0].animal_sex&&(e[0].animal_sex="母"),"CHILD"==e[0].animal_age?e[0].animal_age="幼年":"ADULT"==e[0].animal_age?e[0].animal_age="成年":e[0].animal_age="-","SMALL"==e[0].animal_bodytype?e[0].animal_bodytype="小型":"MEDIUM"==e[0].animal_bodytype?e[0].animal_bodytype="中型":"BIG"==e[0].animal_bodytype&&(e[0].animal_bodytype="大型"),"T"==e[0].animal_sterilization?e[0].animal_sterilization="是":"F"==e[0].animal_sterilization&&(e[0].animal_sterilization="否"),"T"==e[0].animal_bacterin?e[0].animal_bacterin="是":"F"==e[0].animal_bacterin&&(e[0].animal_bacterin="否"),document.getElementById("btn-call").href="tel:"+e[0].shelter_tel,document.getElementById("kind").textContent="物種 : "+e[0].animal_kind,document.getElementById("sex").textContent="性別 : "+e[0].animal_sex,document.getElementById("body").textContent="體型 : "+e[0].animal_bodytype,document.getElementById("color").textContent="毛色 : "+e[0].animal_colour,document.getElementById("age").textContent="年齡 : "+e[0].animal_age,document.getElementById("sterilization").textContent="已結紮 : "+e[0].animal_sterilization,document.getElementById("bacterin").textContent="已施打狂犬病疫苗 : "+e[0].animal_bacterin,document.getElementById("found").textContent="尋獲地點 : "+e[0].animal_foundplace,document.getElementById("shelter").textContent="所在收容所 : "+e[0].shelter_name,document.getElementById("shelter-address").textContent="收容所地址 : "+e[0].shelter_address,document.getElementById("shelter-tel").textContent="收容所電話 : "+e[0].shelter_tel,document.getElementById("pic").innerHTML='<div class="bg-cover w-100" style="background-image: url('+e[0].album_file+');height:400px;"></div>'});