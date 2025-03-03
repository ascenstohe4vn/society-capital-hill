console.info("[SOCIETY] removeRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.remove({ mod: "justhammers" });
  e.remove({ mod: "itemfilters" });
  const removeByOutput = [
    // Twigs
    "twigs:polished_tuff",
    "twigs:polished_calcite_brick_wall",
    "twigs:polished_calcite_brick_stairs",
    "twigs:polished_calcite_brick_slab",
    "twigs:polished_calcite_bricks",
    "twigs:cracked_polished_calcite_bricks",
    "twigs:polished_calcite",
    "twigs:polished_calcite_stairs",
    "twigs:polished_calcite_slab",
    "twigs:polished_tuff_stairs",
    "twigs:polished_tuff_slab",
    "twigs:polished_tuff_bricks",
    "twigs:oak_table",
    "twigs:spruce_table",
    "twigs:birch_table",
    "twigs:jungle_table",
    "twigs:acacia_table",
    "twigs:dark_oak_table",
    "twigs:cracked_polished_tuff_bricks",
    "twigs:polished_tuff_brick_stairs",
    "twigs:polished_tuff_brick_slab",
    "twigs:polished_tuff_brick_wall",
    "twigs:warped_table",
    "twigs:crimson_table",
    "twigs:bamboo_table",
    "twigs:cherry_table",
    "twigs:mangrove_table",
    "twigs:tuff_stairs",
    "twigs:tuff_slab",
    "twigs:tuff_wall",
    "farm_and_charm:strawberry_seeds",
    "quark:calcite_wall",
    "quark:calcite_stairs",
    "quark:calcite_slab",
    // Botania
    "botania:elementium_sword",
    "botania:elementium_pickaxe",
    "botania:elementium_shovel",
    "botania:elementium_axe",
    "botania:elementium_hoe",
    "botania:manasteel_sword",
    "botania:manasteel_pick",
    "botania:manasteel_shovel",
    "botania:manasteel_axe",
    "botania:manasteel_hoe",
    "botania:manasteel_helmet",
    "botania:manasteel_chestplate",
    "botania:manasteel_leggings",
    "botania:manasteel_boots",
    "botania:elementium_helmet",
    "botania:elementium_leggings",
    "botania:elementium_chestplate",
    "botania:elementium_boots",
    "botania:terrasteel_boots",
    "botania:terrasteel_chestplate",
    "botania:terrasteel_helmet",
    "botania:terrasteel_leggings",
    "botania:fertilizer",
    "botania:floating_pollidisiac",
    "botania:pollidisiac",
    // Veggiesdelight
    "veggiesdelight:vegan_pizza",
    "veggiesdelight:vegan_pizza_slice",
    "veggiesdelight:dandelion_leaf",
    "veggiesdelight:dandelion_juice",
    "veggiesdelight:beetroot_pouch",
    "veggiesdelight:bellpepper_pouch",
    "veggiesdelight:cabbage_pouch",
    "veggiesdelight:cauliflower_pouch",
    "veggiesdelight:garlic_pouch",
    "veggiesdelight:pumpkin_pouch",
    "veggiesdelight:tomato_pouch",
    "veggiesdelight:melon_pouch",
    "veggiesdelight:wheat_pouch",
    "veggiesdelight:garlic_seeds",
    "veggiesdelight:cauliflower_seeds",
    "veggiesdelight:bellpepper_seeds",
    "atmospheric:golden_dragon_fruit_crate",
    "atmospheric:golden_dragon_fruit",
    "atmospheric:dragon_fruit_crate",
    "atmospheric:dragon_fruit",
    "verdantvibes:gardening_table",
    "irons_rpg_tweaks:identification_scroll",
    "unusualfishmod:depth_scythe",
    "unusualfishmod:ripsaw",
    "unusualfishmod:ancient_weapon_smithing_template",
    "capsule:capsulemarker",
    "capsule:capsule",
    "minecraft:milk_bucket",
    "farm_and_charm:feeding_trough",
    "meadow:wooden_milk_bucket",
    "meadow:wooden_sheep_milk_bucket",
    "meadow:wooden_warped_milk_bucket",
    "meadow:wooden_buffalo_milk_bucket",
    "meadow:wooden_goat_milk_bucket",
    "beachparty:beach_hat",
    "herbalbrews:top_hat",
    "herbalbrews:witch_hat",
    "fantasyfurniture:furniture_station",
    "supplementaries:lumisene_bottle",
    "supplementaries:lumisene_bucket",
    "farm_and_charm:fertilized_soil",
    "dew_drop_watering_cans:iron_watering_can",
    "dew_drop_watering_cans:gold_watering_can",
    "dew_drop_watering_cans:diamond_watering_can",
    "dew_drop_watering_cans:netherite_watering_can",
    "ftbquests:task_screen_configurator",
    "ftbquests:stage_barrier",
    "ftbquests:detector",
    "ftbquests:loot_crate_opener",
    "ftbquests:screen_1",
    "ftbquests:screen_3",
    "ftbquests:screen_5",
    "ftbquests:screen_7",
    "ftbquests:barrier",
    "etcetera:green_sweater",
    "etcetera:cyan_sweater",
    "etcetera:light_blue_sweater",
    "etcetera:blue_sweater",
    "etcetera:purple_sweater",
    "etcetera:magenta_sweater",
    "etcetera:pink_sweater",
    "etcetera:white_hat",
    "etcetera:light_gray_hat",
    "etcetera:gray_hat",
    "etcetera:brown_hat",
    "etcetera:red_hat",
    "etcetera:orange_hat",
    "etcetera:yellow_hat",
    "etcetera:wrench",
    "etcetera:lime_hat",
    "etcetera:green_hat",
    "etcetera:cyan_hat",
    "etcetera:light_blue_hat",
    "etcetera:blue_hat",
    "etcetera:purple_hat",
    "etcetera:magenta_hat",
    "etcetera:pink_hat",
    "etcetera:white_sweater",
    "etcetera:light_gray_sweater",
    "etcetera:gray_sweater",
    "etcetera:black_sweater",
    "etcetera:brown_sweater",
    "etcetera:red_sweater",
    "etcetera:orange_sweater",
    "etcetera:yellow_sweater",
    "etcetera:lime_sweater",
    "etcetera:prickly_can",
    "sewingkit:leather_strip",
    "sewingkit:leather_sheet",
    "candlelight:cooking_pot",
    "candlelight:cooking_pan",
    "farmingforblockheads:feeding_trough",
    "minecraft:elytra",
    "trials:crafter",
    "crafting_on_a_stick:anvil",
    "crafting_on_a_stick:chipped_anvil",
    "crafting_on_a_stick:damaged_anvil",
    "sophisticatedbackpacks:anvil_upgrade",
    "vintagedelight:mason_jar",
    "farm_and_charm:scarecrow",
    // Create
    "create:cart_assembler",
    "create:mechanical_bearing",
    "create:dough",
    "create:windmill_bearing",
    "create:steam_engine",
    "create:water_wheel",
    "createutilities:void_battery",
    "createutilities:void_chest",
    "meadow:woodcutter",
    // Crabbers Delight
    "crabbersdelight:bucket_of_shrimp_chum",
    "crabbersdelight:bucket_of_clam_chum",
    "crabbersdelight:bucket_of_clawster_chum",
    "crabbersdelight:bucket_of_crab_chum",
    // Autumnity
    "autumnity:pancake",
    "autumnity:syrup_bottle",
    "autumnity:sap_bottle",
    // Farmers Delight compat
    "farmersdelight:bacon_and_eggs",
    "farmersdelight:dog_food",
    "farmersdelight:horse_feed",
    "farmersdelight:organic_compost",
    "farmersdelight:rich_soil",
    "farmersdelight:carrot_crate",
    "farmersdelight:potato_crate",
    "farmersdelight:onion_crate",
    "farmersdelight:beetroot_crate",
    "farmersdelight:rich_soil_farmland",
    "farmersdelight:wild_beetroots",
    "farmersdelight:wild_cabbages",
    "farmersdelight:wild_potatoes",
    "farmersdelight:wild_carrots",
    "farmersdelight:wild_rice",
    "farmersdelight:wild_onions",
    "farmersdelight:onion",
    "farmersdelight:raw_pasta",
    "farm_and_charm:bacon",
    "farm_and_charm:tomato_seeds",
    "farm_and_charm:rotten_tomato",
    "farm_and_charm:tomato",
    "farm_and_charm:chicken_parts",
    "vintagedelight:cheese_mold",
    "vintagedelight:salt_dust",
    "farmersdelight:cabbage_seeds",
    "vintagedelight:ghost_pepper_seeds",
    "vintagedelight:cucumber_seeds",
    "farmersdelight:tomato_seeds",
    "vintagedelight:cheese_curds",
    "vintagedelight:cheese_slice",
    "candlelight:dress",
    "candlelight:flower_crown",
    "candlelight:shirt",
    "candlelight:trousers_and_vest",
    "candlelight:necktie",
    "vintagedelight:cyan_chefs_hat",
    "vintagedelight:white_chefs_hat",
    "vintagedelight:cheese_wheel",
    "vintagedelight:oat_seeds",
    "vintagedelight:oat",
    "farmersdelight:wheat_dough",
    "vintagedelight:oat_dough",
    "vintagedelight:oatmeal",
    "vintagedelight:black_chefs_hat",
    "vintagedelight:brown_chefs_hat",
    "vintagedelight:light_gray_chefs_hat",
    "vintagedelight:magenta_chefs_hat",
    "vintagedelight:lime_chefs_hat",
    "vintagedelight:oat_bag",
    "vintagedelight:wild_oats",
    "vintagedelight:oat_bale",
    "vintagedelight:cheese_mold",
    "vintagedelight:blue_chefs_hat",
    "vintagedelight:green_chefs_hat",
    "vintagedelight:light_blue_chefs_hat",
    "vintagedelight:orange_chefs_hat",
    "vintagedelight:raw_oats",
    "vintagedelight:salt_bucket",
    "vintagedelight:yellow_chefs_hat",
    "vintagedelight:lush_grass_block",
    "vintagedelight:gray_chefs_hat",
    "vintagedelight:purple_chefs_hat",
    "vintagedelight:pink_chefs_hat",
    "vintagedelight:red_chefs_hat",
    "vintagedelight:nut_mash_mason_jar",
    "vintagedelight:apple_sauce_mason_jar",
    "vintagedelight:gearo_berry_mason_jar",
    "vintagedelight:glow_berry_mason_jar",
    "vintagedelight:sweet_berry_mason_jar",
    "vintagedelight:pepper_jam_mason_jar",
    "vintagedelight:relish_mason_jar",
    // Furniture
    "beautify:warped_picture_frame",
    "beautify:birch_picture_frame",
    "beautify:jungle_picture_frame",
    "beautify:quartz_picture_frame",
    "beautify:acacia_picture_frame",
    "beautify:spruce_picture_frame",
    "beautify:dark_oak_picture_frame",
    "beautify:oak_picture_frame",
    "beautify:bookstack",
    "beautify:crimson_picture_frame",
    "beautify:lamp_bamboo",
    "beautify:lamp_jar",
    "beautify:lamp_light_bulb",
    "beautify:mangrove_picture_frame",
    "refurbished_furniture:workbench",
    "refurbished_furniture:knife",
    "candlelight:dark_oak_cabinet",
    "candlelight:spruce_cabinet",
    "candlelight:birch_cabinet",
    "candlelight:oak_cabinet",
    "candlelight:acacia_cabinet",
    "candlelight:jungle_cabinet",
    "candlelight:mangrove_cabinet",
    "candlelight:warped_cabinet",
    "candlelight:crimson_cabinet",
    "candlelight:cherry_cabinet",
    "candlelight:bamboo_cabinet",
    "furniture:spruce_clock",
    "furniture:oak_clock",
    "furniture:mangrove_clock",
    "furniture:cherry_clock",
    "furniture:dark_oak_clock",
    "furniture:acacia_clock",
    "furniture:jungle_clock",
    "furniture:birch_clock",
    "minecraft:painting",
    "candlelight:typewriter_copper",
    "create:cuckoo_clock",
    "beachparty:chair",
    "beachparty:beach_chair",
    "meadow:camera",
    "beachparty:table",
    "meadow:wheelbarrow",
    "beachparty:deck_chair",
    "beachparty:hammock",
    "candlelight:typewriter_iron",
    "beachparty:radio",
    "brewery:barrel_main",
    "beachparty:lounge_chair",
    "beachparty:tiki_chair",
    "furniture:birch_mirror",
    "furniture:jungle_mirror",
    "furniture:spruce_mirror",
    "furniture:cherry_mirror",
    "furniture:dark_oak_mirror",
    "furniture:acacia_mirror",
    "furniture:oak_mirror",
    "furniture:mangrove_mirror",
    "furniture:cash_register",
    "furniture:iron_fish_tank",
    "furniture:tool_box",
    "furniture:sewing_kit",
    "furniture:explorers_box",
    "furniture:pells",
    "furniture:display",
    "furniture:blueprints",
    "furniture:canvas",
    "supplementaries:clock_block",
    "furniture:gramophone",
    "furniture:telescope",
    "furniture:boat_in_a_jar",
    "furniture:copper_fish_tank",
    "furniture:terrarium",
    "tanukidecor:slot_machine",
    "beautify:lamp_candelabra_orange",
    "beautify:lamp_candelabra_yellow",
    "beautify:lamp_candelabra_lime",
    "beautify:lamp_candelabra_green",
    "beautify:lamp_candelabra_cyan",
    "beautify:lamp_candelabra_light_blue",
    "beautify:lamp_candelabra_blue",
    "beautify:lamp_candelabra",
    "beautify:lamp_candelabra_purple",
    "beautify:lamp_candelabra_red",
    "beautify:lamp_candelabra_magenta",
    "beautify:lamp_candelabra_pink",
    "beautify:lamp_candelabra_brown",
    "beautify:lamp_candelabra_black",
    "beautify:lamp_candelabra_gray",
    "beautify:lamp_candelabra_light_gray",
    "beautify:lamp_candelabra_white",
    "beautify:rope",
    "chimes:bamboo_chimes",
    "chimes:carved_bamboo_chimes",
    "chimes:iron_chimes",
    "chimes:copper_chimes",
    "chimes:amethyst_chimes",
    "chimes:glass_bells",
    "snowyspirit:snow_globe",
    "supplementaries:cannon",
    "supplementaries:lunch_basket",
    "candlelight:sofa",
    "candlelight:table",
    "candlelight:dinner_bell",
    "candlelight:hearth",
    "candlelight:painting",
    "candlelight:jewelry_box",
    "candlelight:chair",
    "candlelight:lamp",
    // Prismatic
    "torchmaster:feral_flare_lantern",
    "torchmaster:megatorch",
    "torchmaster:dreadlamp",
    // Wandering
    "tanukidecor:diy_workbench",
    // Toolsmith
    "furniture:bin",
    "create:mechanical_drill",
    "create:mechanical_saw",
    "extractinator:extractinator",
    "create:mechanical_harvester",
    "create:brown_toolbox",
    "mining_dimension:teleporter",
    "minecraft:flint_and_steel",
    // Armorer
    "sophisticatedbackpacks:stack_upgrade_tier_4",
    "sophisticatedbackpacks:stack_upgrade_starter_tier",
    "automobility:auto_mechanic_table",
    "automobility:automobile_assembler",
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "sophisticatedbackpacks:upgrade_base",
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    // Shepherd
    "comforts:hammock_pink",
    "comforts:hammock_gray",
    "comforts:hammock_orange",
    "comforts:hammock_white",
    "comforts:hammock_pink",
    "comforts:hammock_lime",
    "comforts:hammock_yellow",
    "comforts:hammock_light_blue",
    "comforts:hammock_magenta",
    "comforts:hammock_light_gray",
    "comforts:hammock_purple",
    "comforts:hammock_cyan",
    "comforts:hammock_black",
    "comforts:hammock_blue",
    "comforts:hammock_red",
    "comforts:hammock_green",
    "comforts:hammock_brown",
    "comforts:rope_and_nail",
    "beachparty:crocs",
    "meadow:fur_helmet",
    "meadow:fur_chestplate",
    "meadow:fur_leggings",
    "meadow:fur_boots",
    "candlelight:cooking_hat",
    "candlelight:chefs_jacket",
    "candlelight:chefs_pants",
    "candlelight:chefs_boots",
    "vinery:straw_hat",
    "vinery:winemaker_apron",
    "vinery:winemaker_leggings",
    "vinery:winemaker_boots",
    "naturescompass:naturescompass",
    "sewingkit:sewing_station",
    "sewingkit:file",
    "sewingkit:wood_sewing_needle",
    "sewingkit:stone_sewing_needle",
    "sewingkit:bone_sewing_needle",
    "sewingkit:iron_sewing_needle",
    "sewingkit:gold_sewing_needle",
    "sewingkit:diamond_sewing_needle",
    "sewingkit:netherite_sewing_needle",
    // Cleric
    "paraglider:spirit_orb",
    "constructionwand:stone_wand",
    "constructionwand:iron_wand",
    "constructionwand:diamond_wand",
    "constructionwand:infinity_wand",
    "herbalbrews:tea_kettle",
    "herbalbrews:copper_tea_kettle",
    "herbalbrews:cauldron",
    "create:wand_of_symmetry",
    // Winemaker
    "vinery:fermentation_barrel",
    "brewery:wooden_brewingstation",
    "brewery:copper_brewingstation",
    "brewery:netherite_brewingstation",
    "beachparty:mini_fridge",
    "beachparty:tiki_bar",
    // Cheesemaker
    "meadow:cheese_form",
    "solonion:lunchbag",
    "solonion:lunchbox",
    "solonion:golden_lunchbox",
    "sophisticatedstorage:feeding_upgrade",
    "sophisticatedbackpacks:feeding_upgrade",
    // Mechanic
    "rehooked:wood_hook",
    "rehooked:wood_chain",
    "rehooked:red_hook",
    "toms_storage:ts.inventory_connector",
    "toms_storage:ts.inventory_cable",
    "toms_storage:ts.inventory_cable_connector",
    "toms_storage:ts.storage_terminal",
    "toms_storage:ts.crafting_terminal",
    "toms_storage:ts.wireless_terminal",
    "toms_storage:ts.adv_wireless_terminal",
    "toms_storage:ts.paint_kit",
    "moreminecarts:chunk_loader",
    "moreminecarts:chiseled_organic_glass",
    "moreminecarts:chiseled_organic_glass",
    // Bard
    "zetter:easel",
    "zetter:paints",
    "etched:blank_music_disc",
    "etched:etching_table",
    "etched:album_jukebox",
    "etched:radio",
    "etched:boombox",
    "exposure:camera",
    "exposure:black_and_white_film",
    "exposure:color_film",
    "exposure:lightroom",
    "immersive_paintings:graffiti",
    "immersive_paintings:painting",
    "waterframes:projector",
    "waterframes:big_tv",
    "waterframes:tv_box",
    // Librarian
    "minecraft:enchanting_table",
    "create_enchantment_industry:disenchanter",
    "create_enchantment_industry:printer",
    "create_enchantment_industry:enchanting_guide",
    "labels:label",
    // Vinery
    "nethervinery:crimson_fermentation_barrel",
    "nethervinery:warped_fermentation_barrel",
    "nethervinery:warped_grapevine_pot",
    "nethervinery:crimson_grapevine_pot",
    "nethervinery:warped_apple_press",
    "nethervinery:crimson_apple_press",
    // Weaponsmith
    "functionalstorage:diamond_upgrade",
    "functionalstorage:netherite_upgrade",
    "functionalstorage:void_upgrade",
    "functionalstorage:storage_controller",
    "functionalstorage:controller_extension",
    "sophisticatedstorage:upgrade_base",
    "sophisticatedstorage:stack_upgrade_tier_1",
    "sophisticatedstorage:stack_upgrade_tier_1_plus",
    "sophisticatedstorage:stack_upgrade_tier_2",
    "sophisticatedstorage:stack_upgrade_tier_3",
    "functionalstorage:gold_upgrade",
    "sophisticatedstorage:stack_upgrade_tier_4",
    "sophisticatedstorage:stack_upgrade_tier_5",
    "functionalstorage:copper_upgrade",
    // Farmer
    "farmingforblockheads:yellow_fertilizer",
    "farmingforblockheads:red_fertilizer",
    "farmingforblockheads:green_fertilizer",
    "vinery:apple_press",
    "farm_and_charm:water_sprinkler",
    "farm_and_charm:cooking_pot",
    "bakery:small_cooking_pot",
    "farm_and_charm:roaster",
    "farm_and_charm:mincer",
    "farm_and_charm:crafting_bowl",
    "betterarcheology:growth_totem",
    "bakery:baker_station",
    "farm_and_charm:silo_wood",
    "liltractor:liltractor",
    "create_central_kitchen:cooking_guide",
    // Fisher
    "minecraft:fishing_rod",
    "aquaculture:iron_fishing_rod",
    "aquaculture:gold_fishing_rod",
    "aquaculture:diamond_fishing_rod",
    "aquaculture:neptunium_fishing_rod",
    "aquaculture:note_hook",
    "aquaculture:iron_hook",
    "aquaculture:gold_hook",
    "aquaculture:light_hook",
    "aquaculture:redstone_hook",
    "aquaculture:double_hook",
    "aquaculture:heavy_hook",
    "aquaculture:diamond_hook",
    "aquaculture:nether_star_hook",
    "aquaculture:worm",
    "aquaculture:worm_farm",
    "aquaculture:tackle_box",
    "candlelight:gold_ring",
    "create:netherite_diving_boots",
    "create:netherite_backtank",
    "create:netherite_diving_helmet",
    "create:copper_diving_helmet",
    "create:copper_backtank",
    "create:copper_diving_boots",
    "netherdepthsupgrade:lava_fishing_rod",
    // Butcher
    "trading_floor:trading_depot",
    "numismatics:bank_terminal",
    "numismatics:vendor",
    "numismatics:banking_guide",
    "numismatics:brass_depositor",
    "furniture:coffer",
    "numismatics:andesite_depositor",
    // Seeds
    "farm_and_charm:kernels",
    "minecraft:melon_seeds",
    "minecraft:pumpkin_seeds",
    "vinery:red_grape_seeds",
    "vinery:white_grape_seeds",
    "vinery:savanna_grape_seeds_red",
    "vinery:savanna_grape_seeds_white",
    "vinery:taiga_grape_seeds_red",
    "vinery:taiga_grape_seeds_white",
    "vinery:jungle_grape_seeds_red",
    "vinery:jungle_grape_seeds_white",
    "nethervinery:crimson_grape_seeds",
    "nethervinery:warped_grape_seeds",
    "farm_and_charm:barley_seeds",
    "farm_and_charm:lettuce_seeds",
    "farm_and_charm:tomato_seeds",
    "farm_and_charm:strawberry_seed",
    "refurbished_furniture:sea_salt",
    "refurbished_furniture:dough",
    "refurbished_furniture:wheat_flour",
    "refurbished_furniture:cheese",
    "refurbished_furniture:sweet_berry_jam",
    "refurbished_furniture:glow_berry_jam",
    "refurbished_furniture:cheese_sandwich",
    "vintagedelight:cheese_pizza",
    "vintagedelight:cheese_pizza_slice",
    "refurbished_furniture:meatlovers_pizza_slice",
  ];
  const removeById = [
    // VegiesDelight
    "vintagedelight:cooking/shakshouka",
    // Botania
    "botania:mana_infusion/mana_diamond_block",
    "farm_and_charm:mincer/hops_seeds",
    "functionalstorage:oak_drawer_alternate_x1",
    "treetap:syrup_from_maple_pams",
    "treetap:water_from_crying_obsidian",
    "translocators:diamond",
    "translocators:diamond_nugget",
    // Seeds
    "farm_and_charm:oat_seeds",
    // Extractinator
    "extractinator:extractinating/stone",
    "extractinator:extractinating/slush",
    "extractinator:extractinating/silt",
    "extractinator:extractinating/cobblestone",
    "extractinator:extractinating/sand",
    "extractinator:extractinating/gravel",
    // Create
    "create:mixing/andesite_alloy_from_zinc",
    "create:crafting/materials/andesite_alloy_from_zinc",
    // Vintage delight
    "vintagedelight:oat_bread",
    // Hammocks
    "comforts:hammock_orange",
    "comforts:hammock_yellow",
    "comforts:hammock_magenta",
    "comforts:hammock_light_blue",
    "comforts:hammock_yellow",
    "comforts:hammock_lime",
    "comforts:hammock_pink",
    "comforts:hammock_gray",
    "comforts:hammock_light_gray",
    "comforts:hammock_cyan",
    "comforts:hammock_purple",
    "comforts:hammock_blue",
    "comforts:hammock_brown",
    "comforts:hammock_green",
    "comforts:hammock_red",
    "comforts:hammock_black",
    // Tools & armors
    "farmersdelight:golden_knife",
    "farmersdelight:iron_knife",
    "farmersdelight:diamond_knife",
    "farmersdelight:netherite_knife_smithing",
    "minecraft:stone_sword",
    "minecraft:iron_sword",
    "minecraft:golden_sword",
    "minecraft:diamond_sword",
    "minecraft:iron_hoe",
    "minecraft:iron_axe",
    "minecraft:iron_pickaxe",
    "minecraft:iron_shovel",
    "minecraft:golden_hoe",
    "minecraft:golden_axe",
    "minecraft:golden_shovel",
    "minecraft:golden_pickaxe",
    "minecraft:stone_hoe",
    "minecraft:stone_axe",
    "minecraft:stone_pickaxe",
    "minecraft:stone_shovel",
    "minecraft:diamond_hoe",
    "minecraft:diamond_axe",
    "minecraft:diamond_pickaxe",
    "minecraft:diamond_shovel",
    "minecraft:netherite_hoe_smithing",
    "minecraft:netherite_axe_smithing",
    "minecraft:netherite_pickaxe_smithing",
    "minecraft:netherite_shovel_smithing",
    "minecraft:netherite_sword_smithing",
    "minecraft:diamond_boots",
    "minecraft:iron_boots",
    "minecraft:golden_boots",
    "minecraft:chainmail_boots",
    "minecraft:netherite_boots_smithing",
    "minecraft:netherite_helmet_smithing",
    "minecraft:chainmail_helmet",
    "minecraft:chainmail_chestplate",
    "minecraft:iron_chestplate",
    "minecraft:golden_chestplate",
    "minecraft:diamond_chestplate",
    "minecraft:netherite_chestplate_smithing",
    "minecraft:diamond_leggings",
    "minecraft:netherite_leggings_smithing",
    "minecraft:diamond_helmet",
    "minecraft:iron_helmet",
    "minecraft:golden_leggings",
    "minecraft:chainmail_leggings",
    "quark:tools/crafting/pickarang_heart",
    "minecraft:iron_leggings",
    "minecraft:golden_helmet",
    "betterarcheology:iron_brush",
    "betterarcheology:diamond_brush",
    "minecraft:netherite_brush_smithing",
    "aquaculture:neptunium_sword",
    "aquaculture:neptunium_pickaxe",
    "aquaculture:neptunium_fishing_rod",
    "aquaculture:neptunium_axe",
    "aquaculture:neptunium_shovel",
    "aquaculture:neptunium_hoe",
    "aquaculture:neptunium_fillet_knife",
    "aquaculture:stone_fillet_knife",
    "aquaculture:neptunium_helmet",
    "aquaculture:neptunium_leggings",
    "aquaculture:neptunium_boots",
    "aquaculture:iron_fillet_knife",
    "aquaculture:gold_fillet_knife",
    "aquaculture:diamond_fillet_knife",
    "aquaculture:neptunium_chestplate",
    "aquaculture:neptunium_bow",
    "sophisticatedbackpacks:backpack",
    "sophisticatedbackpacks:iron_backpack",
    // Storage Upgrade conversions
    "sophisticatedstorage:storage_stack_upgrade_tier_1_plus_from_backpack_stack_upgrade_starter_tier",
    "sophisticatedstorage:storage_stack_upgrade_tier_2_from_backpack_stack_upgrade_tier_1",
    "sophisticatedstorage:storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2",
    "sophisticatedstorage:storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3",
    "sophisticatedstorage:storage_stack_upgrade_tier_5_from_backpack_stack_upgrade_tier_4",
    "sophisticatedstorage:backpack_stack_upgrade_starter_tier_from_storage_stack_upgrade_tier_1_plus",
    "sophisticatedstorage:backpack_stack_upgrade_tier_1_from_storage_stack_upgrade_tier_2",
    "sophisticatedstorage:backpack_stack_upgrade_tier_2_from_storage_stack_upgrade_tier_3",
    "sophisticatedstorage:backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4",
    "sophisticatedstorage:backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5",
    "sophisticatedstorage:backpack_feeding_upgrade_from_storage_feeding_upgrade",
    "sophisticatedstorage:storage_feeding_upgrade_from_backpack_feeding_upgrade",
    "sophisticatedstorage:storage_advanced_feeding_upgrade_from_backpack_advanced_feeding_upgrade",
    "sophisticatedstorage:backpack_advanced_feeding_upgrade_from_storage_advanced_feeding_upgrade",
    // Sleeping bag
    "comforts:sleeping_bag_cyan",
    "comforts:sleeping_bag_red",
    "comforts:sleeping_bag_light_blue",
    "comforts:sleeping_bag_magenta",
    "comforts:sleeping_bag_yellow",
    "comforts:sleeping_bag_lime",
    "comforts:sleeping_bag_light_gray",
    "comforts:sleeping_bag_purple",
    "comforts:sleeping_bag_blue",
    "comforts:sleeping_bag_gray",
    "comforts:sleeping_bag_orange",
    "comforts:sleeping_bag_brown",
    "comforts:sleeping_bag_green",
    "comforts:sleeping_bag_black",
    "comforts:sleeping_bag_pink",
    // Vinery compat:
    "conditional:create/mixing/aegis_wine_mixing",
    "conditional:create/mixing/apple_cider_mixing",
    "conditional:create/mixing/apple_juice_mixing",
    "conditional:create/mixing/apple_wine_mixing",
    "conditional:create/mixing/bolvar_wine_mixing",
    "conditional:create/mixing/chenet_wine_mixing",
    "conditional:create/mixing/cherry_wine_mixing",
    "conditional:create/mixing/chorus_wine_mixing",
    "conditional:create/mixing/clark_wine_mixing",
    "conditional:create/mixing/creepers_crush_mixing",
    "conditional:create/mixing/cristel_wine_mixing",
    "conditional:create/mixing/eiswein_mixing",
    "conditional:create/mixing/glowing_wine_mixing",
    "conditional:create/mixing/jellie_wine_mixing",
    "conditional:create/mixing/jo_special_mixture_mixing",
    "conditional:create/mixing/kelp_cider_mixing",
    "conditional:create/mixing/knulp_wine_mixing",
    "conditional:create/mixing/magnetic_wine_mixing",
    "conditional:create/mixing/mead_mixing",
    "conditional:create/mixing/mellohi_wine_mixing",
    "conditional:create/mixing/miss_lilitus_wine_mixing",
    "conditional:create/mixing/mojang_noir_mixing",
    "conditional:create/mixing/noir_wine_mixing",
    "conditional:create/mixing/red_grape_juice_mixing",
    "conditional:create/mixing/red_jungle_grape_juice_mixing",
    "conditional:create/mixing/red_savanna_grape_juice_mixing",
    "conditional:create/mixing/red_taiga_grape_juice_mixing",
    "conditional:create/mixing/red_wine_mixing",
    "conditional:create/mixing/solaris_wine_mixing",
    "conditional:create/mixing/stal_wine_mixing",
    "conditional:create/mixing/strad_wine_mixing",
    "conditional:create/mixing/villagers_fright_mixing",
    "conditional:create/mixing/white_grape_juice_mixing",
    "conditional:create/mixing/white_jungle_grape_juice_mixing",
    "conditional:create/mixing/white_savanna_grape_juice_mixing",
    "conditional:create/mixing/white_taiga_grape_juice_mixing",
    "vinery:create/mixing/aegis_wine",
    "vinery:create/mixing/apple_cider",
    "vinery:create/mixing/apple_juice",
    "vinery:create/mixing/apple_wine",
    "vinery:create/mixing/bolvar_wine",
    "vinery:create/mixing/chenet_wine",
    "vinery:create/mixing/cherry_wine",
    "vinery:create/mixing/chorus_wine",
    "vinery:create/mixing/clark_wine",
    "vinery:create/mixing/creepers_crush",
    "vinery:create/mixing/cristel_wine",
    "vinery:create/mixing/eiswein",
    "vinery:create/mixing/glowing_wine",
    "vinery:create/mixing/jellie_wine",
    "vinery:create/mixing/jo_special_mixture",
    "vinery:create/mixing/kelp_cider",
    "vinery:create/mixing/knulp_wine",
    "vinery:create/mixing/magnetic_wine",
    "vinery:create/mixing/mead",
    "vinery:create/mixing/mellohi_wine",
    "vinery:create/mixing/lilitu_wine",
    "vinery:create/mixing/bottle_mojang_noir",
    "vinery:create/mixing/noir_wine",
    "vinery:create/mixing/red_grape_juice",
    "vinery:create/mixing/red_jungle_grape_juice",
    "vinery:create/mixing/red_savanna_grape_juice",
    "vinery:create/mixing/red_taiga_grape_juice",
    "vinery:create/mixing/red_wine",
    "vinery:create/mixing/solaris_wine",
    "vinery:create/mixing/stal_wine",
    "vinery:create/mixing/strad_wine",
    "vinery:create/mixing/villagers_fright",
    "vinery:create/mixing/white_grape_juice",
    "vinery:create/mixing/white_jungle_grape_juice",
    "vinery:create/mixing/white_savanna_grape_juice",
    "vinery:create/mixing/white_taiga_grape_juice",
    "vinery:create/mixing/lamroc_wine",
    "create:crafting/kinetics/fluid_pipe_vertical",
    "nethervinery:create/mixing/blazewine_pinot",
    "nethervinery:create/mixing/netherite_nectar",
    "nethervinery:create/mixing/ghastly_grenache",
    "nethervinery:create/mixing/nether_fizz",
    "nethervinery:create/mixing/lava_fizz_liquids",
    "nethervinery:create/mixing/lava_fizz",
    "nethervinery:create/mixing/improved_nether_fizz",
    "nethervinery:create/mixing/improved_lava_fizz",
    "create_connected:crafting/kinetics/fluid_vessel",
    "create:item_application/copper_casing_from_wood",
    // Farming
    "netherdepthsupgrade:food/nether_salad",
    "create_central_kitchen:compacting/honey_cookie",
    "create_central_kitchen:compacting/sweet_berry_cookie",
    "farmersdelight:honey_cookie",
    "farmersdelight:sweet_berry_cookie",
    "create_central_kitchen:crafting/pumpkin_pie",
    "bakery:farm_and_charm/pot_cooking/apple_jam",
    "bakery:farm_and_charm/pot_cooking/strawberry_jam",
    "bakery:farm_and_charm/pot_cooking/sweetberry_jam",
    "bakery:farm_and_charm/pot_cooking/pudding",
    "conditional:create/mixing/cake_dough",
    "farm_and_charm:create/mixing/dough",
    "farm_and_charm:create/mixing/farmer_salad",
    "farm_and_charm:create/mixing/oatmeal_with_strawberries",
    "candlelight:farm_and_charm/pot_cooking/tomato_soup",
    "bakery:farm_and_charm/pot_cooking/rabbit_stew",
    "farmersdelight:farm_and_charm/pot_cooking/rabbit_stew",
    "bakery:meadow/cooking/rabbit_stew",
    "bakery:farm_and_charm/pot_cooking/glowberry_jam",
    "farmersdelight:meadow/cooking/rabbit_stew",
    "conditional:create/mixing/sweet_dough",
    "farm_and_charm:drying/fertilizer_from_rotten_flesh",
    "farm_and_charm:mincer/fertilizer",
    "minecraft:beetroot_soup",
    "herbalbrews:milk_coffee",
    "farm_and_charm:pot_cooking/beetroot_soup",
    "farm_and_charm:pot_cooking/mushroom_soup",
    "meadow:farm_and_charm/pot_cooking/beetroot_soup",
    "meadow:cooking_pot/beetroot_soup",
    "bakery:meadow/cooking/beetroot_soup",
    "crabbersdelight:meadow/cooking/stuffed_nautilus_shell",
    "bakery:farm_and_charm/pot_cooking/beetroot_soup",
    "bakery:farm_and_charm/pot_cooking/chocolate_truffle",
    "bakery:farm_and_charm/pot_cooking/chocolate_jam",
    "farmersdelight:farm_and_charm/pot_cooking/stuffed_pumpkin_block",
    "farmersdelight:cake_from_milk_bottle",
    "untitledduckmod:crafting_shaped/goose_cake",
    "untitledduckmod:crafting_shaped/duck_cake",
    "create:crafting/curiosities/cake",
    // Saw
    "cb_microblock:stone_rod",
    "cb_microblock:stone_saw",
    "cb_microblock:iron_saw",
    "cb_microblock:diamond_saw",
    // Multiplying with salt",
    "meadow:cooking_pot/cooked_buffalo_meat",
    "meadow:cooking_pot/cooked_rabbit",
    "meadow:cooking_pot/cooked_chicken",
    "meadow:cooking_pot/cooked_mutton",
    "meadow:cooking_pot/cooked_porkchop",
    "meadow:cooking_pot/steak",
    "meadow:cooking_pot/cooked_cod",
    "meadow:cooking_pot/cooked_salmon",
    "meadow:cooking_pot/steak",
    "meadow:cooking_pot/baked_potato",
    // Dye
    "etcetera:dye_green_sweater",
    "etcetera:dye_cyan_sweater",
    "etcetera:dye_light_blue_sweater",
    "etcetera:dye_blue_sweater",
    "etcetera:dye_purple_sweater",
    "etcetera:dye_magenta_sweater",
    "etcetera:dye_pink_sweater",
    "etcetera:dye_white_hat",
    "etcetera:dye_light_gray_hat",
    "etcetera:dye_gray_hat",
    "etcetera:dye_brown_hat",
    "etcetera:dye_red_hat",
    "etcetera:dye_orange_hat",
    "etcetera:dye_yellow_hat",
    "etcetera:dye_lime_hat",
    "etcetera:dye_green_hat",
    "etcetera:dye_cyan_hat",
    "etcetera:dye_light_blue_hat",
    "etcetera:dye_blue_hat",
    "etcetera:dye_purple_hat",
    "etcetera:dye_magenta_hat",
    "etcetera:dye_pink_hat",
    "etcetera:dye_white_sweater",
    "etcetera:dye_light_gray_sweater",
    "etcetera:dye_gray_sweater",
    "etcetera:dye_black_sweater",
    "etcetera:dye_brown_sweater",
    "etcetera:dye_red_sweater",
    "etcetera:dye_orange_sweater",
    "etcetera:dye_yellow_sweater",
    "etcetera:dye_lime_sweater",
    // etc
    "etcetera:string_from_cotton_flower",
    "gag:time_sand_pouch",
    "gag:fishing_dynamite",
    "tradingpost:trading_post",
    // Broken
    "farm_and_charm:supply_cart",
    "farm_and_charm:plow",
    // Nether depths
    "netherdepthsupgrade:grilled_lava_pufferfish",
    "netherdepthsupgrade:grilled_obsidianfish",
    "netherdepthsupgrade:grilled_searing_cod",
    "netherdepthsupgrade:grilled_soulsucker",
    "netherdepthsupgrade:grilled_glowdine",
    "netherdepthsupgrade:grilled_magmacubefish",
    "netherdepthsupgrade:grilled_blazefish",
    // GAG
    "gag:labeling_tool",
    "gag:pigment_jar_to_regular_bottle",
    "gag:hearthstone",
    // milk
    "create:fill_minecraft_bucket_with_minecraft_milk",
    "create_central_kitchen:mixing/hot_cocoa",
    "vintagedelight:meat_pizza",
    "minecraft:beehive",
  ];
  const removeByInput = [
    "veggiesdelight:mature_dandelion",
    "veggiesdelight:dandelion_leaf",
    "create:dough",
    "sewingkit:leather_strip",
    "sewingkit:leather_sheet",
    "minecraft:milk_bucket",
    "meadow:wooden_milk_bucket",
    "meadow:wooden_sheep_milk_bucket",
    "meadow:wooden_warped_milk_bucket",
    "meadow:wooden_buffalo_milk_bucket",
    "meadow:wooden_goat_milk_bucket",
    "atmospheric:golden_dragon_fruit_crate",
    "atmospheric:golden_dragon_fruit",
    "atmospheric:dragon_fruit_crate",
    "atmospheric:dragon_fruit",
    "veggiesdelight:beetroot_pouch",
    "veggiesdelight:bellpepper_pouch",
    "veggiesdelight:cabbage_pouch",
    "veggiesdelight:cauliflower_pouch",
    "veggiesdelight:garlic_pouch",
    "veggiesdelight:pumpkin_pouch",
    "veggiesdelight:tomato_pouch",
    "veggiesdelight:melon_pouch",
    "veggiesdelight:wheat_pouch",
  ];
  removeById.forEach((item) => {
    e.remove({ id: item });
  });
  removeByOutput.forEach((item) => {
    e.remove({ output: item });
  });
  removeByInput.forEach((item) => {
    e.remove({ input: item });
  });
  e.remove({ mod: "pamhc2trees" });
  e.remove({ mod: "waystones" });
  // Remove dying
  e.remove({ type: "meadow:cooking" });
  e.remove({ type: "meadow:woodcutting" });
  e.remove({ type: "farm_and_charm:pot_cooking" });
  // Replace default milk
  e.replaceInput({ fluid: "minecraft:milk" }, "minecraft:milk", "society:milk");
});
