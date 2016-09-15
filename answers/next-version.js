function nextVersion(v){
    var vList = v.split(".").map((x) => parseInt(x)),
        change = true;

    for (var i = vList.length -1; i >= 0; i--){
        if(vList[i] === 9 && change){
            vList[i] = 0;
        } else if(change){
            vList[i] += 1;
            change = false;   
        }
    }

    return vList.join(".");
}

console.log(nextVersion("1.2.9.9.5.2"))