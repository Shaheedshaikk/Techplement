
let x = document.getElementById("location-input1");
let y = document.getElementById("temp-value1");
let z = document.getElementById("location1");
let p = document.getElementById("wea-desc1");
let q =document.getElementById("butn1");
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

            if (!isNaN(loc)) {
                // If input is a number (zipcode)
                url = "https://api.openweathermap.org/data/2.5/weather?zip="+loc+"&appid=4a44398b87b4a5e9077cef8bf245d80f";
              } else {
                // If input is a string (city name)
                url = "https://api.openweathermap.org/data/2.5/weather?q="+loc+"&appid=4a44398b87b4a5e9077cef8bf245d80f";
              }

            
            
            fetch(url).then(res => res.json())
            .then(data => {
                console.log(data)
                const{name} = data
                const{feels_like} = data.main
                const{description} = data.weather[0]
                const{icon} = data.weather[0]
                const{humidity} = data.main
                const{pressure} = data.main
                const{temp_min} = data.main
                const{temp_max} = data.main
                const{speed} = data.wind
                
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
               

            
              document.getElementById("data").style.display="block"
              
           
            })
            .catch(()=>{
                alert("Enter a valid location")

            })
            
        }
        
}