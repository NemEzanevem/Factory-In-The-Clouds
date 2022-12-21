
StartupEvents.registry('block', event => {

event.create('gregtech:ptfe_casing').material('wood').displayName('Chemically Inert PTFE Casing').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('gregtech:ptfe_pipe_casing').material('wood').displayName('PTFE Pipe Casing').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('gregtech:pyro_casing').material('wood').displayName('Pyro Casing').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('gregtech:lv_machine_casing').material('wood').displayName('LV Machine Casing').hardness(4).tagBlock('minecraft:mineable/axe')

})

let PYRO;
let LCR;

MIMachineEvents.registerRecipeTypes(event => {
    PYRO = event.register("pyro")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
		
		LCR = event.register("lcr")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
		

});
let CIRCUIT_ASSEMBLER;
MIMachineEvents.registerRecipeTypes(event => {
    CIRCUIT_ASSEMBLER = event.register("circuit_assembler")
        .withItemInputs()
        .withItemOutputs();
});
let BENDING_MACHINE;
MIMachineEvents.registerRecipeTypes(event => {
    BENDING_MACHINE = event.register("bending_machine")
        .withItemInputs()
        .withItemOutputs();
});
let EXTRUDER;
MIMachineEvents.registerRecipeTypes(event => {
    EXTRUDER = event.register("extruder")
        .withItemInputs()
        .withItemOutputs();
});
let WIRING;
MIMachineEvents.registerRecipeTypes(event => {
    WIRING = event.register("wiring")
        .withItemInputs()
        .withItemOutputs();
});
let DISTILLING ;
MIMachineEvents.registerRecipeTypes(event => {
    DISTILLING = event.register("distilling")
        .withItemInputs()
        .withItemOutputs();
});
let ALLOYING ;
MIMachineEvents.registerRecipeTypes(event => {
    ALLOYING = event.register("alloy_smelter")
        .withItemInputs()
        .withItemOutputs();
});
let RECYCLING ;
MIMachineEvents.registerRecipeTypes(event => {
    RECYCLING = event.register("arc_furnace")
        .withItemInputs()
        .withItemOutputs();
});
let LATHE ;
MIMachineEvents.registerRecipeTypes(event => {
    LATHE = event.register("lathe")
        .withItemInputs()
        .withItemOutputs();
});
let ELECTRIC_HAMMER ;
MIMachineEvents.registerRecipeTypes(event => {
    ELECTRIC_HAMMER = event.register("electric_presser")
        .withItemInputs()
        .withItemOutputs();
});
let FLUID_SOLIDIFIER
MIMachineEvents.registerRecipeTypes(event => {
    FLUID_SOLIDIFIER = event.register("fluid_solidifier")
        .withItemInputs()
        .withItemOutputs();
});
let PULVERIZEING
MIMachineEvents.registerRecipeTypes(event => {
    PULVERIZEING = event.register("pulverizer")
        .withItemInputs()
        .withItemOutputs();
});
let BRONZE_ALLOY_SMELTER
MIMachineEvents.registerRecipeTypes(event => {
    BRONZE_ALLOY_SMELTER = event.register("bronze_alloy_smelter")
        .withItemInputs()
        .withItemOutputs();
});
let BRONZE_EXTRACTOR
MIMachineEvents.registerRecipeTypes(event => {
    BRONZE_EXTRACTOR = event.register("bronze_extractor")
        .withItemInputs()
        .withItemOutputs();
});
let BRONZE_STEAM_HAMMER
MIMachineEvents.registerRecipeTypes(event => {
    BRONZE_STEAM_HAMMER = event.register("bronze_steam_hammer")
        .withItemInputs()
        .withItemOutputs();
});
let STEEL_ALLOY_SMELTER
MIMachineEvents.registerRecipeTypes(event => {
    STEEL_ALLOY_SMELTER = event.register("steel_alloy_smelter")
        .withItemInputs()
        .withItemOutputs();
});
let STEEL_EXTRACTOR
MIMachineEvents.registerRecipeTypes(event => {
    STEEL_EXTRACTOR = event.register("steel_extractor")
        .withItemInputs()
        .withItemOutputs();
});
let STEEL_STEAM_HAMMER
MIMachineEvents.registerRecipeTypes(event => {
    STEEL_STEAM_HAMMER = event.register("steel_steam_hammer")
        .withItemInputs()
        .withItemOutputs();
});
let EXTRACT
MIMachineEvents.registerRecipeTypes(event => {
    EXTRACT = event.register("electric_extractor")
        .withItemInputs()
        .withItemOutputs();
});    
MIMachineEvents.registerCasings(event => event.register("pyro_casing"));
MIMachineEvents.registerCasings(event => event.register("lcr_casing"));
MIMachineEvents.registerCasings(event => event.register("lv_machine_casing"));   

