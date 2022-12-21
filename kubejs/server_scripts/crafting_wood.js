ServerEvents.recipes(event => {
  e.shaped('unify:labour_axe', [
      'AA ',
      'AS ',
      ' S '
  ], {
      S: 'minecraft:stick',
      A: 'compressedblocks:compressed_oak_x3'
  })
})
ServerEvents.recipes(event => {
e.shapeless('oak_planks', ['oak_log', 'unify:labour_axe']).keepIngredient('unify:labour_axe')
e.shapeless('jungle_planks', ['jungle_log', 'unify:labour_axe']).keepIngredient('unify:labour_axe')
e.shapeless('birch_planks', ['birch_log', 'unify:labour_axe']).keepIngredient('unify:labour_axe')
e.shapeless('dark_oak_planks', ['dark_oak_log', 'unify:labour_axe']).keepIngredient('unify:labour_axe')
e.shapeless('spruce_planks', ['spruce_log', 'unify:labour_axe']).keepIngredient('unify:labour_axe')
e.shapeless('acacia_planks', ['acacia_log', 'unify:labour_axe']).keepIngredient('unify:labour_axe')
})
ServerEvents.recipes(event => {
event.remove({id: 'minecraft:jungle_planks'})
event.remove({id: 'minecraft:cobblestone'})
event.remove({id: 'minecraft:acacia_planks'})
event.remove({id: 'minecraft:birch_planks'})
event.remove({id: 'minecraft:dark_oak_planks'})
event.remove({id: 'minecraft:oak_slab'})
event.remove({id: 'minecraft:jungle_slab'})
event.remove({id: 'minecraft:birch_slab'})
event.remove({id: 'minecraft:dark_oak_slab'})
event.remove({id: 'minecraft:spruce_slab'})
event.remove({id: 'minecraft:acacia_slab'})
event.remove({id: 'minecraft:oak_planks'})
event.remove({id: 'minecraft:furnace'})
event.remove({id: 'pureminingdimension:mining_dimension_portal_block'})
event.remove({id: 'botania:apothecary_default'})
})
ServerEvents.recipes(event => {
  e.shaped('minecraft:furnace', [
    'SSS',
    'S S',
    'SSS'
], {
    S: 'compressedblocks:compressed_cobblestone_x1',
})
})
ServerEvents.recipes(event => {
  e.shaped('pureminingdimension:mining_dimension_portal_block', [
    'SSS',
    'SPS',
    'SSS'
], {
    S: 'minecraft:stone_bricks',
    P: 'botania:lime_petal'
})
})
ServerEvents.recipes(event => {
    e.shaped('botania:apothecary_default', [
      'SFS',
      ' D ',
      'EDE'
  ], {
      S: 'compressedblocks:compressed_stone_x1',
      F: 'botania:white_double_flower',
      D: 'compressedblocks:compressed_stone_x2',
      E: 'minecraft:stone_slab'
  })
  })
