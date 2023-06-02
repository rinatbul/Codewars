const randomColor=()=>{
    const color = () => Math.floor(Math.random()*255)
    return (`rgb(${color()},${color()},${color()})`)
}

const get=(obj, path)=>{

}

const obj = {
    a:{
        b:{
            c:'d'
        },
        e:'f'
    }
};

get(obj, 'a.b') //{ c : 'd' }