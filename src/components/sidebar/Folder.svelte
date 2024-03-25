<script lang="ts">
    import type { IFolder, IRoute } from "../../types/routes";
  import Chevron from "./Chevron.svelte";
    import Contents from "./Contents.svelte";

    export let node: IFolder;

    let expanded = node.name === "" ? true : false;
    let expand = () => {
        expanded = !expanded;
    }
</script>

{#if node.name === ""}
    <Contents {node} {expanded} />
{:else}
    <button on:click={expand} class="flex flex-row justify-center items-center">
        <Chevron {expanded} />
        <p class="ml-1">{node.name}</p>
    </button>

    <Contents {node} {expanded} />
{/if}