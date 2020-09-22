const {Qvote} = require('./../models');
const {nanoid} = require('nanoid')

async function createQvote(data){
    
    console.log('------>',data.qvoteContent,nanoid(7));
    try{
        const temp = await Qvote.create({
            qvoteContent: data.qvoteContent,
            qvoteCode:nanoid(7)
        })
        return {error:null,data:temp};
    }catch(e){
        console.log('---->',e)
        return {error:true,data:e};
    }
   
}
module.exports={
    createQvote
}