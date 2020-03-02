function LifeForm(settings){
    this.gender = Math.floor(Math.random() * 1);
    this.species = settings.species || "critter";
    this.speciesID = settings.speciesID || 0;
    this.ID = settings.ID;
    this.Weight = settings.weight || 10;
    this.Speed = settings.speed || 5;
    this.Strength = settings.strength || 5;
    this.hunts = settings.hunts || 0;
}

LifeForm.prototype.hunt = function(){
    var tries = 0;

    while(tries < 3){
        
    }
}