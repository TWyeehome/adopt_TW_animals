let animals = new XMLHttpRequest();
let url = encodeURIComponent('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_sterilization=T&animal_place=%E8%87%BA%E5%8C%97&animal_age=CHILD&animal_bodytype=SMALL&animal_colour=%E9%BB%91%E7%99%BD%E8%89%B2');
animals.open('GET', 'https://script.google.com/macros/s/AKfycbzSD0z0YC-ExNrS4s3OxJR8knvLm5cHxQzAE0Y1MtWKenWWI_to/exec?url=' + url, true);
animals.send(null);
animals.onload = () => {
    let animalsInfo = JSON.parse(animals.responseText);
    console.log(animalsInfo);
    document.getElementById('loading').style.display = 'none';
    if (animalsInfo == '') {
        document.getElementById('animals-content').innerHTML = '<div class="col-12 text-center"><h2 class="font-weight-bolder">查無結果</h2></div>'
        return
    };
    let animalsContent = '';
    for (let i = 0; i < animalsInfo.length; i++) {
        // 照片
        if (animalsInfo[i].album_file == '') {
            animalsInfo[i].album_file = 'img/none.png'
        };
        //　性別
        if (animalsInfo[i].animal_sex == 'M') {
            animalsInfo[i].animal_sex = '公'
        } else if (animalsInfo[i].animal_sex == 'F') {
            animalsInfo[i].animal_sex = '母'
        };
        // 體型
        if (animalsInfo[i].animal_age == 'CHILD') {
            animalsInfo[i].animal_age = '幼年'
        } else if (animalsInfo[i].animal_age == 'ADULT') {
            animalsInfo[i].animal_age = '成年'
        } else {
            animalsInfo[i].animal_age = '-'
        };
        // 絕育
        if (animalsInfo[i].animal_sterilization == 'T') {
            animalsInfo[i].animal_sterilization = '是'
        } else if (animalsInfo[i].animal_sterilization == 'F') {
            animalsInfo[i].animal_sterilization = '否'
        };

        if (document.getElementById('pic').value == 'yes') {
            if (animalsInfo[i].album_file != 'img/none.png') {
                animalsContent +=
                    '<div class="col-6 col-md-4 col-lg-3 mb-4">' +
                    '<div class="card shadow-sm">' +
                    '<a href="detail.html?' + animalsInfo[i].animal_id + '">' +
                    '<div style="background-image: url(' + animalsInfo[i].album_file + ');height:180px;" class="card-img-top bg-cover border-bottom"></div>' +
                    '<div class="card-body">' +
                    '<div>性別 : ' + animalsInfo[i].animal_sex + '</div>' +
                    '<div>年齡 : ' + animalsInfo[i].animal_age + '</div>' +
                    '<div>是否已絕育 : ' + animalsInfo[i].animal_sterilization + '</div>' +
                    '<div>所處收容所 : </div>' +
                    '<div>' + animalsInfo[i].animal_place + '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>' +
                    '</div>';
            }
        } else {
            animalsContent +=
                '<div class="col-6 col-md-4 col-lg-3 mb-4">' +
                '<div class="card shadow-sm">' +
                '<a href="detail.html?' + animalsInfo[i].animal_id + '">' +
                '<div style="background-image: url(' + animalsInfo[i].album_file + ');height:180px;" class="card-img-top bg-cover border-bottom"></div>' +
                '<div class="card-body">' +
                '<div>性別 : ' + animalsInfo[i].animal_sex + '</div>' +
                '<div>年齡 : ' + animalsInfo[i].animal_age + '</div>' +
                '<div>是否已絕育 : ' + animalsInfo[i].animal_sterilization + '</div>' +
                '<div>所處收容所 : </div>' +
                '<div>' + animalsInfo[i].animal_place + '</div>' +
                '</div>' +
                '</a>' +
                '</div>' +
                '</div>';
        };

    };

    document.getElementById('animals-content').innerHTML = animalsContent
};

let kind = '';
let sex = '';
let body = '';
let sterilization = '';
let address = '';

