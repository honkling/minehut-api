<script lang="ts">
    import type { IFolder } from "../../types/routes";
    import untypedRoutes from "../../routes.json";
    import Folder from "./Folder.svelte";

    const routes = untypedRoutes as IFolder;
</script>

<div class="h-full pl-4 pr-5 bg-neutral-800 border-r-[1px] border-r-neutral-600 flex justify-center">
    <Folder node={routes} />
</div>