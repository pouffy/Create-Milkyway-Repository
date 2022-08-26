<recipetype:create:mixing>.addRecipe("sceyntinelochine_recipe", <constant:create:heat_condition:heated>, 
    [<fluid:kubejs:sceyntinelochine> * 200], 
    [<item:createbb:white_meth>, <item:twilightforest:liveroot> * 2], [<fluid:minecraft:water> * 100], 
    40
);

<recipetype:create:mixing>.addRecipe("sepinttecin_recipe", <constant:create:heat_condition:heated>, 
    [<fluid:kubejs:sepinttecin> * 200], 
    [<item:createbb:red_phosphorus>, <item:createaddition:biomass> * 2], [<fluid:minecraft:water> * 100], 
    40
);

<recipetype:create:mixing>.addRecipe("naspaunesweythil_recipe", <constant:create:heat_condition:heated>, 
    [<fluid:kubejs:naspaunesweythil> * 200], 
    [<item:createbb:pseudophedrine>, <item:farmersdelight:organic_compost> * 2], [<fluid:minecraft:water> * 100], 
    40
);

<recipetype:create:mixing>.addRecipe("lostruciuscoynor_recipe", <constant:create:heat_condition:heated>, 
    [<fluid:kubejs:lostruciuscoynor> * 200], 
    [<item:createbb:cyanide>, <item:kubejs:enderium_pearl> * 2], [<fluid:minecraft:water> * 100], 
    40
);

<recipetype:create:mixing>.addRecipe("vestioshuetium_recipe", <constant:create:heat_condition:superheated>, 
    [<fluid:kubejs:vestioshuetium> * 200], 
    [<item:kubejs:kermitamine_dust>], [<fluid:kubejs:lostruciuscoynor> * 100, <fluid:kubejs:sepinttecin> * 100], 
    80
);

<recipetype:create:mixing>.addJsonRecipe("ocheithiopriunyx_recipe", {
  "ingredients": [
    {
      "fluid": "kubejs:naspaunesweythil",
      "amount": 100
    },
    {
      "fluid": "kubejs:sceyntinelochine",
      "amount": 100
    },
    {
      "item": "kubejs:netherite_queens_slime_catalyst"
    }
],
  "results": [
    {
      "fluid": "kubejs:ocheithiopriunyx",
      "amount": 200
    },
    {
      "item": "kubejs:netherite_queens_slime_catalyst"
    }
],
  "heatRequirement": "superheated"
});

<recipetype:create:mixing>.addRecipe("kermitamine_238_recipe", <constant:create:heat_condition:superheated>, 
    [<fluid:kubejs:kermitamine_238> * 200], 
    [<item:kubejs:kermitamine_dust>], [<fluid:kubejs:ocheithiopriunyx> * 100, <fluid:kubejs:vestioshuetium> * 100], 
    80
);

<recipetype:create:mixing>.addJsonRecipe("kermitamine_235_recipe", {
  "ingredients": [
    {
      "fluid": "kubejs:kermitamine_238",
      "amount": 900
    },
    {
      "fluid": "kubejs:kermitamine_233",
      "amount": 100
    },
    {
      "item": "kubejs:netherite_queens_slime_catalyst"
    }
],
  "results": [
    {
      "fluid": "kubejs:kermitamine_235",
      "amount": 200
    },
    {
      "item": "kubejs:netherite_queens_slime_catalyst"
    }
],
  "heatRequirement": "superheated"
});