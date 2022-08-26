
craftingTable.addJsonRecipe("display_link", {
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "STD",
    "BCB"
  ],
  "key": {
    "C": {
      "item": "create:brass_casing"
    },
    "S": {
      "item": "create:copper_sheet"
    },
    "B": {
      "item": "create:brass_ingot"
    },
    "T": {
      "item": "minecraft:redstone_torch"
    },
    "D": {
      "item": "kubejs:data_tube"
    }
  },
  "result": {
    "item": "create:display_link"
  }
});
craftingTable.addJsonRecipe("logic_chip", {
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "LSL",
    "XEX",
    "LSL"
  ],
  "key": {
    "L": {
      "item": "thermal:lead_plate"
    },
    "S": {
      "item": "thermal:signalum_ingot"
    },
    "X": {
      "item": "create_stuff_additions:heap_of_experience"
    },
    "E": {
      "item": "thermal:electrum_ingot"
    }
  },
  "result": {
    "item": "milkyway_core:logic_chip"
  }
});
