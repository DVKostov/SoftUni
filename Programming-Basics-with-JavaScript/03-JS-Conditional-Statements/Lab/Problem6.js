function Problem6(pass){
    let truepass = 's3cr3t!P@ssw0rd';
    let rez
    if(pass == truepass){
        rez = 'Welcome'
    }else{
        rez = 'Wrong password!'
    }
    console.log(rez)
}
Problem6('s3cr3t!P@ssw0rd')