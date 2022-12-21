ServerEvents.recipes(event => {
    event.remove({output: 'botania:hydroangeas'})
    event.recipes.botania.petal_apothecary("botania:hydroangeas", ["compressedblocks:compressed_lapis_x1", "minecraft:lapis_block", "minecraft:lapis_block", "minecraft:lapis_block", "botania:blue_petal_block", "botania:blue_petal_block", "botania:cyan_petal_block", "botania:cyan_petal_block" ])
})