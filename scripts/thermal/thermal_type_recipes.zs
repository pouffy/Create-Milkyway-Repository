<recipetype:thermal:press>.addRecipe("press_test_with_secondary", [<item:kubejs:enderium_pearl> % 80], <fluid:minecraft:empty>, [<item:thermal:enderium_ingot> * 4, <item:thermal:chiller_ball_cast>], 2000);
<recipetype:create:emptying>.addRecipe("enderium_pearl_drain", <item:kubejs:slightly_drained_enderium_pearl>, <fluid:thermal:ender> * 100, <item:kubejs:enderium_pearl>, 400);
<recipetype:create:emptying>.addRecipe("slightly_drained_enderium_pearl_drain", <item:kubejs:drained_enderium_pearl>, <fluid:thermal:ender> * 100, <item:kubejs:slightly_drained_enderium_pearl>, 400);
<recipetype:create:emptying>.addRecipe("drained_enderium_pearl_drain", <item:kubejs:very_drained_enderium_pearl>, <fluid:thermal:ender> * 100, <item:kubejs:drained_enderium_pearl>, 400);
<recipetype:create:emptying>.addRecipe("very_drained_enderium_pearl_drain", <item:kubejs:enderium_core>, <fluid:thermal:ender> * 100, <item:kubejs:very_drained_enderium_pearl>, 400);
<recipetype:create:filling>.addRecipe("emptier", <item:kubejs:data_tube>, <item:create:electron_tube>, <fluid:createchromaticreturn:liquid_experience> * 1000, 200);
