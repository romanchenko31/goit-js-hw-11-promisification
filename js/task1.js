const delay = ms => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {    
                resolve(ms);
        },ms) 
    })   
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(1000).then(logger);