MIMachineEvents.registerMachines(event => {
    const pyroHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output");
    const pyrocasing = event.memberOfBlock("gregtech:pyro_casing");
    const cupronickelCoilMember = event.memberOfBlock("modern_industrialization:cupronickel_coil");
    const pyroShapeBuilder = event.startShape("pyro_casing");
    for (let x = -1; x <= 1; x++) {
        for (let y= -1; y <= 1; y++) {
            for (let z = 0; z <= 3; z++) {
                if (z === 1 || z === 2) {
                    if (x !== 0 || y !== 0) {
                        pyroShapeBuilder.add(x, y, z, cupronickelCoilMember, event.noHatch());
                    }
                } else {
                    pyroShapeBuilder.add(x, y, z, pyrocasing, pyroHatch);
                }
            }
        }
    }
    const pyroShape = pyroShapeBuilder.build();

    event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
		
        "Pyrolyse Oven", "pyro", PYRO, pyroShape,
		
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
		
        event.progressBar(77, 33, "arrow"),
		
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		
        itemInputs => itemInputs.addSlots(56, 35, 2, 1), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(122, 35),
		
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
		
        "pyro_casing", "pyro", true, false, false,
    );
	
	const heatproofMem = event.memberOfBlock("gregtech:ptfe_casing");
	const heatproofMember = event.memberOfBlock("modern_industrialization:heatproof_machine_casing");
        

	//LCR
	const lcrHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
	const lcrpipe = event.memberOfBlock("gregtech:ptfe_pipe_casing");
	const lcrcasing = event.memberOfBlock("gregtech:ptfe_casing");
	const lcrShapeBuilder = event.startShape("lcr_casing");
	
	//top
	lcrShapeBuilder.add(0, +1, 1, cupronickelCoilMember, event.noHatch());
	
	lcrShapeBuilder.add(+1, +1, 0, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, +1, 0, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(+1, +1, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, +1, 1, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(+1, +1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, +1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, +1, 2, lcrcasing, lcrHatch);
	
	//center
	lcrShapeBuilder.add(0, 0, 1, lcrpipe, event.noHatch());
	
	lcrShapeBuilder.add(+1, 0, 0, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, 0, 0, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(+1, 0, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, 0, 1, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(+1, 0, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, 0, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, 0, 2, lcrcasing, lcrHatch);
	
	//base
	lcrShapeBuilder.add(+1, -1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, -1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, -1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(+1, -1, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, -1, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, -1, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(+1, -1, 0, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, -1, 0, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, -1, 0, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(0, 0, 0, lcrcasing);
	
	const lcrShape = lcrShapeBuilder.build();
	
	event.simpleElectricCraftingMultiBlock(
        "Large Chemical Reactor", "lcr", LCR, lcrShape,
        event.progressBar(77, 33, "arrow"),
        itemInputs => itemInputs.addSlots(36, 35, 3, 1), itemOutputs => itemOutputs.addSlots(102, 35, 3, 1),
        fluidInputs => fluidInputs.addSlots(56, 35, 5, 1), fluidOutputs => fluidOutputs.addSlots(122, 35, 4, 1),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "lcr_casing", "lcr", true, false, false,
    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Bending Machine", "bending_machine", BENDING_MACHINE, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "compress"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,
    
    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Circuit Assembler", "circuit_assembler", CIRCUIT_ASSEMBLER, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "circuit"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        6, 1, 1, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 2, 3).addSlots(150, 45, 1, 1), fluids => fluids.addSlots(50, 25, 1, 1),
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,
    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Extruder", "extruder", EXTRUDER, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "triple_arrow"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        2, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 2).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Electric Forge Hammer", "electric_presser", ELECTRIC_HAMMER, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "compress"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

        event.craftingSingleBlock(
            /* GENERAL PARAMETERS FIRST */
            // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
            "Electric Fluid Solidifier", "fluid_solidifier", FLUID_SOLIDIFIER, ["electric"],
            /* GUI CONFIGURATION */
            // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
            186, event.progressBar(105, 45, "compress"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
            /* SLOT CONFIGURATION */
            // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
            0, 1, 1, 0,
            // Capacity for fluid slots (unused here)
            16,
            // Slot positions: items and fluids.
            items => items.addSlots(150, 45, 1, 1), fluids => fluids.addSlots(50, 45, 1, 1),
            /* MODEL CONFIGURATION */
            // front overlay?, top overlay?, side overlay?
            true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Wiremill", "wiring", WIRING, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "wiremill"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Electric Distillery", "distilling", DISTILLING, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "extract"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 0, 1, 1,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1), fluids => fluids.addSlots(55, 45, 1,1).addSlots(150, 25, 1, 1),
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );


    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Alloy Smelter", "alloy_smelter", ALLOYING, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "triple_arrow"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        2, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 2).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Arc Furnace", "arc_furnace", RECYCLING, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "slice"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 1, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => fluids.addSlots(50, 25, 1, 1),
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Lathe", "lathe", LATHE, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "compress"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Macerator", "pulverizer", PULVERIZEING, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "macerate"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 4, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 2, 2), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );
    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Steam Alloy Smelter", "bronze_alloy_smelter",  BRONZE_ALLOY_SMELTER, ["bronze"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "triple_arrow"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        2, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 2, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Steam Extractor", "bronze_extractor",  BRONZE_EXTRACTOR, ["bronze"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "extract"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Steam Forge Hammer", "bronze_steam_hammer",  BRONZE_STEAM_HAMMER, ["bronze"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "compress"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "High Pressure Alloy Smelter", "steel_alloy_smelter",  STEEL_ALLOY_SMELTER, ["steel"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "triple_arrow"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        2, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 2, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );

    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "High Pressure Extractor", "steel_extractor",  STEEL_EXTRACTOR, ["steel"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "extract"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );
    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "High Pressure Forge Hammer", "steel_steam_hammer",  STEEL_STEAM_HAMMER, ["steel"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "compress"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );
    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        "Electric Extractor", "electric_extractor",  EXTRACT, ["electric"],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186, event.progressBar(105, 45, "extract"), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        items => items.addSlots(50, 45, 1, 1).addSlots(150, 45, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, true, false,

    );
})

	
	


