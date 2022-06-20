<template>
    <li @click="toggleMenu">
        <a class="entry-dropdown" href="#" >
            {{label}}
            <span v-if="dropdownData">
                <IconArrowUp  v-if="showDropdown"/>
                <IconArrowDown  v-else/>
            </span>
        </a>
        <ul v-if="dropdownData" class="menu-dropdown" :class="{'active': addActiveClass}">
            <li class="list-dropdown" v-for="(entry,index) in dropdownData" :key="index">
                <IconsMenu :name="entry.icon"/>
                {{entry.label}}
            </li>
        </ul>
    </li>

</template>
<script>
import { ref } from '@vue/reactivity';
import IconArrowDown from '../Icons/IconArrowDown.vue';
import IconArrowUp from '../Icons/IconArrowUp.vue';
import IconsMenu from '../Icons/IconsMenu.vue';
export default{
    props: ["label", "dropdownData", "icon"],
    components: { IconArrowDown, IconArrowUp, IconsMenu },

    setup(){
        const showDropdown = ref(false);
        const addActiveClass = ref(false)

        const toggleMenu = () => {
            showDropdown.value = !showDropdown.value
            addActiveClass.value = !addActiveClass.value
        }

        return {
            showDropdown,
            toggleMenu,
            addActiveClass
        }
    }
}

</script>
<style scoped>

li{
    list-style: none;
}

a{
    text-decoration: none;
    color:hsl(0, 0%, 41%);
    font-size: 16px;
    font-weight: 500;
}

a:hover{
    color:hsl(0, 0%, 8%);
}

.menu-dropdown{
    display: none;
    position: absolute;
    margin-top: 15px;
    padding: 0 0 0 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    padding: 20px;
}

.list-dropdown{
    margin: 15px 0;
    color:#696969;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;
}
.list-dropdown:hover{
    color:hsl(0, 0%, 8%);
    cursor:pointer
}

.active{
    display: block;
}
    
</style>