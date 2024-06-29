const attack=(creatureName,damage,isCritial)=>{
    return `${creatureName} dealt ${isCritial? damage *2:damage} damage!`
}


module.exports=attack