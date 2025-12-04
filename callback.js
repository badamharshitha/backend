function userdetails(id,getusersubjects){
    console.log("user id:",id);
    getusersubjects({roll:"506"});
    
}
function getusersubjects(userrollno,getusermarks){
console.log("usersubid:",userrollno);
getusermarks({usersubid:"eng-1"});

}
function getusermarks(usersubid){
    console.log("usermarks:",usersubid);

}
userdetails("123",function(roll){
  getusersubjects(roll,function(usersubid){
    getusermarks(usersubid)})
});
