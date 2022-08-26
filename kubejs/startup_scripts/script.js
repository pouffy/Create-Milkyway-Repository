// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
onEvent('jei.hide.items', event => {
event.hide('thermal:bronze_ingot')
event.hide('thermal:bronze_plate')
event.hide('thermal:bronze_block')
event.hide('milkyway_core:copper_machine')
event.hide('milkyway_core:brass_machine')
event.hide('milkyway_core:logic_machine')
event.hide('milkyway_core:andesite_machine')
event.hide('milkyway_core:manyullyn_machine')
})
onEvent('jei.add.items', event => {
    event.add(item.of('kubejs:kermitamine').nbt({"quark:RuneAttached":true, HideFlags:1, Enchantments: [{}], "quark:RuneColor": {id: "quark:green_rune", Count:1}}))})
