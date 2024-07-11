/*
احنا هنعمل عدة functions في ال project ده
*/

// var title = document.getElementById('title');
// var price = parseInt(document.getElementById('price').value) ||0;
// var taxes = parseInt(document.getElementById('taxes').value) ||0;
// var ads = parseInt(document.getElementById('ads').value) ||0;
// var discount = parseInt(document.getElementById('discount').value) ||0;
// var total = parseInt(document.getElementById('total').value) ||0;
// var count = parseInt(document.getElementById('count').value) ||0;
// var category = parseInt(document.getElementById('category').value) ||0;
// var submit = parseInt(document.getElementById('submit').value);


let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp; // وهمي


// get total
function getTotal() {
    if(price != '') {
        let result = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    } else {
        total.innerHTML = '';
        total.style.background = '#a00d02'
    }
}




// create prodect
// احسن مكان نحفظ في ال data هو ال array
// محتاج تحمع لي البيانات دي في object 

let dataProduct;
if (localStorage.product != null) {
    dataProduct = JSON.parse(localStorage.product);
} else {
    dataProduct = [];
}

submit.onclick = function() {
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    if(mood === 'create'){
            // count 
    if(newProduct.count > 1) {
        for(let i=0; i<newProduct.count; i++){
            dataProduct.push(newProduct);
        }
    } else {
        dataProduct.push(newProduct);
    }
    // if mood === update
    } else {
        dataProduct[tmp] = newProduct;
        mood = 'create';
        submit.innerHTML = 'create';
        count.style.display = 'block';
    }
    // اصبح عندك array فيها كذا index
    // save localstorage
    localStorage.setItem('product', JSON.stringify(dataProduct));
    // product ده هو اللي هخزن فيه ال data 
    // localstorage بتاخد عندك string بس مش بتاخد array
    // الحل نستخدم stringify
    clearData();
    showData();
    /*
    لو عملت reload البيانات مش هتتمسح 
    بس بعد اما عملت reload وجيت اعمل عنصر جديد 
    هيمسح اللي فات
    السبب :: لان ال js بتقرا الكود من فوق الى تحت
    الحل 
    انا عاوز اقوله لو ال localstorage فيها بيانات 
    متخليش ال array دي فاضية
    */

/*
لي بنضيف ف array
انت لو مضيفتش ف array فكل مرة هتيجي تدوس create
يعمل object جديد ويمسح ال object القديم
*/


/*
وانا بعمل object بيتمسح عندي ال objects القديمة
محتاج طريقة تمكني اني احافظ ع ال object وانا بعمل 
object جديد
(array) is a solution
*/
// push بتضيف عنصر ف نهاية ال array


/* ####
problem 
انا لو عملت reload البيانات هتتحذف 
الحل localstorage
بخزن ال data دي في ال localstorage
*/

// ##### data جوا ال array 
}




// save localstorage
/*
عملتها مع create product
*/




// clear inputs (data)

function clearData() { // انا عايز ال funcction دي تشتغل لما ادوس ع create
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    total.innerHTML = '';
    discount.value = '';
    count.value = '';
    category.value = '';
}




// read
function showData() {
    let table ='';
    for(let i=0; i<dataProduct.length; i++){
        table += `
        <tr>
                            <td>${i+1}</td>
                            <td>${dataProduct[i].title}</td>
                            <td>${dataProduct[i].price}</td>
                            <td>${dataProduct[i].taxes}</td>
                            <td>${dataProduct[i].ads}</td>
                            <td>${dataProduct[i].discount}</td>
                            <td>${dataProduct[i].total}</td>
                            <td>${dataProduct[i].category}</td>
                            <td><button onclick="updateData(${i})" id="update">update</button></td>
                            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                        </tr>
        `
    }
    
    document.getElementById('tbody').innerHTML = table;
    // جزء ال deleteAll
    let btnDelete = document.getElementById('deleteAll');
    if(dataProduct.length > 0){
        btnDelete.innerHTML =`
        <button onclick="deleteAll()">Delete All (${dataProduct.length})</button>
        `
    } else {
        btnDelete.innerHTML = '';
    }
    
}
showData()





// delete
function deleteData(i) { // مش هتشتغل الا لما دوس على زرار delete

    // عايز امسح عنصر من array دي
    dataProduct.splice(i,1);
    // كده هيمسح من ال array بس مش هيمسح من ال localstorage
    localStorage.product = JSON.stringify(dataProduct);
    // مش هتتمسح الا لما اعمل reload
    // عايز احدث ال html اول لما ادوس على delete
    // المسؤل عن جزء ال html هو 
    // dataShow()
    showData();

}




// delete all
/*
انا عايز الزرار ده يظهر لو في بيانات بس 
function اللي بتعرض لي المنتجات هي showData()
*/
function deleteAll(){
    localStorage.clear();
    dataProduct.splice(0);
    showData()
}




// update 
function updateData(i) {
    title.value = dataProduct[i].title;
    price.value = dataProduct[i].price;
    taxes.value = dataProduct[i].taxes;
    ads.value = dataProduct[i].ads;
    discount.value = dataProduct[i].discount;
    getTotal();
    count.style.display = 'none';
    category.value = dataProduct[i].category;
    submit.innerHTML = 'update';
    // دلوقتي لو دوست ع update هينشأ منتج جديد
    // مش هيعدل ع المنتج 
    // الحل 
    // mood
    mood = 'update';
    tmp = i;
    scroll ({
        top: 0,
        behavior: "smooth"
        
    })
}




// search
let searchMood = 'title';

function getsearchMood(id) {
    let search = document.getElementById('search')
    if(id == 'searchTitle') {
        searchMood = 'title';
        search.placeholder = "search by title";
    } else {
        searchMood = 'category';
        search.placeholder = "search by category";
    }
    search.focus()
}

function searchData(value) {
    let table = '';
    if (searchMood == 'title') {

        for(let i=0; i<dataProduct.length; i++){
            if(dataProduct[i].title.includes(value)){
                        table += `
                    <tr>
                        <td>${i}</td>
                        <td>${dataProduct[i].title}</td>
                        <td>${dataProduct[i].price}</td>
                        <td>${dataProduct[i].taxes}</td>
                        <td>${dataProduct[i].ads}</td>
                        <td>${dataProduct[i].discount}</td>
                        <td>${dataProduct[i].total}</td>
                        <td>${dataProduct[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr>`;
            }
        }

    } else {
        for(let i=0; i<dataProduct.length; i++){
            if(dataProduct[i].category.includes(value)){
                        table += `
                    <tr>
                        <td>${i}</td>
                        <td>${dataProduct[i].title}</td>
                        <td>${dataProduct[i].price}</td>
                        <td>${dataProduct[i].taxes}</td>
                        <td>${dataProduct[i].ads}</td>
                        <td>${dataProduct[i].discount}</td>
                        <td>${dataProduct[i].total}</td>
                        <td>${dataProduct[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr>`;
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;
}