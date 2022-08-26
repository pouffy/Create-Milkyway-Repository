<recipetype:create:mixing>.addRecipe("kermitamine_233_recipe", <constant:create:heat_condition:heated>, 
    [<item:kubejs:solid_kermitamine_233> * 1], 
    [<item:thermal:emerald_dust> * 2, <item:createbb:blue_meth>], [<fluid:minecraft:water> * 200],  
    45
);

<recipetype:tconstruct:melting>.addJsonRecipe("kermitamine_233_melt_recipe", {
  "ingredient": {
    "item": "kubejs:solid_kermitamine_233"
  },
  "result": {
    "fluid": "kubejs:kermitamine_233",
    "amount": 144
  },
  "temperature": 950,
  "time": 100
});