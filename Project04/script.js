const arr = [
    {
        name: "Petals of roses",
        image: "https://images.unsplash.com/photo-1695828146664-a1dbd3b2db9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGV0YWxzJTIwb2YlMjByb3Nlc3xlbnwwfHwwfHx8MA%3D%3D"    
    },
    {
        name: "Animals of town",
        image: "https://images.unsplash.com/photo-1595242281355-ca0e9f600be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW5pbWFscyUyMG9mJTIwdG93bnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "the crowd of city",
        image: "https://images.unsplash.com/photo-1579441407794-574f7a3889fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwY3Jvd2QlMjBvZiUyMGNpdHl8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "fruits of planet",
        image: "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwb2YlMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "orange peeled",
        image: "https://images.unsplash.com/photo-1611414040092-11f9ac8e3b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww"
    },
    {
        name: "web design",
        image: "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
    },
    {
        name: "Funny memes",
        image: "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RnVubnklMjBtZW1lc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Apple Juice",
        image: "https://images.unsplash.com/photo-1720163194356-4927e1dfb53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"
    },
]

function showTheCards(){
    let clutter = "";

    arr.forEach(function(obj){
        clutter += `
            <div class="box">
                <img class="cursor-pointer" src="${obj.image}" alt="something"/>
                <div class="caption">${obj.name}</div>
            </div>
        `;
    });

    document.querySelector(".container").innerHTML = clutter;
}

function searchAnything(){
    let input = document.querySelector("#searchInput");
    
    input.addEventListener("focus", () => {
        document.querySelector(".overlay").style.display = "block";
    });
    input.addEventListener("blur", () => {
        document.querySelector(".overlay").style.display = "none";
    });
    input.addEventListener("input", () => {
        const inputValue = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        let clutter = "";
        inputValue.forEach(function(obj){
            clutter += `
                <div class="res flex px-8 py-3">
                    <i class="ri-search-line font-semibold mr-5"></i>
                    <h3 class="font-semibold">${obj.name}</h3>
                </div>
            `;
        });

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    });

}

showTheCards();
searchAnything();