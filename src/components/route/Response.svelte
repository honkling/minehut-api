<script lang="ts">
    import type { Response } from "../../types/routes";
    import Code from "../Code.svelte";

    export let response: Response;
</script>

<div class="bg-neutral-600 mr-2 pb-2 rounded-md my-1 pl-2 py-1 flex flex-col">
    <b>Response ({response.code})</b>
    <div class="flex flex-row">
        <Code class="w-fit h-6">{response.message}</Code>
        <p class="mx-1">-</p>
        {response.description}
    </div>
</div>