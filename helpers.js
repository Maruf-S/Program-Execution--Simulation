var memory2Map;
var memoryMap;
function loadMapanew(){
    memory2Map = new Map();
    var allMemory2 = document.querySelectorAll(".memory2 input");
    // God pls make it in order
    for (let index = 0; index < allMemory2.length; index+=2) {
        // const element = array[index];
        memory2Map.set(allMemory2[index].value,
            {
            address:allMemory2[index],
            memory:allMemory2[index+1]
        }
        )
        
    }
    memoryMap = new Map();
    var allMemory = document.querySelectorAll(".form-group.memory input");
    for (let index = 0; index < allMemory.length; index+=2) {
        // const element = array[index];
        memoryMap.set(allMemory[index].value,
            {
            address:allMemory[index],
            memory:allMemory[index+1]
        }
        )
        
    }
}
function getMemory2ByAddress(address){
    return memory2Map.get(address);
}
function getMemoryByAddress(address){
    return memoryMap.get(address);
}
function padWithZeroes(number) {
    length = 4;

    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }

    return my_string;

}
function addMemoryField() {
    $(".m1Btn").before(
        `
        <div class="row my-2 memory2">
        <div class="col-4">
            <input type="text" class="text-center border form-control-plaintext me-4 sform" id="adressL1" value="${parseInt(Array.from(memoryMap.values()).pop().address.value)+1}" required>
        </div>
        <div class="col-8">
            <input type="text" class="form-control mform" id="memoryL1" required>
        </div>
      </div>
        `
    );  
    loadMapanew();
}
function addMemory2Field(){
//     var parent = document.querySelector(".form-group");
//     parent.innerHTML +=  `
//     <div class="row my-2 memory2">
//     <div class="col-4">
//         <input type="text" class="text-center border form-control-plaintext me-4 sform" id="adressL1" value="" required>
//     </div>
//     <div class="col-8">
//         <input type="text" class="form-control mform" id="memoryL1" value="" required>
//     </div>
//   </div>
//     `;
    $(".m2Btn").before(
        `
        <div class="row my-2 memory2">
        <div class="col-4">
            <input type="text" class="text-center border form-control-plaintext me-4 sform" id="adressL1" value="${parseInt(Array.from(memory2Map.values()).pop().address.value)+1}" required>
        </div>
        <div class="col-8">
            <input type="text" class="form-control mform" id="memoryL1" required>
        </div>
      </div>
        `
    );    
    loadMapanew();
}

loadMapanew();