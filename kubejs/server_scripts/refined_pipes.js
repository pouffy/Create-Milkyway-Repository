onEvent('recipes', event => {
  event.shaped('6x refinedpipes:basic_energy_pipe', [
    'ELE',
    'D0D',
    'ELE'
  ], {
    E: 'thermal:electrum_ingot',
    L: 'thermal:lead_ingot',
    0: 'milkyway_core:logic_mechanism',
    D: 'create:smart_fluid_pipe'
  })
  event.remove({id: 'refinedpipes:basic_energy_pipe'})
  event.shaped('refinedpipes:improved_energy_pipe', [
    'EDE',
    'D0D',
    'EDE'
  ], {
    E: 'thermal:electrum_ingot',
  //  L: 'thermal:lead_ingot',
    0: 'refinedpipes:basic_energy_pipe',
    D: 'create:golden_sheet'
  })
  event.remove({id: 'refinedpipes:improved_energy_pipe'})
  event.shaped('refinedpipes:advanced_energy_pipe', [
    'EDE',
    'D0D',
    'EDE'
  ], {
    E: 'thermal:electrum_ingot',
  //  L: 'thermal:lead_ingot',
    0: 'refinedpipes:improved_energy_pipe',
    D: 'kubejs:polished_diamond_quartz'
  })
  event.remove({id: 'refinedpipes:advanced_energy_pipe'})
  event.shaped('refinedpipes:elite_energy_pipe', [
    'EDE',
    'D0D',
    'EDE'
  ], {
    E: 'thermal:electrum_ingot',
    //L: 'thermal:lead_ingot',
    0: 'refinedpipes:advanced_energy_pipe',
    D: 'thermal:emerald_gear'
  })
  event.remove({id: 'refinedpipes:elite_energy_pipe'})
  event.shaped('refinedpipes:ultimate_energy_pipe', [
    'EDE',
    'D0D',
    'EDE'
  ], {
    E: 'thermal:electrum_ingot',
  //  L: 'thermal:lead_ingot',
    0: 'refinedpipes:elite_energy_pipe',
    D: 'thermal:netherite_plate'
  })
  event.remove({id: 'refinedpipes:ultimate_energy_pipe'})
  })
