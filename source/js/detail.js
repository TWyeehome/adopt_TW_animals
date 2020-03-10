let animals = new XMLHttpRequest();
let url = encodeURIComponent('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_id=' + location.search.substr(1));
animals.open('GET', 'https://script.google.com/macros/s/AKfycbzSD0z0YC-ExNrS4s3OxJR8knvLm5cHxQzAE0Y1MtWKenWWI_to/exec?url=' + url, true);
animals.send(null);
animals.onload = () => {
    let animalsInfo = JSON.parse(animals.responseText);
    console.log(animalsInfo);
    document.getElementById('loading').style.display = 'none';

    // 上次更新時間
    document.getElementById('update-time').textContent = '上次更新時間 : ' + animalsInfo[0].cDate;

    // 性別
    if (animalsInfo[0].animal_sex == 'M') {
        animalsInfo[0].animal_sex = '公'
    } else if (animalsInfo[0].animal_sex == 'F') {
        animalsInfo[0].animal_sex = '母'
    };
    // 年齡
    if (animalsInfo[0].animal_age == 'CHILD') {
        animalsInfo[0].animal_age = '幼年'
    } else if (animalsInfo[0].animal_age == 'ADULT') {
        animalsInfo[0].animal_age = '成年'
    } else {
        animalsInfo[0].animal_age = '-'
    };
    // 體型
    if (animalsInfo[0].animal_bodytype == 'SMALL') {
        animalsInfo[0].animal_bodytype = '小型'
    } else if (animalsInfo[0].animal_bodytype == 'MEDIUM') {
        animalsInfo[0].animal_bodytype = '中型'
    } else if (animalsInfo[0].animal_bodytype == 'BIG') {
        animalsInfo[0].animal_bodytype = '大型'
    };
    // 已結紮
    if (animalsInfo[0].animal_sterilization == 'T') {
        animalsInfo[0].animal_sterilization = '是'
    } else if (animalsInfo[0].animal_sterilization == 'F') {
        animalsInfo[0].animal_sterilization = '否'
    };
    // 已施打狂犬病疫苗
    if (animalsInfo[0].animal_bacterin == 'T') {
        animalsInfo[0].animal_bacterin = '是'
    } else if (animalsInfo[0].animal_bacterin == 'F') {
        animalsInfo[0].animal_bacterin = '否'
    };
    // 
    // 複製電話
    document.getElementById('btn-call').href = 'tel:' + animalsInfo[0].shelter_tel;
    // 領養資訊
    document.getElementById('kind').textContent = '物種 : ' + animalsInfo[0].animal_kind
    document.getElementById('sex').textContent = '性別 : ' + animalsInfo[0].animal_sex
    document.getElementById('body').textContent = '體型 : ' + animalsInfo[0].animal_bodytype
    document.getElementById('color').textContent = '毛色 : ' + animalsInfo[0].animal_colour
    document.getElementById('age').textContent = '年齡 : ' + animalsInfo[0].animal_age
    document.getElementById('sterilization').textContent = '已結紮 : ' + animalsInfo[0].animal_sterilization
    document.getElementById('bacterin').textContent = '已施打狂犬病疫苗 : ' + animalsInfo[0].animal_bacterin
    document.getElementById('found').textContent = '尋獲地點 : ' + animalsInfo[0].animal_foundplace
    document.getElementById('shelter').textContent = '所在收容所 : ' + animalsInfo[0].shelter_name
    document.getElementById('shelter-address').textContent = '收容所地址 : ' + animalsInfo[0].shelter_address
    document.getElementById('shelter-tel').textContent = '收容所電話 : ' + animalsInfo[0].shelter_tel
    document.getElementById('pic').innerHTML = '<div class="bg-cover w-100" style="background-image: url(' + animalsInfo[0].album_file + ');height:400px;"></div>'
};
