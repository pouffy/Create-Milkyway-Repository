<recipetype:create:mixing>.addRecipe("weakness_90",
 <constant:create:heat_condition:heated>,
  [
  <item:minecraft:potion>.withTag({Potion: "minecraft:long_weakness" as string}),
  <item:kubejs:blank_tablet> % 50,
  <item:kubejs:blank_tablet>
   ],
    [
    <item:minecraft:potion>.withTag({Potion: "minecraft:strength" as string}),
     <item:kubejs:alchemic_tablet> * 4,
     <item:forbidden_arcanus:corrupti_dust>
     ],
       [], 200);
       <recipetype:create:mixing>.addRecipe("weakness_240",
        <constant:create:heat_condition:heated>,
         [
         <item:minecraft:potion>.withTag({Potion: "minecraft:weakness" as string}),
         <item:kubejs:blank_tablet> % 50,
         <item:kubejs:blank_tablet>
          ],
           [
           <item:minecraft:potion>.withTag({Potion: "minecraft:strong_strength" as string}),
            <item:kubejs:alchemic_tablet> * 4,
            <item:forbidden_arcanus:corrupti_dust>
            ],
              [], 200);
