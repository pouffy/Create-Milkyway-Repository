onEvent('recipes', event => {
  //THERMALS ALLOYING SYSTEM
  event.remove({output: '#thermal:blends'})
  event.remove({type: 'thermal:furnace'})
})
onEvent('recipes', event => {
  //IRON
  event.remove({output: 'minecraft:iron_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'minecraft:iron_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'minecraft:iron_nugget', type: 'minecraft:smelting'})
  event.remove({output: 'minecraft:iron_nugget', type: 'minecraft:blasting'})
  event.remove({output: 'minecraft:iron_nugget', type: 'thermal:furnace'})
  event.remove({output: 'minecraft:iron_ingot', type: 'thermal:furnace'})
  event.remove({id: 'minecraft:iron_block'})
  event.remove({id: 'minecraft:iron_ingot_from_nuggets'})
  event.remove({id: 'minecraft:iron_nugget'})
  event.remove({id: 'minecraft:iron_ingot_from_iron_block'})
  event.remove({id: 'floormats:connected/ingots/iron_ingot_from_connected_iron_block'})
  //COPPER
  event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'minecraft:copper_ingot', type: 'thermal:furnace'})
  event.remove({id: 'thermal:furnace_410426364'})
  event.remove({id: 'thermal:furnace_1477674887'})
  event.remove({id: 'thermal:furnace_1134567716'})
  event.remove({id: 'thermal:furnace_1124548317'})
  event.remove({id: 'thermal:furnace_167958858'})
  event.remove({id: 'minecraft:copper_block'})
  event.remove({id: 'create:crafting/materials/copper_ingot'})
  event.remove({id: 'thermal:storage/copper_ingot_from_nuggets'})
  event.remove({id: 'tconstruct:common/materials/copper_ingot_from_nuggets'})
  event.remove({id: 'create:copper_nugget'})
  event.remove({id: 'create:crafting/materials/copper_nugget'})
  event.remove({id: 'thermal:storage/copper_nugget_from_ingot'})
  event.remove({id: 'tconstruct:common/materials/copper_nugget_from_ingot'})
  event.remove({id: 'minecraft:copper_ingot'})
  event.remove({id: 'minecraft:copper_ingot_from_waxed_copper_block'})
  event.remove({id: 'floormats:connected/ingots/iron_ingot_from_connected_iron_block'})
  //GOLD
  event.remove({output: 'minecraft:gold_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'minecraft:gold_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'minecraft:gold_ingot', type: 'thermal:furnace'})
  event.remove({output: 'minecraft:gold_nugget', type: 'minecraft:smelting'})
  event.remove({output: 'minecraft:gold_nugget', type: 'minecraft:blasting'})
  event.remove({id: 'minecraft:gold_block'})
  event.remove({id: 'minecraft:gold_ingot_from_nuggets'})
  event.remove({id: 'minecraft:gold_nugget'})
  event.remove({id: 'minecraft:gold_ingot_from_gold_block'})
  event.remove({id: 'floormats:connected/ingots/gold_ingot_from_connected_gold_block'})
  event.remove({id: 'thermal:furnace_745211813'})
  event.remove({id: 'thermal:furnace_76494838'})
  event.remove({id: 'thermal:furnace_468217544'})
  event.remove({id: 'thermal:furnace_1284850946'})
  event.remove({id: 'thermal:furnace_1469869513'})
  event.remove({id: 'thermal:furnace_284471966'})
  //ARCANE GOLD
  event.remove({id: 'forbidden_arcanus:arcane_gold_block_from_arcane_gold_ingot'})
  event.remove({id: 'forbidden_arcanus:arcane_gold_ingot_from_arcane_gold_nugget'})
  event.remove({id: 'forbidden_arcanus:arcane_gold_ingot'})
  event.remove({id: 'forbidden_arcanus:arcane_gold_nugget_from_arcane_gold_ingot'})
  event.remove({id: 'forbidden_arcanus:arcane_gold_ingot_from_arcane_gold_block'})
  //ENDERIUM
  event.remove({id: 'thermal:furnace_843229313'})
  event.remove({id: 'thermal:storage/enderium_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/enderium_block'})
  event.remove({id: 'thermal:storage/enderium_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/enderium_ingot_from_block'})
  event.remove({output: 'thermal:enderium_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'thermal:enderium_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'thermal:enderium_ingot', type: 'thermal:furnace'})
  //LUMIUM
  event.remove({id: 'thermal:storage/lumium_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/lumium_block'})
  event.remove({id: 'thermal:storage/lumium_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/lumium_ingot_from_block'})
  event.remove({output: 'thermal:lumium_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'thermal:lumium_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'thermal:lumium_ingot', type: 'thermal:furnace'})
  //SIGNALUM
  event.remove({id: 'thermal:storage/signalum_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/signalum_block'})
  event.remove({id: 'thermal:storage/signalum_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/signalum_ingot_from_block'})
  event.remove({output: 'thermal:signalum_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'thermal:signalum_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'thermal:signalum_ingot', type: 'thermal:furnace'})
  //BRONZE
  event.remove({id: 'thermal:storage/bronze_nugget_from_ingot'})
  event.remove({id: 'alloyed:crafting/bronze_ingot_from_decompacting'})
  event.remove({id: 'alloyed:mixing/bronze_ingot_x3'})
  event.remove({id: 'alloyed:mixing/bronze_ingot'})
  //NICKEL
  event.remove({output: '#milkyway:nickel', type: 'minecraft:smelting'})
  event.remove({output: '#milkyway:nickel', type: 'minecraft:blasting'})
  event.remove({output: '#milkyway:nickel', type: 'minecraft:crafting'})
  event.remove({id: 'thermal:storage/nickel_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/nickel_block'})
  event.remove({id: 'thermal:storage/nickel_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/nickel_ingot_from_block'})
  //ELECTRUM
  event.remove({id: 'thermal:storage/electrum_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/electrum_block'})
  event.remove({id: 'thermal:storage/electrum_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/electrum_ingot_from_block'})
  //NETHERITE
  event.remove({id: 'thermal:storage/netherite_ingot_from_nuggets'})
  event.remove({id: 'tconstruct:common/materials/netherite_ingot_from_nuggets'})
  event.remove({id: 'minecraft:netherite_block'})
  event.remove({id: 'minecraft:netherite_ingot'})
  event.remove({id: 'thermal:storage/netherite_nugget_from_ingot'})
  event.remove({id: 'minecraft:netherite_ingot_from_netherite_block'})
  event.remove({output: 'minecraft:netherite_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'minecraft:netherite_ingot', type: 'minecraft:blasting'})
  //BRASS
  event.remove({id: 'create:crafting/materials/brass_ingot_from_compacting'})
  event.remove({id: 'create:crafting/materials/brass_block_from_compacting'})
  event.remove({id: 'create:crafting/materials/brass_nugget_from_decompacting'})
  event.remove({id: 'create:crafting/materials/brass_ingot_from_decompacting'})
  event.remove({id: 'create:mixing/brass_ingot'})
  //CONSTANTAN
  event.remove({id: 'thermal:storage/constantan_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/constantanm_block'})
  event.remove({id: 'thermal:storage/constantan_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/constantan_ingot_from_block'})
  event.remove({output: 'thermal:constantan_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'thermal:constantan_ingot', type: 'minecraft:blasting'})
  //SILVER
  event.remove({output: '#milkyway:silver', type: 'minecraft:smelting'})
  event.remove({output: '#milkyway:silver', type: 'minecraft:blasting'})
  event.remove({output: '#milkyway:silver', type: 'minecraft:crafting'})
  event.remove({id: 'thermal:storage/silver_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/silver_block'})
  event.remove({id: 'thermal:storage/silver_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/silver_ingot_from_block'})
  event.remove({id: 'thermal:furnace_2125293931'})
  event.remove({id: 'thermal:furnace_802729265'})
  event.remove({id: 'thermal:furnace_328430009'})
  event.remove({id: 'thermal:furnace_1034279222'})
  event.remove({id: 'thermal:furnace_524129319'})
  //ALUMINIUM
  event.remove({id: 'milkyway_core:bauxite_block_ore_recipe'})
  event.remove({id: 'milkyway_core:bauxite_ore_smelting'})
  event.remove({id: 'thermal:furnace_1758889882'})
  //LEAD
  event.remove({output: 'thermal:lead_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'thermal:lead_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'thermal:lead_ingot', type: 'minecraft:crafting'})
  event.remove({id: 'thermal:storage/lead_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/lead_block'})
  event.remove({id: 'thermal:storage/lead_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/lead_ingot_from_block'})
  event.remove({id: 'thermal:furnace_1289298338'})
  event.remove({id: 'thermal:furnace_1598885116'})
  event.remove({id: 'thermal:furnace_193672336'})
  event.remove({id: 'thermal:furnace_1401205374'})
  event.remove({id: 'thermal:furnace_996829672'})
  //STEEL
  event.remove({id: 'alloyed:mixing/steel_ingot'})
  event.remove({id: 'alloyed:crafting/steel_block'})
  event.remove({id: 'alloyed:crafting/steel_ingot_from_decompacting'})
  //TIN
  event.remove({output: 'thermal:tin_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'thermal:tin_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'thermal:tin_ingot', type: 'minecraft:crafting'})
  event.remove({id: 'thermal:storage/tin_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/tin_block'})
  event.remove({id: 'thermal:storage/tin_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/tin_ingot_from_block'})
  //INVAR
  event.remove({output: 'thermal:invar_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'thermal:invar_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'thermal:invar_ingot', type: 'minecraft:crafting'})
  event.remove({id: 'thermal:storage/invar_ingot_from_nuggets'})
  event.remove({id: 'thermal:storage/invar_block'})
  event.remove({id: 'thermal:storage/invar_nugget_from_ingot'})
  event.remove({id: 'thermal:storage/invar_ingot_from_block'})
  //ZINC
  event.remove({output: 'create:zinc_ingot', type: 'minecraft:smelting'})
  event.remove({output: 'create:zinc_ingot', type: 'minecraft:blasting'})
  event.remove({output: 'create:zinc_ingot', type: 'minecraft:crafting'})
  event.remove({id: 'create:crafting/materials/zinc_ingot_from_compacting'})
  event.remove({id: 'create:crafting/materials/zinc_ingot_from_decompacting'})
  event.remove({id: 'create:crafting/materials/zinc_block_from_compacting'})
  event.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting'})
})
//THERMAL CUSTOM GLASS & TINKER'S RECIPES

  onEvent('recipes', event => {
    //HARDENED GLASS
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "tag": "forge:glass"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_obsidian",
    "amount": 1000
  },
  "result": "thermal:obsidian_glass",
  "cooling_time": 395
})
//SIGNALUM GLASS
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": "thermal:obsidian_glass"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_signalum",
    "amount": 360
  },
  "result": "thermal:signalum_glass",
  "cooling_time": 120
})
//LUMIUM GLASS
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": "thermal:obsidian_glass"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_lumium",
    "amount": 360
  },
  "result": "thermal:lumium_glass",
  "cooling_time": 120
})
//ENDERIUM GLASS
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": "thermal:obsidian_glass"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_enderium",
    "amount": 360
  },
  "result": "thermal:enderium_glass",
  "cooling_time": 120
})
event.custom({
  "type": "tconstruct:melting_fuel",
  "fluid": {
    "name": "materialis:liquified_radiance",
    "amount": 100
  },
  "duration": 50,
  "temperature": 2000
})
//ARCANE GOLD
event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "name": "tconstruct:molten_gold",
      "amount": 432
    },
    {
      "name": "kubejs:molten_mundabitur",
      "amount": 288
    },
    {
      "name": "kubejs:aureal",
      "amount": 288
    }
  ],
  "result": {
    "fluid": "materialis:molten_arcane_gold",
    "amount": 90
  },
  "temperature": 1500
})
//ALLOYED BRONZE
event.custom({
  "type": "tconstruct:casting_basin",
  "fluid": {
    "name": "tconstruct:molten_bronze",
    "amount": 1296
  },
  "result": "alloyed:bronze_block",
  "cooling_time": 225
})
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": "tconstruct:ingot_cast"
  },
  "cast_consumed": false,
  "fluid": {
    "tag": "tconstruct:molten_bronze",
    "amount": 90
  },
  "result": "alloyed:bronze_ingot",
  "cooling_time": 60
})
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/ingot"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_bronze",
    "amount": 90
  },
  "result": "alloyed:bronze_ingot",
  "cooling_time": 60
})
//OBSIDIAN INGOT
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": "minecraft:iron_ingot"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_obsidian",
    "amount": 90
  },
  "result": "forbidden_arcanus:obsidian_ingot",
  "cooling_time": 60
})
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "tag": "forge:storage_blocks/iron"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_obsidian",
    "amount": 810
  },
  "result": "forbidden_arcanus:processed_obsidian_block",
  "cooling_time": 395
})
event.remove({id: 'forbidden_arcanus:obsidian_with_iron'})
event.remove({id: 'forbidden_arcanus:obsidian_ingot'})
event.remove({id: 'forbidden_arcanus:obsidian_ingot_from_blasting'})
event.remove({id: 'forbidden_arcanus:processed_obsidian_block_from_obsidian_ingot'})
event.remove({id: 'forbidden_arcanus:obsidian_ingot_from_processed_obsidian_block'})
event.custom({
  "type": "tconstruct:melting",
"ingredient": {
  "tag": "forge:ingots/obsidian"
},
"result": {
  "fluid": "tconstruct:molten_obsidian",
  "amount": 90
},
"temperature": 500,
"time": 50
})
//STEEL
event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "name": "tconstruct:molten_iron",
      "amount": 270
    },
    {
      "name": "tconstruct:seared_stone",
      "amount": 180
    }
  ],
  "result": {
    "fluid": "tconstruct:molten_steel",
    "amount": 90
  },
  "temperature": 1540
})
//INDUCTION SMELTER
event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "nourished_end:raw_voidsteel",
      "count": 4
    },
    {
      "item": "nourished_end:malachite",
      "count": 4
    }
  ],
  "result": [
    {
      "item": "nourished_end:voidsteel_ingot",
      "count": 1
    }
  ],
  "energy": 10000
})
event.remove({id: 'nourished_end:voidsteel_ingot'})
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": "alloyed:steel_ingot"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_amethyst_bronze",
    "amount": 90
  },
  "result": "kubejs:amethyst_steel",
  "cooling_time": 60
})
})
