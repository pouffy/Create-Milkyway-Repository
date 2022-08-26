import mods.jei.JEI;
import mods.jei.category.JeiCategory;
import mods.jei.category.CatalystRequiringRecipe;
import crafttweaker.api.text.Component;

val catalystReqRecipeBuilder = JeiCategory.create<mods.jei.category.CatalystRequiringRecipe>("blood_input", "Hephaestus Input" as Component, <item:forbidden_arcanus:hephaestus_forge>, [<item:forbidden_arcanus:hephaestus_forge>]) as JeiCategory;
JEI.addCategory(catalystReqRecipeBuilder);
catalystReqRecipeBuilder.addRecipe([<item:kubejs:blood> * 25], [[<item:forbidden_arcanus:hephaestus_forge>], [<item:tconstruct:blood_slime_ball>]]);
catalystReqRecipeBuilder.addRecipe([<item:kubejs:blood>], [[<item:forbidden_arcanus:hephaestus_forge>], [<item:forbidden_arcanus:blood_test_tube>]]);
catalystReqRecipeBuilder.addRecipe([<item:kubejs:soul>], [[<item:forbidden_arcanus:hephaestus_forge>], [<item:forbidden_arcanus:soul>]]);
catalystReqRecipeBuilder.addRecipe([<item:kubejs:soul>], [[<item:forbidden_arcanus:hephaestus_forge>], [<item:forbidden_arcanus:dark_soul>]]);
catalystReqRecipeBuilder.addRecipe([<item:kubejs:experience> * 91], [[<item:forbidden_arcanus:hephaestus_forge>], [<item:forbidden_arcanus:xpetrified_orb>]]);
catalystReqRecipeBuilder.addRecipe([<item:kubejs:experience> * 7], [[<item:forbidden_arcanus:hephaestus_forge>], [<item:minecraft:experience_bottle>]]);
catalystReqRecipeBuilder.addRecipe([<item:kubejs:aureal> * 35], [[<item:forbidden_arcanus:hephaestus_forge>], [<item:forbidden_arcanus:aureal_bottle>]]);
