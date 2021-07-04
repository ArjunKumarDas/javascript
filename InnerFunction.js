function something(greet, name){
    function getFristName(){
        if (name){
            return name.split(' ')[0]
        } else{
            return ''
        }
    }
    var sms = greet + ' ' + getFristName()
    console.log(sms);
}

something('Good Morning', 'Dud')