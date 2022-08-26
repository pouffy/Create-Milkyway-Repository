onEvent('recipes', event => {
  event.shaped('create:empty_blaze_burner', [
    'B B',
    'BNB',
    'SSS'
  ], {
    B: 'minecraft:iron_bars',
    N: 'minecraft:netherrack',
    S: 'create:iron_sheet'
  })
  event.shaped('create:steam_engine', [
    ' B ',
    ' S ',
    'PCP'
  ], {
    B: 'create:brass_ingot',
    C: 'minecraft:copper_block',
    P: 'create:copper_sheet',
    S: 'alloyed:steel_ingot'
  })
  event.remove({id: 'create:crafting/kinetics/steam_engine'})
  event.shaped('create:brass_hand', [
    ' A ',
    'NNN',
    ' N '
  ], {
    A: 'create:andesite_alloy',
    N: 'thermal:nickel_plate'
  })
  event.remove({id: 'create:crafting/kinetics/brass_hand'})
  event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
  event.remove({id: 'refinedpipes:advanced_item_pipe'})
  event.shaped('6x refinedpipes:basic_item_pipe', [
    'SIS',
    'BNB',
    'SIS'
  ], {
    B: 'create:smart_fluid_pipe',
    N: 'milkyway_core:logic_mechanism',
    S: 'refinedstorage:quartz_enriched_iron',
    I: 'create:brass_sheet'
  })
  event.remove({id: 'refinedpipes:improved_item_pipe'})
  event.shaped('refinedpipes:improved_item_pipe', [
    'SBS',
    'BNB',
    'SBS'
  ], {
    B: 'create:golden_sheet',
    N: 'refinedpipes:basic_item_pipe',
    S: 'refinedstorage:quartz_enriched_iron',
//    I: 'create:brass_sheet'
  })
  event.remove({id: 'refinedpipes:advanced_item_pipe'})
  event.shaped('refinedpipes:advanced_item_pipe', [
    'SBS',
    'BNB',
    'SBS'
  ], {
    B: 'kubejs:polished_diamond_quartz',
    N: 'refinedpipes:basic_item_pipe',
    S: 'refinedstorage:quartz_enriched_iron',
//    I: 'create:brass_sheet'
  })
  event.remove({id: 'refinedpipes:basic_fluid_pipe'})
  event.shaped('refinedpipes:basic_fluid_pipe', [
    'SIS',
    'BNB',
    'SIS'
  ], {
    B: 'create:smart_fluid_pipe',
    N: 'milkyway_core:logic_mechanism',
    S: 'refinedstorage:quartz_enriched_iron',
    I: 'create:copper_sheet'
  })
  event.remove({id: 'refinedpipes:improved_fluid_pipe'})
  event.shaped('refinedpipes:improved_fluid_pipe', [
    'SBS',
    'BNB',
    'SBS'
  ], {
    B: 'create:golden_sheet',
    N: 'refinedpipes:basic_fluid_pipe',
    S: 'refinedstorage:quartz_enriched_iron',
  //  I: 'create:copper_sheet'
  })
  event.remove({id: 'refinedpipes:advanced_fluid_pipe'})
  event.shaped('refinedpipes:advanced_fluid_pipe', [
    'SBS',
    'BNB',
    'SBS'
  ], {
    B: 'kubejs:polished_diamond_quartz',
    N: 'refinedpipes:improved_fluid_pipe',
    S: 'refinedstorage:quartz_enriched_iron',
  //  I: 'create:copper_sheet'
  })
  event.remove({id: 'refinedpipes:elite_fluid_pipe'})
  event.shaped('refinedpipes:elite_fluid_pipe', [
    'SBS',
    'BNB',
    'SBS'
  ], {
    B: 'thermal:emerald_gear',
    N: 'refinedpipes:advanced_fluid_pipe',
    S: 'refinedstorage:quartz_enriched_iron',
  //  I: 'create:copper_sheet'
  })
  event.remove({id: 'refinedpipes:ultimate_fluid_pipe'})
  event.shaped('refinedpipes:ultimate_fluid_pipe', [
    'SBS',
    'BNB',
    'SBS'
  ], {
    B: 'thermal:netherite_plate',
    N: 'refinedpipes:elite_fluid_pipe',
    S: 'refinedstorage:quartz_enriched_iron',
  //  I: 'create:copper_sheet'
  })
  event.shaped('4x create:fluid_pipe', [
    'SSS',
    'IMI',
    'SSS'
  ], {
    I: 'minecraft:copper_ingot',
    M: 'milkyway_core:copper_mechanism',
    S: 'create:copper_sheet'
  })
  event.remove({id: 'create:crafting/kinetics/fluid_pipe'})
    event.remove({id: 'create:crafting/kinetics/fluid_pipe_vertical'})


  event.shaped('create:mechanical_crafter', [
    'S0S',
    'BCB',
    'SMS'
  ], {
    B: 'create:brass_casing',
    C: 'minecraft:crafting_table',
    S: 'create:brass_sheet',
    0: 'create:crafter_slot_cover',
    M: 'create:precision_mechanism'
  })
  event.remove({id: 'create:crafting/kinetics/mechanical_crafter'})
  event.remove({id: 'create:crafting/kinetics/clockwork_bearing'})
  event.remove({id: 'create:crafting/kinetics/mechanical_bearing'})
  event.remove({id: 'create:crafting/kinetics/windmill_bearing'})

    event.shaped('8x create:cogwheel', [
      'BBB',
      'BAB',
      'BBB'
    ], {
      B: '#minecraft:wooden_buttons',
      A: 'create:andesite_alloy'
    })
    event.remove({id: 'create:crafting/kinetics/cogwheel'})

      event.shaped('4x create:large_cogwheel', [
        'BWB',
        'WAW',
        'BWB'
      ], {
        B: '#minecraft:wooden_buttons',
        A: 'create:andesite_alloy',
        W: '#minecraft:planks'
      })
      event.remove({id: 'create:crafting/kinetics/large_cogwheelfrom_little'})
      event.remove({id: 'create:crafting/kinetics/large_cogwheel'})
      event.shaped('2x create:portable_fluid_interface', [
        'SSI',
        'CMP',
        'SSI'
      ], {
        S: 'create:copper_sheet',
        I: 'minecraft:copper_ingot',
        C: 'create:copper_casing',
        M: 'milkyway_core:copper_mechanism',
        P: 'create:mechanical_pump'
      })
      event.remove({id: 'create:crafting/kinetics/portable_fluid_interface'})
      event.shaped('create:rotation_speed_controller', [
        'B B',
        'CAC',
        'SMS'
      ], {
        S: 'create:brass_sheet',
        B: 'create:brass_ingot',
        C: 'create:brass_casing',
        M: 'create:precision_mechanism',
        A: 'create:shaft'
      })
      event.remove({id: 'create:crafting/kinetics/rotation_speed_controller'})
      event.shapeless('2x refinedstorage:quartz_enriched_iron', ['create:zinc_ingot', 'moreminecarts:silica_steel', 'create:zinc_ingot', 'moreminecarts:silica_steel'])
      event.remove({id: 'refinedstorage:quartz_enriched_iron'})
      event.custom({
        "type": "tconstruct:melting_fuel",
        "fluid": {
          "name": "milkyway_core:liquid_magic",
          "amount": 50
        },
        "duration": 100,
        "temperature": 3000
      })
      event.custom({
        "type": "create:splashing",
        "ingredients": [
          {
            "item": "create:crushed_aluminum_ore"
          }
        ],
        "results": [
          {
            "item": "kubejs:aluminium_nugget",
            "count": 9
          }
        ]
      })
      event.custom({
        "type": "create:splashing",
        "ingredients": [
          {
            "item": "kubejs:aluminium_dust"
          }
        ],
        "results": [
          {
            "item": "kubejs:aluminium_nugget",
            "count": 12
          },
          {
            "item": "minecraft:clay_ball",
            "chance": 0.5
          }
        ]
      })
      event.custom({
        "type": "create:pressing",
        "ingredients": [
          {
            "tag": "minecraft:planks"
          }
        ],
        "results": [
          {
            "item": "tconstruct:pattern"
          }
        ]
      })
      //CRUSHING STONES
      event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": "quark:jasper"
          }
        ],
        "results": [
          {
            "item": "create:crushed_aluminum_ore",
            "chance": 0.8
          },
          {
            "item": "kubejs:aluminium_nugget",
            "chance": 0.8
          }
        ],
        "processingTime": 250
      })
      event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": "forbidden_arcanus:darkstone"
          }
        ],
        "results": [
          {
            "item": "create:crushed_lead_ore",
            "chance": 0.8
          },
          {
            "item": "thermal:lead_nugget",
            "chance": 0.8
          }
        ],
        "processingTime": 250
      })
      event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": "create:limestone"
          }
        ],
        "results": [
          {
            "item": "create:crushed_nickel_ore",
            "chance": 0.8
          },
          {
            "item": "thermal:nickel_nugget",
            "chance": 0.8
          }
        ],
        "processingTime": 250
      })
      event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": "quark:shale"
          }
        ],
        "results": [
          {
            "item": "create:crushed_tin_ore",
            "chance": 0.8
          },
          {
            "item": "thermal:tin_nugget",
            "chance": 0.8
          }
        ],
        "processingTime": 250
      })
      event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": "create:scoria"
          }
        ],
        "results": [
          {
            "item": "create:crushed_silver_ore",
            "chance": 0.8
          },
          {
            "item": "thermal:silver_nugget",
            "chance": 0.8
          }
        ],
        "processingTime": 250
      })
      event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "amethysttoolsmod:amethyst_dust",
            "count": 4
          }
        ],
        "results": [
          {
            "fluid": "kubejs:crushed_amethyst",
            "amount": 250
          }
        ],
        "heatRequirement": "heated"
      })
      event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": "kubejs:amethyst_clump"
          }
        ],
        "results": [
          {
            "item": "amethysttoolsmod:amethyst_dust",
            "chance": 1
          },
          {
            "item": "waystones:warp_dust",
            "chance": 0.8
          }
        ],
        "processingTime": 1000
      })
      event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
          "value": [
            {
              "item": "minecraft:basalt"
            },
            {
              "item": "minecraft:polished_basalt"
            }
          ],
          "count": 2
        },
        "result": [
          {
            "item": "minecraft:coal",
            "count": 2
          },
          {
            "item": "kubejs:basalt_rod",
            "chance": 0.3
          }
        ],
        "experience": 0.1
      })
      event.custom({
        "type": "create:compacting",
        "ingredients": [
          {
            "fluid": "thermal:redstone",
            "nbt": {},
            "amount": 750
          },
          {
            "item": "kubejs:basalt_rod"
          }
        ],
        "results": [
          {
            "item": "thermal:basalz_rod"
          }
        ]
      })
      event.remove({id: 'create:crafting/materials/andesite_alloy'})
      event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
      event.remove({id: 'create:mixing/andesite_alloy'})
      event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
            event.remove({id: 'createaddition:compat/tconstruct'})
      event.custom({
        "type": "create:compacting",
        "ingredients": [
          {
            "item": "thermal:basalz_powder",
            "count": 4
          },
          {
            "fluid": "tconstruct:molten_diamond",
            "amount": 250
          },
          {
            "item": "minecraft:quartz"
          }
        ],
        "results": [
          {
            "item": "kubejs:diamond_quartz"
          }
        ]
      })
      event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
          {
            "item": "kubejs:diamond_quartz"
          }
        ],
        "results": [
          {
            "item": "kubejs:polished_diamond_quartz"
          }
        ]
      })
      event.custom({
        "type": "create:milling",
        "ingredients": [
          {
            "item": "thermal:basalz_rod"
          }
        ],
        "results": [
          {
            "item": "thermal:basalz_powder",
            "count": 2
          }
        ],
        "processingTime": 200
      })
      event.remove({id: 'waystones:warp_dust'})
      event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "minecraft:diamond"
          },
          {
            "item": "milkyway_core:radiant_obsidian",
            "count": 4
          },
          {
            "fluid": "tconstruct:molten_ender",
            "amount": 500
          }
        ],
        "results": [
          {
            "item": "waystones:warp_stone"
          }
        ]
      })
      event.custom({
        "type": "create:compacting",
        "ingredients": [
          {
            "item": "milkyway_core:polished_glowstone_quartz"
          },
          {
            "item": "milkyway_core:obsidian_quartz"
          },
          {
            "item": "waystones:warp_dust",
            "count": 8
          }
        ],
        "results": [
          {
            "item": "milkyway_core:radiant_obsidian"
          }
        ]
      })
      event.shapeless('milkyway_core:obsidian_quartz', ['8x create:powdered_obsidian', 'minecraft:quartz'])
      event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "name": "materialis:molten_arcane_gold",
            "amount": 750
          },
          {
            "name": "createchromaticreturn:liquid_experience",
            "amount": 1000
          },
          {
            "name": "kubejs:crushed_amethyst",
            "amount": 10000
          }
        ],
        "result": {
          "fluid": "milkyway_core:liquid_magic",
          "amount": 500
        },
        "temperature": 3000
      })
      //REFINED PIPES
      event.remove({id: 'refinedpipes:basic_item_pipe'})
