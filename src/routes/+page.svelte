<script lang="ts">
    import Card from "../components/card/Card.svelte";
    import View from "../components/route/View.svelte";
    import untypedRoutes from "../routes.json";
    import type { IFolder } from "../types/routes";

    const routes = untypedRoutes as IFolder;
</script>

<div class="flex flex-col space-y-2 w-full h-full mb-0 items-center overscroll-contain overflow-y-scroll">
    <Card level="WARNING" message="This documentation is not official. We are not affiliated with Minehut or GamerSafer Inc. in any way. No guarantees of accuracy are provided." />
    <View node={routes} />
</div>