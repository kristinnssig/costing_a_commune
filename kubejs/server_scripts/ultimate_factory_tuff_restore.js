// KubeJS recipe: restore Create: Ultimate Factory's old renewable Tuff recipe
// Uses a Basin + Mechanical Press

ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    'minecraft:tuff',
    [
      'minecraft:cobblestone',
      Fluid.of('minecraft:water', 250)
    ]
  ).id('kubejs:create_ultimate_factory/tuff_from_cobblestone_and_water')
})
