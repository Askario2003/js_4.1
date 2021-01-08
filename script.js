function min(y1, y2){
    let res = y2 - y1
    return res
}
let x = +prompt('введите год рождения')
x = x> 1900? x :1900
let y = +prompt('введите нынешний год')
y =  y > x ? y : 2021
let name= prompt('введите ваше имя')
let z = min(x,y)

console.info( name + ' , ваш возраст ' + z)
