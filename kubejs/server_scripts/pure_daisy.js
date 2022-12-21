ServerEvents.recipes(event => {
    event.remove({ output: "botania:livingrock" })
    event.remove({id: 'botania:livingwood_log'})
    event.recipes.botania.pure_daisy("botania:livingwood_log", "compressedblocks:compressed_oak_x2")
    event.recipes.botania.pure_daisy("botania:livingrock", "compressedblocks:compressed_stone_x2")
})



