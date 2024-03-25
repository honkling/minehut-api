<script lang="ts">
    import type { HTMLObject } from "../../types/routes";
  import Code from "../Code.svelte";

    export let object: HTMLObject | undefined;
    export let label: string;
</script>

{#if object && Object.keys(object).length > 0}
    <b class="mt-2">{label}</b>
    
    <div class="space-y-1">
        {#each Object.keys(object) as key}
            <div class="flex flex-row">
                <Code class="w-fit h-6">{key}</Code>
                <p class="mx-1">-</p>
                <Code class="w-fit h-6">{object[key].type}</Code>
                <p class="mx-1">-</p>
                {object[key].description}
            </div>
        {/each}
    </div>
{/if}