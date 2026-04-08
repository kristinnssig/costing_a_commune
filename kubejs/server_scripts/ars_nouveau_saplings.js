// KubeJS recipes: craftable Archwood saplings
// Revised recipe: requires 4 vanilla saplings, 4 matching dyes, and 1 bone meal
ServerEvents.recipes(event => {
  const saplingTag = '#minecraft:saplings'

  const makeRecipe = (result, dye) => {
    event.shaped(result, [
      'ADA',
      'DBD',
      'ADA'
    ], {
      A: saplingTag,
      D: dye,
      B: 'minecraft:bone_meal'
    }).id(`kubejs:ars_nouveau/${result.split(':')[1]}`)
  }

  makeRecipe('ars_nouveau:green_archwood_sapling', 'minecraft:green_dye')
  makeRecipe('ars_nouveau:blue_archwood_sapling', 'minecraft:blue_dye')
  makeRecipe('ars_nouveau:purple_archwood_sapling', 'minecraft:purple_dye')
  makeRecipe('ars_nouveau:red_archwood_sapling', 'minecraft:red_dye')
})
