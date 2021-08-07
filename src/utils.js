function makeAjaxCall(currRoute){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            if(currRoute === 'splash'){
                if (Math.floor(Math.random()*10) % 2 === 0){
                    resolve({type: 'error'});
                } else {
                    resolve({type: 'success'})
                }
            } else{
                resolve({type: 'success'});
            }


        },300);
    })
}

export default {makeAjaxCall};