//
  //    event.remove({id: 'refinedpipes:improved_item_pipe'})
//
  //   event.shaped('kubejs:incomplete_item_pipe' ,  [
    //   'SSS',
      // 'BAB',
       //'SSS'
     //], {
       //S: 'moreminecarts:silica_steel',
       //A: 'create:fluid_pipe',
       //B: '#forge:glass'
     //})

       //event.shaped('kubejs:incomplete_fluid_pipe', [
        //   'SSS',
          // 'AAA',
           //'SSS'
  //     ], {
  //         S: 'moreminecarts:silica_steel',
  //         A: 'create:fluid_pipe'
  //     })
//
//     event.recipes.createDeploying ('2x refinedpipes:basic_item_pipe', [
//     'kubejs:incomplete_item_pipe',
//     'milkyway_core:logic_mechanism'
//     ])

//       event.recipes.createDeploying('2x refinedpipes:basic_fluid_pipe', [
  //         'kubejs:incomplete_fluid_pipe',
//'milkyway_core:logic_mechanism'
//       ])

       // Upgrading item pipes

//       event.recipes.createItemApplication ('refinedpipes:improved_item_pipe', [
//'refinedpipes:basic_item_pipe',
//           'kubejs:improved_item_pipe_upgrade'
//       ])

//event.recipes.createItemApplication('refinedpipes:advanced_item_pipe', [
  //         'refinedpipes:improved_item_pipe',
  //         'kubejs:advanced_item_pipe_upgrade'
