onEvent('recipes', event => {
//PISTOL
event.shaped('cgm:pistol', [
  'III',
  'MGS',
  'HT '
], {
  I: 'create:iron_sheet',
  M: 'kubejs:action_mechanism',
  G: 'minecraft:gunpowder',
  S: 'alloyed:steel_sheet',
  H: 'cgm:specialised_grip',
  T: Item.of('tconstruct:round_plate', '{Material:"tconstruct:steel"}')
})
event.remove({id: 'cgm:pistol'})
//SHOTGUN
event.shaped('cgm:shotgun', [
  'III',
  'MGS',
  'HT '
], {
  I: 'create:iron_sheet',
  M: 'kubejs:action_mechanism',
  G: 'minecraft:gunpowder',
  S: 'cgm:light_grip',
  H: 'cgm:specialised_grip',
  T: Item.of('tconstruct:round_plate', '{Material:"tconstruct:steel"}')
})
event.remove({id: 'cgm:shotgun'})
//RIFLE
event.custom({
"type": "create:mechanical_crafting",
"pattern": [
  " III ",
  "MSGIS",
  "HT   "
],
"key": {
  "I": {
    "item": "create:iron_sheet"
  },
  "S": {
    "item": "alloyed:steel_sheet"
  },
  "G": {
    "item": "minecraft:gunpowder"
  },
  "T": {
    "item": "alloyed:steel_ingot"
  },
  "M": {
    "item": "kubejs:action_mechanism"
  },
  "H": {
    "item": "cgm:specialised_grip"
  }
},
"result": {
  "item": "cgm:rifle"
},
"acceptMirrored": true
})
event.remove({output: 'cgm:rifle', type: 'cgm:workbench'})
//GRENADE LAUNCHER
event.custom({
"type": "create:mechanical_crafting",
"pattern": [
  "IIT  ",
  "MSGIT",
  "H TH "
],
"key": {
  "I": {
    "item": "create:iron_sheet"
  },
  "S": {
    "item": "minecraft:iron_ingot"
  },
  "G": {
    "item": "minecraft:gunpowder"
  },
  "T": {
    "item": "alloyed:steel_ingot"
  },
  "M": {
    "item": "kubejs:action_mechanism"
  },
  "H": {
    "item": "cgm:specialised_grip"
  }
},
"result": {
  "item": "cgm:grenade_launcher"
},
"acceptMirrored": true
})
event.remove({output: 'cgm:grenade_launcher', type: 'cgm:workbench'})
//BAZOOKA
event.custom({
"type": "create:mechanical_crafting",
"pattern": [
  "MGISI",
  "  H  "
],
"key": {
  "I": {
    "item": "minecraft:iron_block"
  },
  "S": {
    "item": "alloyed:steel_ingot"
  },
  "G": {
    "item": "createbigcannons:steel_cannon_chamber"
  },
  "M": {
    "item": "kubejs:action_mechanism"
  },
  "H": {
    "item": "cgm:specialised_grip"
  }
},
"result": {
  "item": "cgm:bazooka"
},
"acceptMirrored": true
})
event.remove({output: 'cgm:bazooka', type: 'cgm:workbench'})
//MINIGUN
event.custom({
"type": "create:mechanical_crafting",
"pattern": [
  "PMP   ",
  "SIGSGB"
],
"key": {
  "I": {
    "item": "minecraft:iron_block"
  },
  "B": {
    "item": "alloyed:steel_block"
  },
  "S": {
    "item": "alloyed:steel_ingot"
  },
  "G": {
    "item": "minecraft:iron_ingot"
  },
  "M": {
    "item": "kubejs:action_mechanism"
  },
  "P": {
    "item": "alloyed:steel_sheet"
  }
},
"result": {
  "item": "cgm:mini_gun"
},
"acceptMirrored": true
})
event.remove({output: 'cgm:mini_gun', type: 'cgm:workbench'})
})
