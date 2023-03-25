https://support.apple.com/en-in





var a = document.querySelectorAll(".as-imagegrid-item span")

const newArray = [];
a.forEach(function hello(currentValue){
    newArray.push(currentValue.innerText);
    })

console.log(newArray)
VM2171:1 (7) ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']