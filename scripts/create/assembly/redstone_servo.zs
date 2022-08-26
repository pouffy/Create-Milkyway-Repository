<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("redstone_servo")
                                                      .transitionTo(<item:milkyway_core:cobalt_mechanism>)
                                                      .require(<item:milkyway_core:cobalt_mechanism>)
                                                      .loops(1)
                                                      .addOutput(<item:thermal:redstone_servo> * 1, 32)
                                                      .addOutput(<item:thermal:invar_plate>, 2)
                                                      .addOutput(<item:thermal:cinnabar>, 1)
                                                      .addOutput(<item:thermal:lead_gear>, 1)
                                                      .addOutput(<item:thermal:lead_nugget>, 1)
                                                      .addOutput(<item:milkyway_core:cobalt_mechanism>, 1)
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:thermal:redstone> * 1000))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:thermal:lead_gear>))
                                                      .addStep<mods.createtweaker.PressingRecipe>()
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:thermal:cinnabar>))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:thermal:lead_plate>)));