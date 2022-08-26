onEvent('fluid.registry', event => {
    event.create('aureal')
    .thickTexture(0xCfc4ec)
    .bucketColor(0xCfc4ec)
    .displayName('Aureal')

    event.create('molten_mundabitur')
    .thickTexture(0xF32f33)
    .bucketColor(0xF32f33)
    .displayName('Molten Mundabitur')

    event.create('kermitamine_233')
    .thickTexture(0x97C463)
    .bucketColor(0x97C463)
    .displayName('Kermitamine 233')

    event.create('kermitamine_238')
    .thickTexture(0x94BB4F)
    .bucketColor(0x94BB4F)
    .displayName('Kermitamine 238')

    event.create('kermitamine_235')
    .thinTexture(0x4B8C22)
    .bucketColor(0x4B8C22)
    .displayName('Kermitamine 235')

    event.create('sceyntinelochine')
    .thinTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)
    .displayName('Sceyntinelochine')

    event.create('sepinttecin')
    .thinTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)
    .displayName('Sepinttecin')

    event.create('naspaunesweythil')
    .thinTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)
    .displayName('Naspaunesweythil')

    event.create('lostruciuscoynor')
    .thinTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)
    .displayName('Lostruciuscoynor')

    event.create('vestioshuetium') //lostruciuscoynor + sepinttecin
    .thinTexture(0x169451)
    .bucketColor(0x169451)
    .displayName('Vestioshuetium')

    event.create('ocheithiopriunyx') //sceyntinelochine + naspaunesweythil
    .thinTexture(0xD17417)
    .bucketColor(0xD17417)
    .displayName('Ocheithiopriunyx')

    	event.create('dirty_water').displayName(`Dirty Water`).stillTexture('kubejs:fluid/dirty_water_still').flowingTexture('kubejs:fluid/dirty_water_still').bucketColor(0x513200)
      event.create('crushed_amethyst').displayName(`Crushed Amethyst`).stillTexture('kubejs:fluid/crushed_amethyst_still').flowingTexture('kubejs:fluid/crushed_amethyst_still').noBucket()
})
