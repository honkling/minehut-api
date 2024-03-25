<script lang="ts">
    export let label: string;
    export let href: string;
</script>

<a {href} class="bg-blue-500 rounded-md h-8 px-2 flex items-center">
    <p>{label}</p>
</a>