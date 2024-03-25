<script lang="ts">
    import type { IFolder } from "../../types/routes";
    import Folder from "./Folder.svelte";
    import Route from "./Route.svelte";

    export let node: IFolder;
    export let expanded: boolean;

    const children = node.children.sort((a, b) => a.type === b.type ? 0 : a.type === "FOLDER" ? -1 : 1);
</script>

<div class="flex flex-col">
    {#if expanded}
        <div class={node.name !== "" ? "border-l-[1px] border-l-neutral-600 pl-3 ml-1" : ""}>
            {#each children as child}
                {#if child.type === "FOLDER"}
                    <Folder node={child} />
                {:else}
                    <Route node={child} />
                {/if}
            {/each}
        </div>
    {/if}
</div>