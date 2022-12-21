StartupEvents.registry('item', event => {
    event.create('unify:labour_axe', 'axe').tier('netherite').modifyTier(t => t.uses = -1)
})