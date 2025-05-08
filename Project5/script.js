const product = [
    {
        name: "Wodden Chair",
        headLine: "Pure wood",
        price: "6,500",
        image: "https://images.unsplash.com/photo-1656870916547-9e6a8a17f6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Soft Chair",
        headLine: "Soft like a pillow",
        price: "8,500",
        image: "https://plus.unsplash.com/premium_photo-1705169612261-2cf0407141c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Cloud Chair",
        headLine: "Feels the heaven",
        price: "10,500",
        image: "https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYWlyfGVufDB8fDB8fHww"
    },
];

const popular = [
    {
        name: "Red Chair",
        headLine: "Only red in color",
        price: "1,500",
        image: "https://images.unsplash.com/photo-1682739795614-99db261ef500?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZCUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        name: "Blue Chair",
        headLine: "Only blue in color",
        price: "1,750",
        image: "https://images.unsplash.com/photo-1675135581439-73de8f53df24?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        name: "Green Chair",
        headLine: "Only green in color",
        price: "1,200",
        image: "https://plus.unsplash.com/premium_photo-1722684577569-8b10de82ed4f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JlZW4lMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "White Chair",
        headLine: "Only white in color",
        price: "1,350",
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
];

let cart = [];


function addProduct() {
    let clutter = "";

    product.forEach(function (product, index) {
        clutter += `
            <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${product.image}"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headLine}</h3>
                            <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                        </div>
                        <button data-index=${index} class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index=${index} class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector(".products").innerHTML = clutter;
}

function addFavourate() {
    let clutter = "";

    popular.forEach(function (product) {
        clutter += `
            <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                    <img class="w-full h-full object-cover" src="${product.image}" alt="">
                </div>
                <div class="data py-2 w-full">
                    <h1 class="leading-none font-semibold">${product.name}</h1>
                    <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headLine}</h4>
                    <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
                </div>
            </div>
        `;
    });

    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart(){
    document.querySelector(".products").addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
            cart.push(product[details.target.dataset.index]);
        }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        let clutter = "";
        cart.forEach(function(prod, index){
            clutter += `
                <div class="flex gap-2 bh-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                        <img class="w-full h-full object-cover" src="${prod.image}" />
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="font-semibold">&#8377;${prod.price}</h5>
                    </div>
                </div>
            `;
        });

        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

addProduct();
addFavourate();
addToCart();
showCart();