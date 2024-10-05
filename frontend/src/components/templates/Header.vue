<template>
    <header id="header">
        <div class="container">
            <div class="brand">
                <p>
                    Bla
                    <img src="@/assets/imgs/scissors.png">
                    Cut
                </p>
            </div>
            <nav class="nav-menu">
                <ul class="menu">
                    <li class="list-item">
                        <a href="/home" class="nav-link">
                            Início
                        </a>
                    </li>
                    <li class="list-item">
                        <a href="#about" class="nav-link">
                            Sobre
                        </a>
                    </li>
                    <li class="list-item">
                        <a href="#gallery" class="nav-link">
                            Galeria
                        </a>
                    </li>
                    <li class="list-item">
                        <a href="#services" class="nav-link">
                            Serviços
                        </a>
                    </li>
                    <li class="list-item">
                        <a href="#opening-hours" class="nav-link">
                            Horários
                        </a>
                    </li>
                    <li class="list-item">
                        <router-link :to="{ name: 'scheduling' }" class="nav-link">
                            Agendamento
                        </router-link>
                    </li>
                    <li class="list-item">
                        <a href="#units" class="nav-link">
                            Unidades
                        </a>
                    </li>
                    <li class="list-item">
                        <a href="#contact" class="nav-link">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderTemplate'
}
</script>

<style scoped>
header {
    height: var(--header-h); inset: 0;
    display: flex; align-items: center;
}

.container {
    width: 100%; height: 100%;
    
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
}

.brand, .brand p {
    margin: 0; padding: 0;
    display: flex; align-items: center;
    text-transform: uppercase;
}

.brand img {
    width: 32px;
}

.menu {
    display: inline-flex;
    list-style: none;
}

.menu .list-item {
    margin: 0 5px;
}
</style>