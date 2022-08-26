// FillingManager.addRecipe(name as string, output as Percentaged<IItemStack>, inputContainer as IIngredient, inputFluid as IFluidStack, duration as int) as void

<recipetype:create:filling>.addRecipe("blood_vial", <item:forbidden_arcanus:blood_test_tube>.withTag({Blood: 3000 as int}), <item:forbidden_arcanus:test_tube>, <fluid:tconstruct:blood> * 300, 200);