//       ])

       // Upgrading fluid pipes

  //     event.recipes.createItemApplication('refinedpipes:improved_fluid_pipe', [
  //         'refinedpipes:basic_fluid_pipe',
  //         'kubejs:improved_fluid_pipe_upgrade'
  //     ])

  //     event.recipes.createItemApplication('refinedpipes:advanced_fluid_pipe', [
//           'refinedpipes:improved_fluid_pipe',
//           'kubejs:advanced_fluid_pipe_upgrade'
//       ])

//       event.recipes.createItemApplication('refinedpipes:elite_fluid_pipe', [
//           'refinedpipes:advanced_fluid_pipe',
//           'kubejs:elite_fluid_pipe_upgrade'
//       ])

  //     event.recipes.createItemApplication('refinedpipes:ultimate_fluid_pipe', [
  //         'refinedpipes:elite_fluid_pipe',
  //         'kubejs:ultimate_fluid_pipe_upgrade'
  //         ])
           event.custom({
             "type": "create:sequenced_assembly",
             "ingredient": {
               "item": "milkyway_core:basic_mechanism"
             },
             "transitionalItem": {
               "item": "create:incomplete_precision_mechanism"
             },
             "sequence": [
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "create:incomplete_precision_mechanism"
                   },
                   {
                     "item": "create:golden_sheet"
                   }
                 ],
                 "results": [
                   {
                     "item": "create:incomplete_precision_mechanism"
                   }
                 ]
               },
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "create:incomplete_precision_mechanism"
                   },
                   {
                     "item": "create:andesite_alloy"
                   }
                 ],
                 "results": [
                   {
                     "item": "create:incomplete_precision_mechanism"
                   }
                 ]
               },
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "create:incomplete_precision_mechanism"
                   },
                   {
                     "item": "thermal:gold_gear"
                   }
                 ],
                 "results": [
                   {
                     "item": "create:incomplete_precision_mechanism"
                   }
                 ]
               },
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "create:incomplete_precision_mechanism"
                   },
                   {
                     "item": "minecraft:clock"
                   }
                 ],
                 "results": [
                   {
                     "item": "create:incomplete_precision_mechanism"
                   }
                 ]
               }
             ],
             "results": [
               {
                 "item": "create:precision_mechanism",
                 "chance": 120.0
               },
               {
                 "item": "create:golden_sheet",
                 "chance": 8.0
               },
               {
                 "item": "create:andesite_alloy",
                 "chance": 8.0
               },
               {
                 "item": "create:cogwheel",
                 "chance": 5.0
               },
               {
                 "item": "create:shaft",
                 "chance": 2.0
               },
               {
                 "item": "create:crushed_gold_ore",
                 "chance": 2.0
               },
               {
                 "item": "minecraft:gold_nugget",
                 "chance": 2.0
               },
               {
                 "item": "thermal:gold_gear",
                 "chance": 3.0
               },
               {
                 "item": "minecraft:clock",
                 "chance": 4.0
               }
             ],
             "loops": 1
           })
           event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
           event.custom({
             "type": "create:compacting",
             "ingredients": [
               {
                 "item": "minecraft:bone_meal",
                 "count": 4
               },
               {
                 "item": "minecraft:clay_ball",
                 "count": 1
               },
               {
                 "fluid": "minecraft:lava",
                 "amount": 100
               }
             ],
             "results": [
               {
                 "item": "create:limestone"
               }
             ]
           })
           event.custom({
             "type": "create:compacting",
             "ingredients": [
               {
                 "item": "minecraft:bone_meal",
                 "count": 4
               },
               {
                 "item": "minecraft:clay_ball",
                 "count": 4
               },
               {
                 "item": "minecraft:gravel",
                 "count": 1
               },
               {
                 "fluid": "minecraft:lava",
                 "amount": 100
               }
             ],
             "results": [
               {
                 "item": "quark:shale"
               }
             ]
           })
           event.shaped('thermal:device_tree_extractor', [
               'WGW',
               'WTW',
               'WPW'
           ], {
               W: '#minecraft:planks',
               P: 'create:mechanical_pump',
               G: '#forge:glass',
               T: 'create:fluid_tank'
           })
           event.custom({
             "type": "create:compacting",
             "ingredients": [
               {
                 "item": "createchromaticreturn:carbon_powder",
                 "count": 16
               },
               {
                 "fluid": "tconstruct:blazing_blood",
                 "amount": 500
               }
             ],
             "results": [
               {
                 "item": "minecraft:diamond",
                 "chance": 0.001
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "minecraft:redstone",
                 "count": 16
               },
               {
                 "fluid": "tconstruct:blazing_blood",
                 "amount": 100
               }
             ],
             "results": [
               {
                 "fluid": "thermal:redstone",
                 "amount": 100
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "tconstruct:melting",
           "ingredient": {
             "item": "kubejs:amethyst_clump"
           },
           "result": {
             "fluid": "tconstruct:molten_amethyst",
             "amount": 200
           },
           "temperature": 950,
           "time": 50
           })
           event.custom({
             "type": "create:sequenced_assembly",
             "ingredient": {
               "item": "createaddition:gold_rod"
             },
             "transitionalItem": {
               "item": "kubejs:incomplete_redstone_flux_coil"
             },
             "sequence": [
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_redstone_flux_coil"
                   },
                   {
                     "item": "create:golden_sheet"
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_redstone_flux_coil"
                   }
                 ]
               },
               {
                 "type": "create:filling",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_redstone_flux_coil"
                   },
                   {
                     "fluid": "thermal:redstone",
                     "amount": 250
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_redstone_flux_coil"
                   }
                 ]
               },
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_redstone_flux_coil"
                   },
                   {
                     "item": "thermal:cinnabar_dust"
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_redstone_flux_coil"
                   }
                 ]
               }
             ],
             "results": [
               {
                 "item": "thermal:rf_coil",
                 "chance": 120.0
               },
               {
                 "item": "create:golden_sheet",
                 "chance": 8.0
               },
               {
                 "item": "createaddition:gold_rod",
                 "chance": 8.0
               },
               {
                 "item": "thermal:lead_nugget",
                 "chance": 5.0
               },
               {
                 "item": "thermal:cinnabar",
                 "chance": 2.0
               },
               {
                 "item": "create:crushed_gold_ore",
                 "chance": 2.0
               },
               {
                 "item": "thermal:cinnabar_dust",
                 "chance": 2.0
               },
               {
                 "item": "thermal:gold_dust",
                 "chance": 2.0
               },
               {
                 "item": "minecraft:gold_nugget",
                 "chance": 1.0
               }
             ],
             "loops": 1
           })
           event.custom({
             "type": "create:pressing",
             "ingredients": [
               {
                 "item": "forbidden_arcanus:dark_rune"
               }
             ],
             "results": [
               {
                 "item": "kubejs:blank_tablet"
               }
             ]
           })
           event.custom({
             "type": "create:deploying",
             "ingredients": [
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "item": "forbidden_arcanus:rune"
               }
             ],
             "results": [
               {
                 "item": "kubejs:runic_tablet"
               }
             ]
           })
           event.custom({
             "type": "create:sequenced_assembly",
             "ingredient": {
               "item": "kubejs:runic_tablet"
             },
             "transitionalItem": {
               "item": "kubejs:incomplete_arcane_tablet"
             },
             "sequence": [
               {
                 "type": "create:filling",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_arcane_tablet"
                   },
                   {
                     "fluid": "materialis:molten_arcane_gold",
                     "amount": 810
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_arcane_tablet"
                   }
                 ]
               },
               {
                 "type": "create:filling",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_arcane_tablet"
                   },
                   {
                     "fluid": "kubejs:crushed_amethyst",
                     "amount": 1000
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_arcane_tablet"
                   }
                 ]
               },
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_arcane_tablet"
                   },
                   {
                     "item": "forbidden_arcanus:arcane_crystal"
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_arcane_tablet"
                   }
                 ]
               }
             ],
             "results": [
               {
                 "item": "kubejs:arcane_tablet",
                 "chance": 120.0
               },
               {
                 "item": "kubejs:blank_tablet",
                 "chance": 8.0
               },
               {
                 "item": "forbidden_arcanus:arcane_gold_ingot",
                 "chance": 8.0
               },
               {
                 "item": "forbidden_arcanus:dark_rune",
                 "chance": 5.0
               },
               {
                 "item": "forbidden_arcanus:rune",
                 "chance": 2.0
               },
               {
                 "item": "kubejs:runic_tablet",
                 "chance": 2.0
               },
               {
                 "item": "create:powdered_obsidian",
                 "chance": 2.0
               },
               {
                 "item": "thermal:gold_dust",
                 "chance": 2.0
               },
               {
                 "item": "forbidden_arcanus:arcane_gold_nugget",
                 "chance": 1.0
               }
             ],
             "loops": 1
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:arcane_tablet",
                 "count": 4
               },
               {
                 "fluid": "tconstruct:molten_lead",
                 "amount": 810
               }
             ],
             "results": [
               {
                 "fluid": "tconstruct:molten_gold",
                 "amount": 810
               },
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "item": "kubejs:blank_tablet",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:arcane_tablet",
                 "count": 4
               },
               {
                 "fluid": "tconstruct:molten_iron",
                 "amount": 810
               }
             ],
             "results": [
               {
                 "fluid": "tconstruct:molten_silver",
                 "amount": 810
               },
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "item": "kubejs:blank_tablet",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:filling",
             "ingredients": [
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "fluid": "createchromaticreturn:liquid_experience",
                 "amount": 1000
               }
             ],
             "results": [
               {
                 "item": "kubejs:experienced_tablet"
               }
             ]
           })
           event.custom({
             "type": "create:sequenced_assembly",
             "ingredient": {
               "item": "kubejs:experienced_tablet"
             },
             "transitionalItem": {
               "item": "kubejs:incomplete_alchemic_tablet"
             },
             "sequence": [
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_alchemic_tablet"
                   },
                   {
                     "item": "minecraft:lapis_lazuli"
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_alchemic_tablet"
                   }
                 ]
               },
               {
                 "type": "create:filling",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_alchemic_tablet"
                   },
                   {
                     "fluid": "kubejs:crushed_amethyst",
                     "amount": 1000
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_alchemic_tablet"
                   }
                 ]
               },
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_alchemic_tablet"
                   },
                   {
                     "item": "minecraft:blaze_powder"
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_alchemic_tablet"
                   }
                 ]
               }
             ],
             "results": [
               {
                 "item": "kubejs:alchemic_tablet",
                 "chance": 120.0
               },
               {
                 "item": "kubejs:blank_tablet",
                 "chance": 8.0
               },
               {
                 "item": "create:experience_nugget",
                 "chance": 8.0
               },
               {
                 "item": "forbidden_arcanus:dark_rune",
                 "chance": 5.0
               },
               {
                 "item": "minecraft:lapis_lazuli",
                 "chance": 2.0
               },
               {
                 "item": "kubejs:experienced_tablet",
                 "chance": 2.0
               },
               {
                 "item": "create:powdered_obsidian",
                 "chance": 2.0
               },
               {
                 "item": "create_stuff_additions:heap_of_experience",
                 "chance": 2.0
               },
               {
                 "item": "thermal:lapis_dust",
                 "chance": 1.0
               }
             ],
             "loops": 1
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:arcane_tablet",
                 "count": 4
               },
               {
                 "fluid": "tconstruct:molten_signalum",
                 "amount": 810
               }
             ],
             "results": [
               {
                 "fluid": "tconstruct:molten_lumium",
                 "amount": 810
               },
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "item": "kubejs:blank_tablet",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:arcane_tablet",
                 "count": 4
               },
               {
                 "fluid": "tconstruct:molten_zinc",
                 "amount": 810
               }
             ],
             "results": [
               {
                 "fluid": "tconstruct:molten_copper",
                 "amount": 810
               },
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "item": "kubejs:blank_tablet",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:arcane_tablet",
                 "count": 4
               },
               {
                 "fluid": "tconstruct:molten_silver",
                 "amount": 810
               }
             ],
             "results": [
               {
                 "fluid": "tconstruct:molten_zinc",
                 "amount": 810
               },
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "item": "kubejs:blank_tablet",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:filling",
             "ingredients": [
               {
                 "item": "minecraft:glowstone_dust"
               },
               {
                 "fluid": "milkyway_core:liquid_magic",
                 "amount": 100
               }
             ],
             "results": [
               {
                 "item": "milkyway_core:empowered_glowstone"
               }
             ]
           })
           event.custom({
             "type": "create:sandpaper_polishing",
             "ingredients": [
               {
                 "item": "milkyway_core:glowing_quartz"
               }
             ],
             "results": [
               {
                 "item": "milkyway_core:polished_glowstone_quartz"
               }
             ]
           })
           event.custom({
             "type": "tconstruct:melting",
           "ingredient": {
             "item": "thermal:rf_coil"
           },
           "result": {
             "fluid": "materialis:molten_flux_infused",
             "amount": 180
           },
           "temperature": 500,
           "time": 50
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:dark_tablet",
                 "count": 1
               },
               {
                 "item": "kubejs:arcane_tablet",
                 "count": 4
               },
               {
                 "item": "kubejs:alchemic_tablet",
                 "count": 4
               },
               {
                 "item": "forbidden_arcanus:dark_rune"
               },
               {
                 "item": "forbidden_arcanus:arcane_crystal_block"
               },
               {
                 "item": "quark:blaze_lantern"
               },
               {
                 "item": "kubejs:amethyst_clump",
                 "count": 4
               },
             ],
             "results": [
               {
                 "fluid": "tconstruct:blazing_blood",
                 "amount": 50
               },
               {
                 "item": "kubejs:pure_tablet"
               },
               {
                 "item": "forbidden_arcanus:dark_rune",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.remove({id: 'tconstruct:smeltery/casts/sand_casts/plates'})
           event.remove({id: 'tconstruct:smeltery/casts/gold_casts/plates'})
           event.remove({id: 'tconstruct:smeltery/casts/sand_casts/wires'})
           event.remove({id: 'tconstruct:smeltery/casts/gold_casts/wires'})
           event.remove({output: 'thermal:iron_plate'})
           event.remove({output: 'thermal:gold_plate'})
           event.custom({
             "type": "create:item_application",
             "ingredients": [
               {
                 "item": "minecraft:netherite_block"
               },
               {
                 "tag": "forge:ingots/manyullyn"
               }
             ],
             "results": [
               {
                 "item": "kubejs:manyullyn_casing"
               }
             ]
           })
           event.custom({
             "type": "create:item_application",
             "ingredients": [
               {
                 "item": "kubejs:manyullyn_casing"
               },
               {
                 "item": "kubejs:insulated_plate"
               }
             ],
             "results": [
               {
                 "item": "kubejs:insulation_block"
               }
             ]
           })
           event.custom({
             "type": "create:item_application",
             "ingredients": [
               {
                 "item": "kubejs:insulation_block"
               },
               {
                 "item": "kubejs:creative_alloy_plating"
               }
             ],
             "results": [
               {
                 "item": "kubejs:creative_casing"
               }
             ]
           })
           event.custom({
             "type": "tconstruct:melting",
           "ingredient": {
             "item": "milkyway_core:manyullyn_mechanism"
           },
           "result": {
             "fluid": "milkyway_core:molten_creativity",
             "amount": 50
           },
           "temperature": 3000,
           "time": 1000
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "tconstruct:hepatizon_ingot",
                 "count": 32
               },
               {
                 "item": "tconstruct:slimesteel_ingot",
                 "count": 32
               },
               {
                 "item": "createdeco:cast_iron_ingot",
                 "count": 32
               },
               {
                 "item": "create:brass_ingot",
                 "count": 32
               },
               {
                 "item": "createchromaticreturn:glowing_ingot",
                 "count": 32
               },
               {
                 "item": "milkyway_core:radiant_obsidian",
                 "count": 32
               },
               {
                 "fluid": "milkyway_core:molten_creativity",
                 "amount": 1000
               },
             ],
             "results": [
               {
                 "fluid": "minecraft:water",
                 "amount": 1000
               },
               {
                 "item": "kubejs:creativity_ingot"
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:arcane_tablet",
                 "count": 4
               },
               {
                 "fluid": "tconstruct:molten_netherite",
                 "amount": 810
               },
               {
                 "fluid": "tconstruct:molten_iron",
                 "amount": 810
               }
             ],
             "results": [
               {
                 "fluid": "tconstruct:molten_cobalt",
                 "amount": 810
               },
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "item": "kubejs:blank_tablet",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:mechanical_crafting",
             "pattern": [
               "  G  ",
               " GMG ",
               " RRR ",
               " RWR ",
               " RMR ",
               "GRRRG",
               "GAAAG"
             ],
             "key": {
               "A": {
                 "item": "forbidden_arcanus:arcane_chiseled_polished_darkstone"
               },
               "M": {
                 "item": "milkyway_core:manyullyn_mechanism"
               },
               "W": {
                 "item": "waystones:warp_stone"
               },
               "R": {
                 "item": "forbidden_arcanus:rune_block"
               },
               "G": {
                 "item": "forbidden_arcanus:arcane_gold_ingot"
               }
             },
             "result": {
               "item": "waystones:waystone"
             },
             "acceptMirrored": true
           })
           //PRESSING
           event.custom({
             "type": "create:pressing",
             "ingredients": [
               {
                 "tag": "forge:ingots/lead"
               }
             ],
             "results": [
               {
                 "item": "thermal:lead_plate"
               }
             ]
           })
           event.custom({
             "type": "create:pressing",
             "ingredients": [
               {
                 "tag": "forge:ingots/constantan"
               }
             ],
             "results": [
               {
                 "item": "thermal:constantan_plate"
               }
             ]
           })
           event.custom({
             "type": "create:pressing",
             "ingredients": [
               {
                 "tag": "forge:ingots/electrum"
               }
             ],
             "results": [
               {
                 "item": "thermal:electrum_plate"
               }
             ]
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "minecraft:string",
                 "count": 1
               },
               {
                 "fluid": "tconstruct:earth_slime",
                 "amount": 125
               }
             ],
             "results": [
               {
                 "item": "refinedstorage:processor_binding",
                 "count": 4
               }
             ],
               "heatRequirement": "none"
           })
           event.custom({
             "type": "create:crushing",
             "ingredients": [
               {
                 "item": "minecraft:blackstone"
               }
             ],
             "results": [
               {
                 "item": "thermal:cinnabar_dust",
                 "chance": 1
               },
               {
                 "item": "thermal:cinnabar",
                 "chance": 0.3
               }
             ],
             "processingTime": 500
           })
           event.shaped('refinedstorage:machine_casing', [
             'ZMZ',
             'MBM',
             'ZMZ'
           ], {
             Z: 'refinedstorage:quartz_enriched_iron',
             M: 'milkyway_core:logic_mechanism',
             B: 'milkyway_core:bulb'
           })
           event.remove({id: 'refinedstorage:machine_casing'})
           event.remove({id: 'waystones:waystone'})
           event.custom({
             "type": "create:deploying",
             "ingredients": [
               {
                 "item": "kubejs:blank_tablet"
               },
               {
                 "item": "forbidden_arcanus:dark_rune"
               }
             ],
             "results": [
               {
                 "item": "kubejs:dark_tablet"
               }
             ]
           })
           event.custom({
             "type": "create:sequenced_assembly",
             "ingredient": {
               "item": "kubejs:pure_tablet"
             },
             "transitionalItem": {
               "item": "kubejs:incomplete_pure_lens_tablet"
             },
             "sequence": [
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_pure_lens_tablet"
                   },
                   {
                     "item": "moreminecarts:hard_light_lens"
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_pure_lens_tablet"
                   }
                 ]
               },
               {
                 "type": "create:filling",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_pure_lens_tablet"
                   },
                   {
                     "fluid": "tconstruct:molten_obsidian",
                     "amount": 1000
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_pure_lens_tablet"
                   }
                 ]
               },
               {
                 "type": "create:deploying",
                 "ingredients": [
                   {
                     "item": "kubejs:incomplete_pure_lens_tablet"
                   },
                   {
                     "item": "forbidden_arcanus:arcane_crystal"
                   }
                 ],
                 "results": [
                   {
                     "item": "kubejs:incomplete_pure_lens_tablet"
                   }
                 ]
               }
             ],
             "results": [
               {
                 "item": "kubejs:pure_lens_tablet",
                 "chance": 120.0
               },
               {
                 "item": "kubejs:pure_tablet",
                 "chance": 8.0
               },
               {
                 "item": "create:experience_nugget",
                 "chance": 8.0
               },
               {
                 "item": "forbidden_arcanus:dark_rune",
                 "chance": 5.0
               },
               {
                 "item": "create:powdered_obsidian",
                 "chance": 2.0
               },
               {
                 "item": "forbidden_arcanus:arcane_crystal",
                 "chance": 2.0
               },
               {
                 "item": "moreminecarts:hard_light_lens",
                 "chance": 2.0
               },
               {
                 "item": "moreminecarts:glass_spines",
                 "chance": 2.0
               },
               {
                 "item": "thermal:lapis_dust",
                 "chance": 1.0
               }
             ],
             "loops": 1
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:pure_lens_tablet",
                 "count": 4
               },
               {
                 "fluid": "tconstruct:molten_signalum",
                 "amount": 810
               },
               {
                 "fluid": "tconstruct:molten_queens_slime",
                 "amount": 810
               }
             ],
             "results": [
               {
                 "fluid": "tconstruct:molten_debris",
                 "amount": 810
               },
               {
                 "item": "kubejs:pure_tablet"
               },
               {
                 "item": "kubejs:pure_tablet",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:pressing",
             "ingredients": [
               {
                 "item": "kubejs:insulated_ingot"
               }
             ],
             "results": [
               {
                 "item": "kubejs:insulated_plate"
               }
             ]
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "thermal:cured_rubber",
                 "count": 16
               },
               {
                 "fluid": "tconstruct:earth_slime",
                 "amount": 1000
               }
             ],
             "results": [
               {
                 "item": "kubejs:crude_insulator"
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:crude_insulator",
                 "count": 1
               },
               {
                 "fluid": "tconstruct:blazing_blood",
                 "amount": 1000
               },
               {
                 "item": "thermal:sawdust"
               }
             ],
             "results": [
               {
                 "item": "kubejs:unprocessed_insulation_cube"
               }
             ],
               "heatRequirement": "superheated"
           })
           event.blasting('kubejs:insulated_ingot', 'kubejs:unprocessed_insulation_cube')
           event.custom({
             "type": "create:mechanical_crafting",
             "pattern": [
               "CCIIICC",
               "CAAAAAC",
               "IAWBEAI",
               "IABEWAI",
               "IAEWBAI",
               "CAAAAAC",
               "CCIIICC"
             ],
             "key": {
               "A": {
                 "item": "kubejs:creative_alloy"
               },
               "C": {
                 "item": "kubejs:creative_casing"
               },
               "I": {
                 "item": "kubejs:insulation_block"
               },
               "W": {
                 "item": "create:water_wheel"
               },
               "B": {
                 "item": "create:windmill_bearing"
               },
               "E": {
                 "item": "create:steam_engine"
               }
             },
             "result": {
               "item": "create:creative_motor"
             },
             "acceptMirrored": true
           })
           event.remove({id: 'createchromaticreturn:creative_motor'})
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:insulated_ingot",
                 "count": 1
               },
               {
                 "fluid": "tconstruct:blazing_blood",
                 "amount": 1000
               },
               {
                 "item": "kubejs:creativity_ingot",
                 "count": 1
               }
             ],
             "results": [
               {
                 "item": "kubejs:creative_alloy"
               }
             ],
               "heatRequirement": "superheated"
           })
           event.custom({
             "type": "create:pressing",
             "ingredients": [
               {
                 "item": "kubejs:creative_alloy"
               }
             ],
             "results": [
               {
                 "item": "kubejs:creative_alloy_plating"
               }
             ]
           })
           event.custom({
             "type": "create:mixing",
             "ingredients": [
               {
                 "item": "kubejs:pure_lens_tablet",
                 "count": 4
               },
               {
                 "fluid": "tconstruct:molten_emerald",
                 "amount": 810
               },
               {
                 "fluid": "tconstruct:molten_quartz",
                 "amount": 810
               }
             ],
             "results": [
               {
                 "fluid": "tconstruct:molten_diamond",
                 "amount": 810
               },
               {
                 "item": "kubejs:pure_tablet"
               },
               {
                 "item": "kubejs:pure_tablet",
                 "chance": 0.5
               }
             ],
               "heatRequirement": "superheated"
           })
           event.remove({output: 'tconstruct:manyullyn_ingot', type: 'create:mixing'})
           event.remove({output: 'tconstruct:hepatizon_ingot', type: 'create:mixing'})
           event.remove({output: 'tconstruct:rose_gold_ingot', type: 'create:mixing'})
           event.remove({output: 'tconstruct:pig_iron_ingot', type: 'create:mixing'})
           event.remove({output: 'tconstruct:queens_slime_ingot', type: 'create:mixing'})
           event.remove({output: 'tconstruct:slimesteel_ingot', type: 'create:mixing'})
