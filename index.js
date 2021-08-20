var element = document.querySelectorAll('#memory1');
var firstTime = true;
class Cpu {
    constructor() {
      this.instruction1 = document.querySelector("#instruction1");
      this.instruction2 = document.querySelector("#instruction2");
      this.instruction3 = document.querySelector("#instruction3");
      this.PC = document.querySelector("#registerPC");
      this.AC = document.querySelector("#registerAC");
      this.IR = document.querySelector("#registerIR");      
    }
  }
  class Memory {
    constructor() {
      this.adress1 = document.querySelector("#adress1");
      this.adress2 = document.querySelector("#adress2");
      this.adress3 = document.querySelector("#adress3");
      this.adress4 = document.querySelector("#adress4");

      this.memory1 = document.querySelector("#memory1");
      this.memory2 = document.querySelector("#memory2");
      this.memory3 = document.querySelector("#memory3");
      this.memory4 = document.querySelector("#memory4");
    }
  }

  class Memory2 {
    constructor() {
      this.adressL1 = document.querySelector("#adressL1");
      this.adressL2 = document.querySelector("#adressL2");
      this.adressL3 = document.querySelector("#adressL3");

      this.memoryL1 = document.querySelector("#memoryL1");
      this.memoryL2 = document.querySelector("#memoryL2");
      this.memoryL3 = document.querySelector("#memoryL3");
    }
}

var cpu;
var memory;
var memory2;

async function simulate2(){
    loadMapanew();
    cpu = new Cpu();
    memory = new Memory();
    memory2 = new Memory2();
    var fistIteration = true;
    for (const [key, value] of memoryMap)
    {
        var _IRCell = cpu.instruction3;
        var _ACCell = cpu.instruction2;
        var _PCCell = cpu.instruction1;
        console.log("Current key is: ", key);
        if(key != _PCCell.value && fistIteration)continue;
        //Reset
        fistIteration = false;
        var activeMCell = value.memory;
        var activeMCellAddress = value.address;
        console.log("ActiveMCellValue:",activeMCell.value);
        var offsetX = $(_IRCell).offset().left - $(activeMCell).offset().left;
        var offsetY = $(_IRCell).offset().top - $(activeMCell).offset().top;
        await anime({
            targets:activeMCell,
            translateX:offsetX ,
            translateY: offsetY,
            duration: 1500,
            loop: 1,
            direction: 'alternate',
            // easing: 'easeInOutQuad',
            easing: 'easeInOutCirc',
            update:function(anim){
                if(Math.round(anim.progress)=== 100){
                    // console.log("HALF TIME");
                    _IRCell.value = activeMCell.value;
                }
                // console.log('progress : ' + Math.round(anim.progress) + '%');
            },
            begin: function(anim) {
                console.log('began : ' + anim.began);
              },
            complete: function(anim) {
                console.log('completed : ' + anim.completed);
              }
            
        })
        .finished;
        switch(parseInt(_IRCell.value[0])) {
            case 1:
            //Load AC to memory
            
            var activeAddressTBL = _IRCell.value.substring(1);
            console.log("activeAddressTBL:: ",activeAddressTBL)

            var memoryTBL = getMemory2ByAddress(activeAddressTBL).memory;

            var offsetX = $(_ACCell).offset().left - $(memoryTBL).offset().left;
            var offsetY = $(_ACCell).offset().top - $(memoryTBL).offset().top;
           await anime({
                targets:memoryTBL,
                translateX:offsetX ,
                translateY: offsetY,
                duration: 1500,
                loop: 1,
                direction: 'alternate',
                easing: 'easeInOutCirc',
                update:function(anim){
                    if(Math.round(anim.progress)=== 100){
                        // console.log("HALF TIME");
                        _ACCell.value = memoryTBL.value;;
                    }
                }
            }).finished;          
              break;
            case 2:
            //Store AC to memory
            var activeAddressTBL = _IRCell.value.substring(1);
            console.log("activeAddressTBL:: ",activeAddressTBL)
            var memoryTBL = getMemory2ByAddress(activeAddressTBL).memory;

            var offsetX = $(_ACCell).offset().left - $(memoryTBL).offset().left;
            var offsetY = $(_ACCell).offset().top - $(memoryTBL).offset().top;
           await anime({
                targets:_ACCell,
                translateX: - offsetX ,
                translateY: - offsetY,
                duration: 1500,
                loop: 1,
                direction: 'alternate',
                easing: 'easeInOutCirc',
                update:function(anim){
                    if(Math.round(anim.progress)=== 100){
                        // console.log("HALF TIME");
                         memoryTBL.value = _ACCell.value;
                    }
                }
            }).finished;
              break;
            case 5:
            //Add to AC from memory
            var addedOnceAlready = false;
            var activeAddressTBL = _IRCell.value.substring(1);
            console.log("activeAddressTBL:: ",activeAddressTBL)
            var memoryTBL = getMemory2ByAddress(activeAddressTBL).memory;
            
            var offsetX = $(_ACCell).offset().left - $(memoryTBL).offset().left;
            var offsetY = $(_ACCell).offset().top - $(memoryTBL).offset().top;
           await anime({
                targets:memoryTBL,
                translateX: offsetX ,
                translateY: offsetY,
                duration: 1500,
                loop: 1,
                direction: 'alternate',
                easing: 'easeInOutCirc',
                update:function(anim){
                    if(Math.round(anim.progress)=== 100 && !addedOnceAlready){
                        addedOnceAlready = true;
                        _ACCell.value = padWithZeroes(parseInt(memoryTBL.value , 16) +  parseInt(_ACCell.value?_ACCell.value:0 , 16));
                    }
                }
            }).finished;
               break
            default:
              alert("Input error please check your input!");
              location.reload();
          }
          _PCCell.value = parseInt(_PCCell.value) + 1; 
        }
}


