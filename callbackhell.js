function getuserdetails(id){
    return new Promise((resolve,reject)=>{
        console.log("fun1 called");
        resolve({userrollno:"506"});
    })
}
function usergetsub(userrollno){
    return new Promise((resolve,reject)=>{
 console.log("fun2 called");
 reject({usersubid:"eng-1"});
    })
}
function usergetmarks(usersubid){
    return new Promise((resolve,reject)=>{
        console.log("fun3 called");
        reject("getting user subid:",usersubid);
    })
}
getuserdetails("123").then((result)=>{
    return usergetsub(result.userrollno)}).then((result)=>{
        return usergetmarks(result.usersubid)}).then((result)=>{
            console.log(result);
        })
        .catch((error) =>console.log(error));