<script lang="ts">
    import type { IFolder, IRoute } from "../../types/routes";
    import Route from "./Route.svelte";

    export let node: IRoute | IFolder;
</script>

{#if node.type === "FOLDER"}
    {#each node.children as child}
        <svelte:self node={child} />
    {/each}
{:else}
    <Route route={node} />
{/if}