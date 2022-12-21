ServerEvents.recipes(event => {
      event.shaped('unify:diamond_gear', [
        'DSD',
        'SES',
        'DSD'
      ], {
        S: Item.of('unify:diamond_plate').ignoreNBT(),
        D: 'minecraft:diamond',
        E: 'minecraft:iron_nugget'
    })
  ServerEvents.recipes(event => {
      event.shaped('botania:diluted_pool', [
      'SSS',
      'EIE',
      'DED'
    ], {
      S: 'botania:livingrock_bricks_slab',
      D: 'create:andesite_casing',
      E: 'botania:chiseled_livingrock_bricks',
      I: 'unify:diamond_gear'
  })
})
})
ServerEvents.recipes(event => {
  event.remove({id: 'botania:diluted_pool'})
})
ServerEvents.recipes(event => {
  event.shaped('modern_industrialization:forge_hammer', [
    'SES',
    'ZSR',
    'DDD'
  ], {
    S: 'minecraft:iron_block',
    D: 'minecraft:iron_ingot',
    E: 'compressedblocks:compressed_iron_x1',
    Z: 'minecraft:diamond_pickaxe',
    R: 'minecraft:diamond_axe'
  })   
})