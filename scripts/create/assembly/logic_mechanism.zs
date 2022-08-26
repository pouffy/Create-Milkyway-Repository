<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("logic_mechanism")
                                                      .transitionTo(<item:kubejs:incomplete_logic_mechanism>)
                                                      .require(<item:milkyway_core:cobalt_mechanism>)
                                                      .loops(1)
                                                      .addOutput(<item:milkyway_core:logic_mechanism> * 1, 32)
                                                      .addOutput(<item:thermal:cured_rubber>, 2)
                                                      .addOutput(<item:moreminecarts:silica_steel>, 1)
                                                      .addOutput(<item:kubejs:tech_tube>, 1)
                                                      .addOutput(<item:minecraft:compass>, 1)
                                                      .addOutput(<item:milkyway_core:logic_chip>, 1)
                                                      .addStep<mods.createtweaker.PressingRecipe>()
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:thermal:cured_rubber>))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:moreminecarts:silica_steel>))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:refinedstorage:advanced_processor>))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:milkyway_core:logic_chip>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:thermal:resin> * 500)));
