const paswordbox=document.getElementById("pasword");
const length=12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789"
const symbol="@#$%^&*()_+~|}{[]></-=";
const allchars=uppercase+lowercase+number+symbol;

function createpasword(){
    let pasword= "";
    pasword += uppercase[Math.floor(Math.random() * uppercase.length)]
    pasword += lowercase[Math.floor(Math.random() * lowercase.length)]
    pasword += symbol[Math.floor(Math.random() * number.length)]
    pasword += symbol[Math.floor(Math.random() * symbol.length)]

    while(length>pasword.length){
        pasword +=allchars[Math.floor(Math.random() * allchars.length)];
    }
    paswordbox.value=pasword;

}
function copypasword(){
    paswordbox.select();
    document.execCommand("copy")
}