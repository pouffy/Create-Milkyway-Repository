import mods.create.FillingManager;
import mods.create.PressingManager;
import mods.jei.JEI;

<recipetype:create:filling>.addRecipe("kermitamine_tray_recipe", <item:kubejs:kermitamine_tray>, <item:createbb:tray>, <fluid:kubejs:kermitamine_235> * 1000, 200);

<recipetype:create:pressing>.addRecipe("kermitamine_press_recipe", [<item:kubejs:kermitamine>.withTag({RepairCost: 1 as int, "quark:RuneAttached": 1 as byte, HideFlags: 1 as int, Enchantments: [{}], "quark:RuneColor": {id: "quark:green_rune" as string, Count: 1 as byte}}) % 50, <item:createbb:tray>], <item:kubejs:kermitamine_tray>, 200);

<item:kubejs:kermitamine>.addTooltip("§a§o§lPerficiendus Perfectum Magnum opus...");