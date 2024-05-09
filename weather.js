

let x = document.getElementById("location-input");
let y = document.getElementById("temp-value");
let z = document.getElementById("location");
let p = document.getElementById("wea-desc");
let q = document.getElementById("butn");
let r = document.getElementById("humi");
let s = document.getElementById("pre");
let t = document.getElementById("mint");
let u = document.getElementById("maxt");
let v = document.getElementById("ws");
let w = document.getElementById("img");




q.onclick = function(){
    if(x.value == "")
        {
            alert("please enter a location")
        }
        else{
            loc = x.value;
            var  url = "https://api.openweathermap.org/data/2.5/weather?q="+loc+"&appid=4a44398b87b4a5e9077cef8bf245d80f"
        
            fetch(url).then(res => res.json())
            .then(data => {
                console.log(data)
                const{name} = data
                const{feels_like} = data.main
                const{description} = data.weather[0]
                const{humidity} = data.main
                const{pressure} = data.main
                const{temp_min} = data.main
                const{temp_max} = data.main
                const{speed} = data.wind
                const{icon} = data.weather[0]
                y.innerText = Math.floor(feels_like-273)
                z.innerText = name;
                p.innerText = description
                r.innerText = humidity
                s.innerText = pressure
                t.innerHTML = Math.floor(temp_min-273)
                u.innerText = Math.floor(temp_max-273)
                v.innerText = speed
                w.innerText = icon

                w.src = "https://openweathermap.org/img/wn/" + icon + ".png";

            
                document.querySelector(".update").style.display = "block"
              
           
            })
            .catch(()=>{
                alert("Enter a valid location")

            })
            
        }
        
}






