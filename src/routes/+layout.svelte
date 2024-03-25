<script>
    import "../app.css";
    import Sidebar from "../components/sidebar/Sidebar.svelte";
    import Topbar from "../components/Topbar.svelte";
</script>

<main class="left-0 top-0 w-full h-screen text-gray-200 overflow-hidden">
    <Topbar />
    <div class="flex flex-row h-full w-full">
        <Sidebar />
        <div class="mt-2 ml-2 flex justify-center w-full overflow-y-auto pb-[4rem]">
            <slot />
        </div>
    </div>
</main>