// 搜尋
document.getElementById('btn-search').addEventListener('click', () => {
    // 初始化開始
    document.getElementById('animals-content').innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    // 初始化結束
    kind = document.getElementById('kind').value;
    sex = document.getElementById('sex').value;
    body = document.getElementById('body').value;
    sterilization = document.getElementById('sterilization').value;
    address = document.getElementById('address').value;
    let animals = new XMLHttpRequest();
    let url = encodeURIComponent('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_kind=' + kind + '&animal_sex=' + sex + '&animal_bodytype=' + body + '&animal_sterilization=' + sterilization + '&animal_place=' + address);
    animals.open('GET', 'https://script.google.com/macros/s/AKfycbzSD0z0YC-ExNrS4s3OxJR8knvLm5cHxQzAE0Y1MtWKenWWI_to/exec?url=' + url, true);
    animals.send(null);
    animals.onload = () => {
        /* 初始化　*/
        document.getElementById('btn-list').style.display = 'block';
        document.getElementById('nav-list').style.display = 'none';
        document.getElementById('loading').style.display = 'none';

        let animalsInfo = JSON.parse(animals.responseText)
        console.log(animalsInfo)
        if (animalsInfo == '') {
            document.getElementById('animals-content').innerHTML = '<div class="col-12 text-center"><h2>查無結果</h2></div>'
            return
        };
        let animalsContent = '';
        for (let i = 0; i < animalsInfo.length; i++) {
            // 照片
            if (animalsInfo[i].album_file == '') {
                animalsInfo[i].album_file = 'img/none.png'
            };
            //　性別
            if (animalsInfo[i].animal_sex == 'M') {
                animalsInfo[i].animal_sex = '公'
            } else if (animalsInfo[i].animal_sex == 'F') {
                animalsInfo[i].animal_sex = '母'
            };
            // 年齡
            if (animalsInfo[i].animal_age == 'CHILD') {
                animalsInfo[i].animal_age = '幼年'
            } else if (animalsInfo[i].animal_age == 'ADULT') {
                animalsInfo[i].animal_age = '成年'
            } else {
                animalsInfo[i].animal_age = '-'
            };
            // 絕育
            if (animalsInfo[i].animal_sterilization == 'T') {
                animalsInfo[i].animal_sterilization = '是'
            } else if (animalsInfo[i].animal_sterilization == 'F') {
                animalsInfo[i].animal_sterilization = '否'
            };

            if (document.getElementById('pic').value == 'yes') {
                if (animalsInfo[i].album_file != 'img/none.png') {
                    animalsContent +=
                        '<div class="col-6 col-md-4 col-lg-3 mb-4">' +
                        '<div class="card shadow-sm">' +
                        '<a href="detail.html?' + animalsInfo[i].animal_id + '">' +
                        '<div style="background-image: url(' + animalsInfo[i].album_file + ');height:180px;" class="card-img-top bg-cover border-bottom"></div>' +
                        '<div class="card-body">' +
                        '<div>性別 : ' + animalsInfo[i].animal_sex + '</div>' +
                        '<div>年齡 : ' + animalsInfo[i].animal_age + '</div>' +
                        '<div>是否已絕育 : ' + animalsInfo[i].animal_sterilization + '</div>' +
                        '<div>所處收容所 : </div>' +
                        '<div>' + animalsInfo[i].animal_place + '</div>' +
                        '</div>' +
                        '</a>' +
                        '</div>' +
                        '</div>';
                }
            } else {
                animalsContent +=
                    '<div class="col-6 col-md-4 col-lg-3 mb-4">' +
                    '<div class="card shadow-sm">' +
                    '<a href="detail.html?' + animalsInfo[i].animal_id + '">' +
                    '<div style="background-image: url(' + animalsInfo[i].album_file + ');height:180px;" class="card-img-top bg-cover border-bottom"></div>' +
                    '<div class="card-body">' +
                    '<div>性別 : ' + animalsInfo[i].animal_sex + '</div>' +
                    '<div>年齡 : ' + animalsInfo[i].animal_age + '</div>' +
                    '<div>是否已絕育 : ' + animalsInfo[i].animal_sterilization + '</div>' +
                    '<div>所處收容所 : </div>' +
                    '<div>' + animalsInfo[i].animal_place + '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>' +
                    '</div>';
            };

        };

        document.getElementById('animals-content').innerHTML = animalsContent;
    };
});


/* 漢堡選單 */
document.getElementById('btn-list').style.display = 'none';
document.getElementById('btn-list').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('btn-list').style.display = 'none';
    document.getElementById('nav-list').style.display = 'block';
});

document.getElementById('btn-leave').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('btn-list').style.display = 'block';
    document.getElementById('nav-list').style.display = 'none';
});