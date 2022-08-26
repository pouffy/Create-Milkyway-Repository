<recipetype:create:mixing>.addRecipe("regeneration_22",
 <constant:create:heat_condition:heated>,
  [
  <item:minecraft:potion>.withTag({Potion: "minecraft:strong_regeneration" as string}),
  <item:kubejs:blank_tablet> % 50,
  <item:kubejs:blank_tablet>
   ],
    [
    <item:minecraft:potion>.withTag({Potion: "minecraft:strong_poison" as string}),
     <item:kubejs:alchemic_tablet> * 4,
     <item:forbidden_arcanus:arcane_crystal_dust>
     ],
       [], 200);
       <recipetype:create:mixing>.addRecipe("regeneration_45",
        <constant:create:heat_condition:heated>,
         [
         <item:minecraft:potion>.withTag({Potion: "minecraft:regeneration" as string}),
         <item:kubejs:blank_tablet> % 50,
         <item:kubejs:blank_tablet>
          ],
           [
           <item:minecraft:potion>.withTag({Potion: "minecraft:poison" as string}),
            <item:kubejs:alchemic_tablet> * 4,
            <item:forbidden_arcanus:arcane_crystal_dust>
            ],
              [], 200);
              <recipetype:create:mixing>.addRecipe("regeneration_90",
               <constant:create:heat_condition:heated>,
                [
                <item:minecraft:potion>.withTag({Potion: "minecraft:long_regeneration" as string}),
                <item:kubejs:blank_tablet> % 50,
                <item:kubejs:blank_tablet>
                 ],
                  [
                  <item:minecraft:potion>.withTag({Potion: "minecraft:long_poison" as string}),
                   <item:kubejs:alchemic_tablet> * 4,
                   <item:forbidden_arcanus:arcane_crystal_dust>
                   ],
                     [], 200);
