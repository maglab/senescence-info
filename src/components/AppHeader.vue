<template>
    <div>
        <header class="app-header">
            <ul class="header-links navigation-links">
                <li class="header-link">
                    <div class="app-header-logo">
                        <img src="./../assets/logo.png" alt="App Logo">
                    </div>
                </li>  
                <li class="header-link d-none d-sm-block">
                    <a href="">Home</a>
                </li>
                <li class="header-link d-none d-sm-block">
                    <a href="">About</a>
                </li>
                <li class="header-link d-none d-sm-block">
                    <a href="">Contact</a>
                </li>
            </ul>
            <ul class="header-links navigation-links-end d-none d-sm-flex">
                <li class="header-link">
                    <button class="btn btn-info">Login</button>
                </li>
                <li class="header-link">
                    <button class="btn btn-success">Signup</button>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .app-header {
        align-items: center;
        background-color: black;
        height: 60px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
    }

    .navigation-links {
        display: flex;
        flex-direction: row;
    }

    .navigation-links-end {
        display: flex;
        justify-content: flex-end;
    }

    .app-header-logo {
        justify-self: center;
    }
    
    .app-header-logo img {
        width: 30px;
        justify-self: center;
    }

    .header-links {
        display: flex;
        align-items: center;
    }

    .header-link {
        list-style-type: none;
        padding: 0 10px;
    }

    .header-link a {
        color: white;
        text-decoration: none;
        font-weight: 700;
    }

    .header-link a:hover {
        color:dodgerblue;
    }
</style>
