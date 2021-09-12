Vars.content.blocks().each(b => {
if(((b instanceof Wall) || (b instanceof BaseTurret) || (b instanceof Drill))) b.hasShadow = false;
});

Blocks.thermalGenerator.hasShadow =  false
Blocks.payloadRouter.hasShadow = false
Blocks.payloadConveyor.hasShadow = false