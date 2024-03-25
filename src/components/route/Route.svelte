<script lang="ts">
    import type { IRoute } from "../../types/routes";
  import Code from "../Code.svelte";
  import Object from "./Object.svelte";
  import Response from "./Response.svelte";

    export let route: IRoute;
</script>

<div class="pb-1 w-[32rem] bg-neutral-800 rounded-lg">
    <div class="rounded-t-lg h-8 bg-neutral-900 flex items-center">
        <p class="ml-2">{route.name}</p>

        {#if route.guarded}
            <div class="ml-auto mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>              
            </div>
        {/if}
    </div>

    <div class="ml-2 mt-2 flex flex-col">
        <div>
            <b>{route.method}</b>
            <Code class="py-1">{route.route}</Code>
        </div>

        <p class="mt-1">{route.description}</p>

        <Object object={route.headers} label="Headers" />
        <Object object={route.body} label="Body" />

        <b class="mt-2">Responses</b>
        {#each route.responses as response}
            <Response {response} />
        {/each}
    </div>
</div>