console.info("[SOCIETY] cornucopia.js loaded");

const fruitTreeBlocks = [
  "pamhc2trees:pamorange",
  "pamhc2trees:pamdragonfruit",
  "pamhc2trees:pampeach",
  "pamhc2trees:pamplum",
  "pamhc2trees:pambanana",
  "pamhc2trees:pamapple",
  "pamhc2trees:pamcherry",
  "pamhc2trees:pamstarfruit",
  "pamhc2trees:pamlychee",
  "pamhc2trees:pammango",
  "pamhc2trees:pamhazelnut",
  "pamhc2trees:pampawpaw",
  "pamhc2trees:pamcinnamon",
  "pamhc2trees:pampassionfruit",
  "pamhc2trees:pamlemon",
];
const dropThree = [
  "pamhc2trees:pamhazelnut",
  "pamhc2trees:pamlychee",
  "pamhc2trees:pambanana",
];
const dropModified = ["pamhc2trees:pampassionfruit", "pamhc2trees:pamorange"];
const dropFourModified = ["pamhc2trees:pamcherry", "pamhc2trees:pamapple"];

ItemEvents.rightClicked("society:cornucopia", (e) => {
  const { server, player, level, item, hand } = e;

  if (player.isFake()) return;
  if (hand == "OFF_HAND") return;
  player.addItemCooldown(item, 40);
  player.damageHeldItem("main_hand", 1);
  let scannedBlock;
  let fruitDrop;
  let fruitType;
  let fruitItem;
  let fruitCount;
  let experienceMult = 0;
  server.runCommandSilent(
    `playsound trials:breeze_idle block @a ${player.x} ${player.y} ${player.z}`
  );
  for (let pos of BlockPos.betweenClosed(
    new BlockPos(player.x - 12, player.y - 2, player.z - 12),
    [player.x + 12, player.y + 12, player.z + 12]
  )) {
    scannedBlock = level.getBlock(pos);

    if (
      fruitTreeBlocks.includes(scannedBlock.id) &&
      scannedBlock.properties.get("age") == 7
    ) {
      fruitDrop = player.level.createEntity("minecraft:item");
      fruitType = String(scannedBlock.id.split(":")[1]);
      fruitCount = 1;
      experienceMult++;
      level.spawnParticles(
        "mysticaloaktree:wind",
        true,
        scannedBlock.x,
        scannedBlock.y + 0.5,
        scannedBlock.z,
        0.1 * rnd(0, 1.5),
        0.1 * rnd(0, 1.5),
        0.1 * rnd(0, 1.5),
        7,
        0.05
      );
      server.runCommandSilent(
        `playsound minecraft:block.grass.break block @a ${scannedBlock.x} ${scannedBlock.y} ${scannedBlock.z} 0.5`
      );
      if (dropThree.includes(scannedBlock.id)) fruitCount = 3;
      if (dropModified.includes(scannedBlock.id)) {
        fruitItem = Item.of(
          scannedBlock.id === "pamhc2trees:pampassionfruit"
            ? "atmospheric:passion_fruit"
            : "atmospheric:orange"
        );
      } else if (dropFourModified.includes(scannedBlock.id)) {
        fruitCount = 4;
        fruitItem = Item.of(
          scannedBlock.id === "pamhc2trees:pamcherry"
            ? "vinery:cherry"
            : "minecraft:apple"
        );
      } else {
        fruitItem = Item.of(
          `pamhc2trees:${fruitType.substring(3, fruitType.length)}item`
        );
      }
      fruitItem.count = player.stages.has("tree_whisperer")
        ? fruitCount * 2
        : fruitCount;
      scannedBlock.set(scannedBlock.id, {
        waterlogged: scannedBlock.properties.get("waterlogged") || "false",
        age: "0",
      });
      fruitDrop.x = scannedBlock.x;
      fruitDrop.y = scannedBlock.y;
      fruitDrop.z = scannedBlock.z;
      fruitDrop.item = fruitItem;

      fruitDrop.spawn();
    }
  }
  server.runCommandSilent(
    `puffish_skills experience add ${player.username} society:farming ${
      experienceMult * 30
    }`
  );
});
