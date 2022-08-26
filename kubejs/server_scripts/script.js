// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

	// Change recipes here
})

onEvent('item.tags', event => {
  event.add('create:upright_on_belt', 'kubejs:enderium_pearl')
  event.add('create:upright_on_belt', 'kubejs:slightly_drained_enderium_pearl')
  event.add('create:upright_on_belt', 'kubejs:drained_enderium_pearl')
  event.add('create:upright_on_belt', 'kubejs:very_drained_enderium_pearl')
  event.add('create:upright_on_belt', 'kubejs:enderium_core')
  event.add('forge:ingots/aluminum', 'milkyway_core:bauxite_ingot')
  event.add('forge:ingots', 'milkyway_core:bauxite_ingot')
  event.add('forge:plates/aluminum', 'milkyway_core:aluminium_plate')
  event.add('forge:plates', 'milkyway_core:aluminium_plate')
  event.remove('forge:ingots/aluminium', 'milkyway_core:bauxite_ingot')
  event.remove('forge:plates/aluminium', 'milkyway_core:aluminium_plate')
  event.add('forge:leaves/mysterywood', 'forbidden_arcanus:mysterywood_leaves')
  event.add('forge:leaves/mysterywood', 'forbidden_arcanus:nuggety_mysterywood_leaves')
  event.add('forbidden_arcanus:blacksmith_gavel', 'milkyway_bosses:lightning_warhammer')
  event.add('tconstruct:anvil_metal', 'milkyway_core:transium_block')
  event.add('forge:ingots/elementium', 'milkyway_core:transium_alloy')
  event.add('forge:ingots', 'milkyway_core:transium_alloy')
  event.add('forge:storage_blocks/elementium', 'milkyway_core:transium_block')
  event.add('forge:storage_blocks', 'milkyway_core:transium_block')
  event.add('create:crushed_ores', 'milkyway_core:crushed_transium')
  event.add('tconstruct:fuel_tanks', 'create:fluid_tank')
  event.add('forge:storage_blocks/aluminum', 'milkyway_core:aluminum_block')
  event.add('thermal:blends', 'thermal:bronze_dust')
  event.add('thermal:blends', 'thermal:electrum_dust')
  event.add('thermal:blends', 'thermal:invar_dust')
  event.add('thermal:blends', 'thermal:constantan_dust')
  event.add('thermal:blends', 'thermal:signalum_dust')
  event.add('thermal:blends', 'thermal:lumium_dust')
  event.add('thermal:blends', 'thermal:enderium_dust')
  event.add('forge:nuggets/aluminum', 'kubejs:aluminium_nugget')
  event.add('forge:nuggets', 'kubejs:aluminium_nugget')
  //NICKEL TAG
  event.add('milkyway:nickel', 'thermal:nickel_ingot')
  event.add('milkyway:nickel', 'thermal:nickel_nugget')
  event.add('milkyway:nickel', 'thermal:nickel_block')
  //BRASS TAG
  event.add('milkyway:brass', 'create:brass_ingot')
  event.add('milkyway:brass', 'create:brass_nugget')
  event.add('milkyway:brass', 'create:brass_block')
  //SILVER TAG
  event.add('milkyway:silver', 'thermal:silver_ingot')
  event.add('milkyway:silver', 'thermal:silver_nugget')
  event.add('milkyway:silver', 'thermal:silver_block')
  //CREATESTEEL INGOTS
  event.add('forge:ingots/shadow_steel', 'createchromaticreturn:shadow_steel')
  event.add('forge:ingots/refined_radiance', 'createchromaticreturn:refined_radiance')
})
  onEvent('block.tags', event => {
    event.add('forge:leaves/mysterywood', 'forbidden_arcanus:mysterywood_leaves')
    event.add('forge:leaves/mysterywood', 'forbidden_arcanus:nuggety_mysterywood_leaves')
    event.add('farmersdelight:heat_sources', 'create:blaze_burner')
    event.add('farmersdelight:tray_heat_sources', 'create:blaze_burner')
    event.add('tconstruct:anvil_metal', 'milkyway_core:transium_block')
    event.add('tconstruct:smeltery/tanks', 'create:fluid_tank')
    event.add('tconstruct:smeltery/wall', 'create:fluid_tank')
    event.add('tconstruct:smeltery', 'create:fluid_tank')
    event.add('tconstruct:fuel_tanks', 'create:fluid_tank')
    event.add('tconstruct:smeltery/tanks', 'create:fluid_tank')
    event.add('forge:storage_blocks/aluminum', 'milkyway_core:aluminum_block')
    event.add('forge:storage_blocks/elementium', 'milkyway_core:transium_block')
    event.add('forge:storage_blocks', 'milkyway_core:transium_block')
    //DUPLICATE CROPS

  })
  //Twilight forest activator item
onEvent('item.tags', e => {
  e.removeAll('twilightforest:portal/activator')
  e.add('twilightforest:portal/activator', 'kubejs:enderium_core')
  e.removeAll('forge:coins/electrum')
  e.add('forge:coins/amethyst', 'thermal:electrum_coin')
})
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
