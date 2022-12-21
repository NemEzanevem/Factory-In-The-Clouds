ServerEvents.recipes(event => {
  event.shapeless('1x minecraft:acacia_slab', ['minecraft:acacia_log'])

    event.remove({id: 'minecraft:oak_planks'})
    event.remove({id: 'minecraft:jungle_planks'})
    event.remove({id: 'minecraft:spruce_planks'})
    event.remove({id: 'minecraft:acacia_planks'})
    event.remove({id: 'minecraft:dark_oak_planks'})
    event.remove({id: 'minecraft:oak_slab'})
    event.remove({id: 'minecraft:jungle_slab'})
    event.remove({id: 'minecraft:spruce_slab'})
    event.remove({id: 'minecraft:dark_oak_slab'})
    event.remove({id: 'minecraft:acacia_slab'})
    event.remove({id: 'minecraft:birch_planks'})
    event.shapeless('1x minecraft:jungle_slab', ['minecraft:jungle_log'])
    event.shapeless('1x minecraft:dark_oak_slab', ['minecraft:dark_oak_log'])
    event.shapeless('1x minecraft:birch_slab', ['minecraft:birch_log'])
    event.shapeless('1x minecraft:spruce_slab', ['minecraft:spruce_log'])
    event.shapeless('1x minecraft:oak_slab', ['minecraft:oak_log'])
    event.shaped('1x minecraft:acacia_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:acacia_slab',
      })
    event.shaped('1x minecraft:jungle_planks', [
      'S',
      'S'
    ], {
      S: 'minecraft:jungle_slab',
    })
    event.shaped('1x minecraft:dark_oak_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:dark_oak_slab',
      })
      event.shaped('1x minecraft:birch_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:birch_slab',
      })
      event.shaped('1x minecraft:spruce_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:spruce_slab',
      })
      event.shaped('1x minecraft:oak_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:oak_slab',
      })
      event.shaped('1x minecraft:cobblestone', [
        'SSS',
        'SSS',
        'SSS'
      ], {
        S: 'botania:pebble',
      })

})