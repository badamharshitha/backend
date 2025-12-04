function getuserdetails(id){
    console.log(id);
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({userollno:"506"})
    }, 3000)})
};
function getsubmarks(subid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
  resolve({submarks:"80"});
        },2000)
    })
}
function getsubid(rollno){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
  resolve({subid:"eng-1"});
        },2000)
    })
}
const myfunc=async()=>{
    const res=await getuserdetails("123");
    console.log(res.userollno);
    const res1=await getsubid(res);
    console.log(res1.subid);
const res2=await getsubmarks(res1);
    console.log(res2.submarks);
}
myfunc();
getuserdetails();

