onEvent('recipes', event => {
  event.shaped('thermal:machine_frame', [
    'ITI',
    'TCT',
    'ITI'
  ], {
    T: 'thermal:silver_ingot',
    I: 'thermal:invar_ingot',
    C: 'kubejs:tech_tube'
  })
  event.remove({id: 'thermal:machine_frame'})
  })
