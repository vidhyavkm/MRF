// const arr = [1,2,3,4,5] 
// // oupput=> 2,4,6,8,10
// mul all the elem in the arr by 2.

// const arr = [1,2,3,4,5] //  output=15
// add all the lem in arr // acc=5 =>20


const url = "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

async function getData(url,cb){
    const res = await fetch(url);
    const data = await res.json();
    cb(data);
}
function displayData(data){
    console.log(data);
    const delDes = data.map((val,ind,arr)=> {
        let obj = {...val}       
        delete obj["description"]
        return obj
    })
    console.log(delDes)

    const rel2020 = delDes.filter((val,ind,arr)=> val.year == 2020 );
    console.log(rel2020);

    const div = delDes.filter((val,ind,arr)=>ind%2 == 0);
    console.log(div);

    // div.reduce((acc, val, ind)=>{
    //     console.log(acc)
    //     // console.log(val)
    //     return ind
    // },0)
    console.log(data.reduce((accu, val, ind)=>{
        return accu+val.votes
    },0))
}

const data = getData(url,displayData)
console.log(data);

