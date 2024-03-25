<script lang="ts">
    import type { Level } from "../../types/card";
    import CardIcon from "./CardIcon.svelte";

    export let level: Level;
    export let message: string;

    const prettyLevel = level[0] + level.substring(1).toLowerCase();
    let visible = true;

    const [border, background, text] = {
        "INFO": ["border-blue-500", "bg-blue-400", "text-blue-500"],
        "WARNING": ["border-amber-400", "bg-amber-200", "text-amber-400"],
        "ERROR": ["border-red-500", "bg-red-400", "text-red-500"]
    }[level];
</script>

{#if visible}
    <div class="{border} {background} opacity-80 bg-orange border-4 h-fit rounded-lg flex flex-row max-w-lg text-black py-2">
        <div class="{text} flex items-center justify-center w-28 h-full">
            <CardIcon {level} />
        </div>

        <div class="flex flex-col">
            <div class="flex flex-row">
                <b>{prettyLevel}</b>
                <button on:click={() => visible = false} class="ml-auto mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>                  
                </button>
            </div>
            <p class="pb-1 font-extralight text-neutral-800">{message}</p>
        </div>
    </div>
{/if}