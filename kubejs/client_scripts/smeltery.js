onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> The tag name
     * "minecraft:paper"        -> The icon
     * "Getting Started"        -> The title
     * "This is a description"  -> The description
     * [...items]               -> Default items
     */
    event.createTag("kubejs:twilight_forest", "kubejs:enderium_core", "Twilight Portal", "How To Open The Gateway", [
        // some default items!
        "kubejs:enderium_core",
    ]);
    onEvent("ponder.registry", (event) => {
        /**
         * scene with custom structure
         */
        event.create("kubejs:enderium_core")
            .scene(
                "twilight_portal",
                "Twilight Portal",
                "kubejs:twilight_portal",
                (scene, util) => {
                  scene.showStructure();
                  scene.addKeyframe();
                  scene
                  scene.idle(60);
                })
              });
