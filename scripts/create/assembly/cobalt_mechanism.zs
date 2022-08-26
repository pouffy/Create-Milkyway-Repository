<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("cobalt_mechanism")
                                                      .transitionTo(<item:kubejs:incomplete_cobalt_mechanism>)
                                                      .require(<item:kubejs:tech_tube>)
                                                      .loops(1)
                                                      .addOutput(<item:milkyway_core:cobalt_mechanism> * 1, 32)
                                                      .addOutput(<item:thermal:lead_plate>, 2)
                                                      .addOutput(<item:tconstruct:round_plate>.withTag({Material: "tconstruct:cobalt" as string}), 1)
                                                      .addOutput(<item:create:zinc_nugget>, 1)
                                                      .addOutput(<item:tconstruct:cobalt_nugget>, 2)
                                                      .addOutput(<item:milkyway_core:scorched_mechanism>, 1)
                                                      .addStep<mods.createtweaker.PressingRecipe>()
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:thermal:lead_plate>))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:tconstruct:round_plate>.withTag({Material: "tconstruct:cobalt" as string})))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:zinc_ingot>))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:kubejs:polished_diamond_quartz>))
                                                      .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:tconstruct:molten_zinc> * 500)));
