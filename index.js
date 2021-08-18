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
      this.adress5 = document.querySelector("#adress5");
      this.adress6 = document.querySelector("#adress6");
      this.adress7 = document.querySelector("#adress7");

      this.memory5 = document.querySelector("#memory5");
      this.memory6 = document.querySelector("#memory6");
      this.memory7 = document.querySelector("#memory7");
    }
}
var cpu;
var memory;
var memory2;

async function simulate() {
    if(!firstTime){
        location.reload();
    }
    firstTime  = false;
    cpu = new Cpu();
    memory = new Memory();
    memory2 = new Memory2();
    var s1x = $(cpu.instruction3).offset().left - $(memory.memory1).offset().left;
    var s1y = $(cpu.instruction3).offset().top - $(memory.memory1).offset().top;
   var step1 =  await anime({
        targets:'#memory1',
        translateX:s1x ,
        translateY: s1y,
        duration: 1500,
        easing: 'easeInOutQuad',
        complete: function() {
            cpu.instruction3.value = 1940;
        }
    }).finished;
    
    await anime({
        targets:'#memory1',
        translateX: $(cpu.instruction3).offset().left - $(memory.memory1).offset().left ,
        translateY: $(cpu.instruction3).offset().top - $(memory.memory1).offset().top,
        duration: 800,
        easing: 'easeInOutQuad',
        
    }).finished;


    var s2x = $(cpu.instruction2).offset().left - $(memory2.memory5).offset().left;
    var s2y = $(cpu.instruction2).offset().top - $(memory2.memory5).offset().top;
   var step2 = await anime({
        targets:'#memory5',
        translateX:s2x ,
        translateY: s2y,
        duration: 1500,
        easing: 'easeInOutQuad',
        complete: function() {
            cpu.instruction2.value = "0003";
        }
    }).finished;
    await anime({
        targets:'#memory5',
        translateX: $(cpu.instruction2).offset().left - $(memory2.memory5).offset().left ,
        translateY: $(cpu.instruction2).offset().top - $(memory2.memory5).offset().top,
        duration: 800,
        easing: 'easeInOutQuad',
        
    }).finished;



    var s3x = $(cpu.instruction3).offset().left - $(memory.memory2).offset().left;
    var s3y = $(cpu.instruction3).offset().top - $(memory.memory2).offset().top;
   var step3 = await anime({
        targets:'#memory2',
        translateX:s3x ,
        translateY: s3y,
        duration: 1500,
        easing: 'easeInOutQuad',
        complete: function() {
            cpu.instruction3.value = "5941";
        }
    }).finished;
    await anime({
        targets:'#memory2',
        translateX: $(cpu.instruction3).offset().left - $(memory.memory2).offset().left ,
        translateY: $(cpu.instruction3).offset().top - $(memory.memory2).offset().top,
        duration: 800,
        easing: 'easeInOutQuad',
        
    }).finished;


    var s4x = $(cpu.instruction2).offset().left - $(memory2.memory6).offset().left;
    var s4y = $(cpu.instruction2).offset().top - $(memory2.memory6).offset().top;
   var step4 = await anime({
        targets:'#memory6',
        translateX:s4x ,
        translateY: s4y,
        duration: 1500,
        easing: 'easeInOutQuad',
        complete: function() {
            cpu.instruction2.value = "0005";
        }
    }).finished;
    await anime({
        targets:'#memory6',
        translateX: $(cpu.instruction2).offset().left - $(memory2.memory6).offset().left ,
        translateY: $(cpu.instruction2).offset().top - $(memory2.memory6).offset().top,
        duration: 800,
        easing: 'easeInOutQuad',
        
    }).finished;


    var s5x = $(cpu.instruction3).offset().left - $(memory.memory3).offset().left;
    var s5y = $(cpu.instruction3).offset().top - $(memory.memory3).offset().top;
   var step5 = await anime({
        targets:'#memory3',
        translateX:s5x ,
        translateY: s5y,
        duration: 1500,
        easing: 'easeInOutQuad',
        complete: function() {
            cpu.instruction3.value = "2941";
        }
    }).finished;
    await anime({
        targets:'#memory3',
        translateX: $(cpu.instruction3).offset().left - $(memory.memory3).offset().left ,
        translateY: $(cpu.instruction3).offset().top - $(memory.memory3).offset().top,
        duration: 800,
        easing: 'easeInOutQuad',
        
    }).finished;


    var s6x = $(cpu.instruction2).offset().left - $(memory2.memory6).offset().left;
    var s6y = $(cpu.instruction2).offset().top - $(memory2.memory6).offset().top;
   var step6 = await anime({
        targets:'#instruction2',
        translateX: -s6x ,
        translateY: -s6y,
        duration: 1500,
        easing: 'easeInOutQuad',
        complete: function() {
            memory2.memory6.value = "0005";
        }
    }).finished;
    await anime({
        targets:'#instruction2',
        translateX: $(cpu.instruction2).offset().left - $(memory2.memory6).offset().left ,
        translateY: $(cpu.instruction2).offset().top - $(memory2.memory6).offset().top,
        duration: 800,
        easing: 'easeInOutQuad',
        
    }).finished;
    
};