event.custom({
  "type": "tconstruct:alloy",
"inputs": [
  {
    "name": "tconstruct:molten_cobalt",
    "amount": 180
  },
  {
    "name": "tconstruct:molten_amethyst_bronze",
    "amount": 270
  },
  {
    "name": "tconstruct:molten_quartz",
    "amount": 250
  }
],
"result": {
  "fluid": "materialis:molten_elementium",
  "amount": 180
},
"temperature": 1160
})
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "tag": "forge:gems/arcane_crystal"
  },
  "result": {
    "fluid": "kubejs:aureal",
    "amount": 90
  },
  "temperature": 1500,
  "time": 150
})
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "tag": "forge:dusts/mundabitur"
  },
  "result": {
    "fluid": "kubejs:molten_mundabitur",
    "amount": 90
  },
  "temperature": 1500,
  "time": 150
})
event.shaped('forbidden_arcanus:arcane_crystal', [
  'DDD',
  'DDD',
  'DDD'
], {
  D: 'forbidden_arcanus:arcane_crystal_dust'
})
event.custom({
  "type": "tconstruct:alloy",
"inputs": [
  {
    "name": "thermal:redstone",
    "amount": 500
  },
  {
    "name": "kubejs:aureal",
    "amount": 270
  },
  {
    "name": "tconstruct:blazing_blood",
    "amount": 250
  }
],
"result": {
  "fluid": "kubejs:molten_mundabitur",
  "amount": 90
},
"temperature": 1160
})
event.recipes.createFilling('forbidden_arcanus:mundabitur_dust', [
  'minecraft:gunpowder',
  Fluid.of('kubejs:molten_mundabitur', 90)
])
event.remove({id: 'thermal:redstone_servo'})
event.remove({id: 'thermal:rf_coil'})
event.remove({output: 'waystones:sandy_waystone'})
event.remove({output: 'createdeco:netherite_sheet'})
event.remove({output: 'tconstruct:plate_red_sand_cast'})
event.remove({output: 'tconstruct:wire_red_sand_cast'})
event.remove({id: 'thermal:device_tree_extractor'})
event.remove({output: 'waystones:mossy_waystone'})
event.remove({id: 'waystones:warp_plate'})
event.remove({id: 'waystones:sharestone'})
event.remove({id: 'waystones:portstone'})
event.remove({id: 'waystones:warp_stone'})
event.remove({id: 'waystones:return_scroll'})
event.remove({id: 'waystones:bound_scroll'})
event.remove({id: 'waystones:warp_scroll'})
event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "AAMAA",
    "ARRRA",
    "G   G",
    "G W G",
    "G   G",
    "ARRRA",
    "AAMAA"
  ],
  "key": {
    "A": {
      "item": "forbidden_arcanus:arcane_chiseled_polished_darkstone"
    },
    "M": {
      "item": "milkyway_core:manyullyn_mechanism"
    },
    "W": {
      "item": "waystones:warp_stone"
    },
    "R": {
      "item": "forbidden_arcanus:rune_block"
    },
    "G": {
      "item": "forbidden_arcanus:arcane_gold_ingot"
    }
  },
  "result": {
    "item": "waystones:sharestone"
  },
  "acceptMirrored": true
})
event.custom({
"type": "create:mechanical_crafting",
"pattern": [
  " RRR ",
  " RWR ",
  "GRMRG",
  "GAMAG"
],
"key": {
  "A": {
    "item": "forbidden_arcanus:arcane_chiseled_polished_darkstone"
  },
  "M": {
    "item": "milkyway_core:manyullyn_mechanism"
  },
  "W": {
    "item": "waystones:warp_stone"
  },
  "R": {
    "item": "forbidden_arcanus:rune_block"
  },
  "G": {
    "item": "forbidden_arcanus:arcane_gold_ingot"
  }
},
"result": {
  "item": "waystones:portstone"
},
"acceptMirrored": true
})
})
