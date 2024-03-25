<script lang="ts">
    import type { Response } from "../../types/routes";
    import Code from "../Code.svelte";
  import Chevron from "../sidebar/Chevron.svelte";

    export let response: Response;
    let expanded = false;
</script>

<div class="bg-neutral-600 mr-2 pb-2 rounded-md my-1 pl-2 py-1 flex flex-col">
    <b>Response ({response.code})</b>
    <div class="flex flex-col">
        {response.description}
        <button on:click={() => expanded = !expanded} class="flex flex-row items-center">
            <Chevron {expanded} />
            <b class="ml-1">{expanded ? "Close" : "Open"} Body</b>
        </button>
        {#if expanded}
            <Code class="mr-2">{response.message}</Code>
        {/if}
    </div>
</div>