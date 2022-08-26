// MixingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as IFluidStack[], duration as int) as void

<recipetype:create:mixing>.addRecipe("mixed", <constant:create:heat_condition:heated>, [<item:forbidden_arcanus:dark_rune> % 50, <item:forbidden_arcanus:rune> % 50, (<item:thermal:lapis_dust> * 2) % 12], [<item:thermal:emerald_dust> * 2, <item:thermal:diamond_dust> * 2], [<fluid:createchromaticreturn:liquid_experience> * 250], 200);

<recipetype:create:mixing>.addRecipe("amethyst_blooming", <constant:create:heat_condition:heated>, [<item:minecraft:amethyst_shard>, <item:kubejs:amethyst_clump> % 50], [<item:thermal:basalz_powder> * 2, <item:minecraft:amethyst_shard>], [<fluid:minecraft:water> * 500], 200);

<recipetype:create:mixing>.addRecipe("amethyst_cluster",
 <constant:create:heat_condition:heated>,
  [
  <item:amethysttoolsmod:amethyst_cluster>
   ],
    [
    <item:thermal:basalz_powder> * 2,
     <item:kubejs:amethyst_clump>
     ],
      [<fluid:kubejs:crushed_amethyst> * 500,
      <fluid:tconstruct:earth_slime> * 250
      ],
       200);
